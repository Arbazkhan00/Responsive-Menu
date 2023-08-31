"use client"

import Link from "next/link"

import React, { useState } from 'react'

const Nav = () => {
    const [IsManeuOpen,setiIsManeuOpen]=useState(false)
const toglyManeu=()=>{
    setiIsManeuOpen(!IsManeuOpen)
};
    return (
        <nav className='bg-gray-300 items-center p-4 flex justify-between'>
            <div className="cursor-pointer hidden md:block">
              <Link href="#">  <span>Logo</span></Link>
            </div>
        {/* for large screen is  done */}
            <div className="space-x-6 hidden md:flex cursor-pointer">

                <a>Home</a>
                <a>About</a>
                <a>News</a>
                <a>Leran More</a>

            </div>

            {/* for Mobile screen */}

          <div className="md:hidden">
            <button
                onClick={toglyManeu}
                className="focus:outline ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>

            </button>
            {IsManeuOpen &&(
                <div className="absolute left-0 w-full min-h-full pt-4 bg-gray-300 ">
                   <div className="ml-3 space-y-2 ">
                   <a className="flex ">Home</a>
                <a className="flex">About</a>
                <a className="flex">News</a>
                <a className="flex" >Leran More</a>
                   </div>

                </div>
            )

            }
            
          </div>

            <div>
        <img
        onClick={toglyManeu}
          
          src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
          alt="Avatar"
          className="h-8 w-8 rounded-full cursor-pointer"
        />
      </div>

        </nav>
    )
}

export default Nav