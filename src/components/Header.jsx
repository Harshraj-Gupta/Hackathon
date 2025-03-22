
import React from 'react'
import logo from '../public/images/L1.png';
import { Link } from "react-router";

export default function Header() {
    return (
        <>
            <header className='font-system-ui w-full h-22 shadow-md bg-[#ffffff]'>
                <nav className='flex w-full h-full'>
                    <div className='flex h-full justify-around w-full'>
                        <img src={logo} alt="" className='w-50 h-16 my-auto' />
                        <div className='flex gap-20 my-auto text-[#0D2431] text-xl font-medium'>
                            {/* <a href="#">Home</a> */}
                            <Link to='/Home'>
                                Home
                            </Link>
                            <Link to="/Roadmap">
                                Roadmap
                            </Link>
                            <a href="">About</a>
                            <a href="">Resources</a>
                        </div>
                        <div className='my-auto gap-5 flex text-xl font-semibold'>
                                <Link to='/Login' className=' text-blue-600 border-2 bg-[#ffffff] px-8 rounded-md py-2 hover:cursor-pointer'>Login</Link>
                            <Link
                                to='/Signup'
                                className="flex items-center justify-center text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 rounded-md py-2 hover:cursor-pointer"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
