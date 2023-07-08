"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";


export default function loginPage () {
    const router = useRouter();

    const [ user, setUser ] = React.useState({
        email: "",
        password: ""
    });

    const [ buttonDisabled, setButtonDisabled ] = React.useState(false);
    const [ loading, setLoading ] = React.useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success!", response.data);
            toast.success("Login Success!")
            router.push("/profile");
            

        } catch (error: any) {
            console.log("login Failed!", error.message);
            toast.error(error.message);

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0){
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-3">
            <h1 className="text-red-300 text-center text-3xl font-bold">{ loading ? "Logining..." : "Login"}</h1>
            <div className="flex flex-col gap-1 mb-2">
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
                onClick={onLogin}
                className="bg-red-400 p-2 hover:bg-red-500 rounded-lg duration-300" disabled={buttonDisabled ? true : false}>Login
                </button>
                {/* it the is link to login page */}
            </div>
            <p>Don't have an account?</p>
            <Link href="/signup"
            className="text-blue-400 hover:text-blue-500"
            >SignUp Here</Link>
        </div>
    )
}