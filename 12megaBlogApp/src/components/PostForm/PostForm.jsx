import React, { useCallback } from 'react'
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
      }
    }
  return (
    <div>PostForm</div>
  )
}

export default PostForm