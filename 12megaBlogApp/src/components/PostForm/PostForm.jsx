import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Rte, Select } from '../index'
import services from '../../appwrite/config'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'

function PostForm({ post }) {
    const { register, handleSubmit, control, watch, setValue, getValues } = useForm({
        defaultValues: {
            title: post?.title || '',
            content: post?.content || '',
            slug: post?.$id || '',
            status: post?.status || 'active',
        }
    });

    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.userData)

    const Sumbit = async (data) => {
      if (post) {
        const file = data.image[0] ? await services.uploadFile(data.image[0]) : null

        if (file){
          services.deleteFile(post.featuredImage)
        }

        const dbPost = await services.updatePost(post.$id, {
          ...data,
          featuredImage: file ? file.$id : undefined,
        })

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`)
        }
      } else {
        const file = await services.uploadFile(data.image[0]);

        if(file){
          const fileId = file.$id;
          data.featuredImage = fileId;
          const dbPost = await services.createPost({...data, userId: userData.$id});

          if (dbPost){
            navigate(`/post/${dbPost.$id}`);
          
          }
        }
      }
    }

    const slugTransform = useCallback((value) => {
      if (value && typeof value === 'string')
        return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
      
      return '';
    })

    useEffect(() => {
      const subcription = watch((value, {name}) => {
        if (name === 'title')
          setValue('slug', slugTransform(value.title), { shouldValidate: true });
      })
    }, [watch, setValue, slugTransform])
  return (
    <div>PostForm</div>
  )
}

export default PostForm