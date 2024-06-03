"use client";
import React from "react";
import Image from "next/image";
import Search from "./Search";


const Hero = () => {
  return (
    <div className="mx-auto flex w-full h-screen items-center justify-center bg-white py-16 px-4 ">
      <div className="mx-auto grid md:grid-cols-2  ">
        <div className="mx-auto flex flex-col justify-center mt-14">
          <p className="text-black  text-2xl font-bold ml-14">
            There Are 93,178 Postings Here For you!
          </p>
          <h1 className=" ml-14 md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Find Jobs, Employment & Career Opportunities
          </h1>
          <p className="ml-14 text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            culpa voluptate, tempore animi ut amet omnis dicta quibusdam maxime
            velit a reiciendis quaerat possimus perspiciatis laborum quia
            veritatis sunt et.
          </p>
          <button className="mx-auto bg-gradient-to-r from-blue-800 to-blue-500 text-white rounded-2xl w-[200px] md:mx-14 my-6 py-3">
            Get Started
          </button>
          <Search/>
        </div>
        <Image
          className="rounded-2xl mx-auto w-[500px] h-[500px] my-4 "
          src="/her.png"
          alt="handsome"
          width={500}
          height={100}
        />
      </div>
    </div>
  );
};

export default Hero;
