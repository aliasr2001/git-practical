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
        }
    })
  return (
    <div>PostForm</div>
  )
}

export default PostForm