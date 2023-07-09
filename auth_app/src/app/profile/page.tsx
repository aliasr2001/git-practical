"use client"

import Link from 'next/link';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import React, {useState} from 'react';


export default function profilePage() {

    const router = useRouter();

    const [ data, setData ] = useState("nothing");

    const onLogout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success("Logout Successfull!")
            router.push('/login')

        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message);
        }
    }

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me');
        console.log(res.data);
        setData(res.data.data._id)
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen py-2">
            <h1 className="text-red-300 text-center text-3xl font-bold">Profile.</h1>
            <h2 className="p-1 rounded bg-green-500">{data === 'nothing' ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <button 
                className="bg-red-400 p-2 hover:bg-red-500 rounded-lg duration-300 mt-2"
                onClick={onLogout}
                >Logout</button>
            <button 
                className="bg-red-400 p-2 hover:bg-red-500 rounded-lg duration-300 mt-2"
                onClick={getUserDetails}
                >Get User Details</button>
        </div>
    )
        
}