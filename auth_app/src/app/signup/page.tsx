"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";


export default function signUpPage () {
    const [ user, setUser ] = React.useState({
        email: "",
        password: "",
        username: ""
    });

    const onSignUp = async () => {
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-red-300 text-center text-3xl">Sign Up</h1>
            <label htmlFor="username">Username</label>
        </div>
    )
}