'use client'

import {
  FacebookOutlined,
  GithubOutlined,
  GoogleOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from '@ant-design/icons'
import React,{useState} from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

function Signin() {
  const router = useRouter()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  async function handleLogin(event){

    event.preventDefault()
    try {
      const response=await signIn('credentials',{
        email:email,
        password:password
      })

      if(response.ok){
        console.log("Login Sucessfull")
      }
      else{
        console.log(response.error)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='flex justify-start items-start px-12 py-4 bg-[#ffff] w-1/2 fixed z-50'>
        <p
          onClick={() => router.push('/')}
          className='text-[2em] font-bricolage font-bold leading-[150%] text-[#080a45] tracking-wider cursor-pointer'
        >
          Job Portal
        </p>
      </div>
      <section className='min-h-screen flex items-stretch text-white '>
        <div className='lg:order-last lg:flex w-1/2 hidden text-[#080a45] bg-[#f1ddd9] bg-no-repeat bg-cover relative items-center'>
          <div className='w-full px-24 z-10'>
            <h1 className='text-5xl font-bold text-left tracking-wide'>
              Search Jobs
            </h1>
            <p className='text-2xl my-4'>
            Find your Interests, Land your first JOb.
            </p>
          </div>
          <div className='bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4'>
            <span>
              <TwitterOutlined className='text-[#080a45] text-2xl cursor-pointer' />
            </span>
            <span>
              <InstagramOutlined className='text-[#080a45] text-2xl cursor-pointer' />
            </span>
            <span>
              <FacebookOutlined className='text-[#080a45] text-2xl cursor-pointer' />
            </span>
          </div>
        </div>
        <div className='lg:order-1 lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0'>
          <div className='absolute lg:hidden z-10 inset-0 text-[#080a45] bg-[#f1ddd9] bg-no-repeat bg-cover items-center'></div>
          <div className='w-full z-20'>
            <h1 className='my-6 text-[2em] font-bricolage font-bold leading-[150%] text-[#080a45] tracking-wider cursor-pointer'>
              SIGN IN
            </h1>
            <div className='py-6 space-x-2'>
              <span className='w-10 h-10 bg-black items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white cursor-pointer'>
                <GithubOutlined />
              </span>
              <span className='w-10 h-10 bg-black items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white cursor-pointer'>
                <GoogleOutlined />
              </span>
              <span className='w-10 h-10 bg-black items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white cursor-pointer'>
                <TwitterOutlined />
              </span>
            </div>
            <p className='text-black'>or use your email account</p>
            <form className='sm:w-2/3 w-full px-4 lg:px-0 mx-auto'>
              <div className='pb-2 pt-4'>
                <input
                  type='email'
                  name='text'
                  id='voterId'
                  required
                  placeholder='email'
                  className='block w-full p-4 text-lg rounded-lg bg-white lg:bg-black'
                  onChange={(event)=>setEmail(event.target.value)}
                />
              </div>
              <div className='pb-2 pt-4'>
                <input
                  className='block w-full p-4 text-lg rounded-lg bg-white lg:bg-black'
                  required
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                  onChange={(event)=>setPassword(event.target.value)}
                />
              </div>
              <div className='text-right  flex justify-between gap-2'>
                <a className='text-gray-400 hover:text-black cursor-pointer' onClick={()=>router.push("/register")} >
                  don't have an account?
                </a>
                <a className='text-gray-400 hover:text-black' href='#'>
                  Forgot your password?
                </a>
              </div>
              <div className='px-4 pb-2 pt-4'>
                <button className='uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none' onClick={handleLogin}>
                  sign in
                </button>
              </div>

              <div className='p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-16 lg:hidden '>
                <a href='#' className=''>
                  <TwitterOutlined className='text-[#080a45] text-2xl cursor-pointer' />
                </a>
                <a href='#' className=''>
                  <InstagramOutlined className='text-[#080a45] text-2xl cursor-pointer' />
                </a>
                <a href='#' className=''>
                  <FacebookOutlined className='text-[#080a45] text-2xl cursor-pointer' />
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signin