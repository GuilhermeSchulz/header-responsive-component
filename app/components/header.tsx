"use client"
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

export const HeaderResponsive = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <header className="w-[100%] flex justify-between items-center p-4 bg-gray-900 ">
            <h1 className="text-center text-2xl font-bold text-white h-[40px] rounded-md">MyLogo</h1>
            <nav onClick={handleClick} className="w-[110px] group relative">
                <a className='flex gap-1 items-center justify-center p-2 rounded-md h-[40px] text-white bg-gray-800 hover:bg-gray-700 transition-colors' href='#'><AiOutlineMenu /><span className='hidden md:inline'>Menu</span></a>
                <div className={`md:hidden group-hover:block absolute top-[35px] bg-gray-800 w-[100%] -z-0 rounded ${click ? "block" : "hidden"}`}>
                    <a className='flex gap-1 items-center justify-center p-2 rounded-md text-white  hover:bg-gray-700 transition-colors' href='#'>Home</a>
                    <a className='flex gap-1 items-center justify-center p-2 rounded-md text-white  hover:bg-gray-700 transition-colors' href='#'>About</a>
                    <a className='flex gap-1 items-center justify-center p-2 rounded-md text-white  hover:bg-gray-700 transition-colors' href='#'>Contact</a>
                    <a className='flex gap-1 items-center justify-center p-2 rounded-md text-white  hover:bg-gray-700 transition-colors' href='#'>Blog</a>
                    <a className='flex gap-1 items-center justify-center p-2 rounded-md text-white  hover:bg-gray-700 transition-colors' href='#'>Portfolio</a>
                </div>
            </nav>
        </header>
    )
}