"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";


export default function signUpPage () {
    const router = useRouter();

    const [ user, setUser ] = React.useState({
        email: "",
        password: "",
        username: ""
    });

    const [ buttonDisabled, setButtonDisabled ] = React.useState(false);
    const [ loading, setLoading ] = React.useState(false);

    useEffect(() => {
        if(user.email.length > 0 && user.username.length > 0 && user.password.length > 0){
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user]);

    const onSignUp = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            // console.log("Signup success!", response.data);
            router.push("/login");
            

        } catch (error: any) {
            // console.log("SignUp Failed!", error.message);
            toast.error(error.message);

        } finally {
            setLoading(false);
        }
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-3">
            <h1 className="text-red-300 text-center text-3xl font-bold">{loading ? "Signing Up..." : "SignUp"}</h1>
            <div className="flex flex-col gap-1 mb-2">
                {/* It is a username input field */}
                <label htmlFor="username">Username</label>
                <input 
                className="p-2 rounded-lg focus:outline-none bg-transparent border border-gray-700 focus:border-gray-500 mb-3"
                type="text"
                id="username"
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="Enter the Username"
                />
                {/* its is a email input field */}
                <label htmlFor="email">Email</label>
                <input 
                className="p-2 rounded-lg focus:outline-none bg-transparent border border-gray-700 focus:border-gray-500 mb-3"
                type="email"
                id="email"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="Enter the Email"
                />
                {/* It is the password field */}
                <label htmlFor="password">Password</label>
                <input 
                className="p-2 rounded-lg focus:outline-none bg-transparent border border-gray-700 focus:border-gray-500 mb-3"
                type="password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="Enter the password"
                />
                {/* the signup button starts here */}
                <button 
                onClick={onSignUp}
                className="bg-red-400 p-2 hover:bg-red-500 rounded-lg duration-300">{buttonDisabled ? "Fill Up to SignUp" : " Now SignUp"}
                </button>
                {/* it the is link to login page */}
            </div>
            <p>Already Signed Up?</p>
            <Link href="/login"
            className="text-blue-400 hover:text-blue-500"
            >Login Here</Link>
        </div>
    )
}