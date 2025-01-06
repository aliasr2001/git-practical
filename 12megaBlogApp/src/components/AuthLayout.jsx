import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router'
import {useSelector} from 'react-redux'

export default function Protected({children, authentication}) {
    const navigate = useNavigate()
    const authStatus = useSelector(state => state.auth.status)
    
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        // true && ( authStatus = false  !== true ) => true 
        if(authentication && authStatus !== authentication){ 
            navigate('/login')
        } else if(!authentication && authStatus !== authentication){
            // false && ( authStatus = true  !== true ) => false
            navigate('/')
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}

