"use client"
import { CloseCircleTwoTone, CloseOutlined, MenuOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar(){
    const [state,setState]=useState(false)
    const router= useRouter()
    return (
    <>
    <div className="bg-white flex px-10 py-5 justify-between items-center z-40 shadow-lg mx-5 my-5 rounded-lg fixed w-full">
        <div className="flex">
            <Image src="/logo.png" width={100} height={100}/>
        </div>
        <div className="hidden lg:flex justify-between gap-6">
            <div>
                <p>Home</p>
            </div>
            <div>
                <p>Find jobs</p>
            </div>
            <div>
                <p>Candidates</p>
            </div>
            <div>
                <p>Employers</p>
            </div>
            <div>
                <p>About</p>
            </div>
            <div>
                <p>Contact</p>
            </div>
        </div>
        
        <div className="hidden lg:flex justify-between gap-6">
        <button onClick={()=>router.push("/register")} className="bg-gradient-to-r from-cyan-500 to-blue-500   px-4 py-2 text-white rounded-lg">
                Upload CV
            </button>
            <button onClick={()=>router.push("/register")} className="bg-gradient-to-r from-cyan-500 to-blue-500  px-4 py-2 text-white rounded-lg">
                Register
            </button>
            <button onClick={()=>router.push("/login")} className="bg-gradient-to-r from-cyan-500 to-blue-500  px-7 py-2 text-white rounded-lg">
                Login
            </button>
        </div>
        <div className="flex lg:hidden">
            <button className="cursor-pointer">
                <MenuOutlined className={`${!state?"":"hidden"}`} onClick={()=>setState(!state)}/>
                <CloseOutlined className={`${!state?"hidden":""}`} onClick={()=>setState(!state)}/>
            </button>
        </div>
    </div>
    <div className="pt-32  px-3 grid py-3 justify-center lg:hidden">
    <div className=" grid gap-6 items-center py-5  bg-white px-16 w-full">
            <div>
                <p className="text-center">Home</p>
            </div>
            <div>
                <p className="text-center">Find jobs</p>
            </div>
            <div>
                <p className="text-center">Candidates</p>
            </div>
            <div>
                <p className="text-center">Employers</p>
            </div>
            <div>
                <p className="text-center">About</p>
            </div>
            <div>
                <p className="text-center">Contact</p>
            </div>
        </div>
    </div>
    
    </>
    );
}