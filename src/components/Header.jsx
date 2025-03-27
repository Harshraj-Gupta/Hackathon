
import React from 'react'
import logo from '../public/images/L1.png';
import { Link } from "react-router";
import { Bot } from 'lucide-react'

export default function Header() {
    return (
        <>
            <header className='font-system-ui w-full h-22 shadow-md bg-[#ffffff]'>
                <nav className='flex w-full h-full'>
                    <div className='flex h-full justify-around w-full'>
                    <Link className='flex' to='/Home'>
                        <img src={logo} alt="" className='w-50 h-16 my-auto' />
                    </Link>
                        <div className='flex gap-20 my-auto text-[#0D2431] text-xl font-medium'>
                            {/* <a href="#">Home</a> */}
                            <Link to='/Home' className='hover:text-blue-600'>
                                Home
                            </Link>
                            <Link to="/Roadmap" className='hover:text-blue-600'>
                                Roadmap
                            </Link>
                            <Link to='/Userdashboard' className='hover:text-blue-600'>User</Link>
                            <Link to='/Aboutus' className='hover:text-blue-600'>Abou Us</Link>


                            <Link to='https://www.w3schools.com/' target='_blank' className='hover:text-blue-600'>Resources</Link>
                        </div>
                        <div className='my-auto gap-5 flex text-xl font-semibold'>
                            <Link
                                to='/AIChatbot'
                                className="flex items-center justify-center text-blue-600 py-2 gap-2 border-2 px-4 hover:cursor-pointer rounded-md"
                            >
                               
                                    <Bot className="w-6 h-6 text-[#1742D2] inline" /> AI Chatbot
                            </Link>
                            <Link to='/Login' className=' text-blue-600 border-2 bg-[#ffffff] px-8 rounded-md py-2 hover:cursor-pointer'>Login</Link>
                            <Link
                                to='/LoginSection'
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
