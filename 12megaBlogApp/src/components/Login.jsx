import React, { useState }} from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { Button, Input } from '../components'
import { login as storeLogin } from '../store/authSlice' // for storing the state in store
import services from '../appwrite/auth' // for calling the API

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const []
  return (
    <div>Login</div>
  )
}

export default Login