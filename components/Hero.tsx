"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Hero = () => {
    const router = useRouter();
    function loginHandler(){
      router.push("/auth/sign-up");
        
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-7xl">
                    <h1 className="text-4xl font-bold">Cloudinary Saas:AI-Powered Media Transformation Platform</h1>
                    <p className="py-6 ">
                    AI-Managed Photo Resizing<br/>
                    Video Compression
                    </p>
                    <button 
                    className="btn btn-primary"
                    onClick={loginHandler}
                    >Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Hero