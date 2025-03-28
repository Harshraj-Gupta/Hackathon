import React from 'react'
import logo from '../public/images/L1.png'
import {Link} from 'react-router'
export default function Footer() {
    return (
         <footer className='flex flex-col'>
            <div className='w-full h-70 bg-[#FfffFF] flex justify-evenly items-center'>
                <div className=' p-5' >
                    <img src={logo} alt="" className='w-50 h-16' />
                    <p className='text-xl text-gray-700'>The Ultimate Roadmap for CS Students</p>
                </div>
                <div className='flex flex-col p-5 text-gray-600'> 
                    <p className='text-2xl text-black font-semibold mb-5'>Quick Links</p>
                    <Link to='/'>Home</Link>
                    <Link to='/Aboutus'>About Us</Link>
                    <Link to='/Roadmap'>Roadmap</Link>
                    <Link to='https://www.w3schools.com/'>Resources</Link>
                </div>
                <div className='flex flex-col p-5 text-gray-600'>
                    <p className='text-2xl text-black font-semibold mb-10'>Company</p>
                    <a href="">Terms & Conditions</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Legal</a>
                </div>

                <div className='w-50 h-auto p-5'>
                    <p className='text-xl font-bold text-blue-700'>Empowering CS Students with a Structured Path to Learn, Build, and Succeed.</p>
                </div>
            </div>
            <hr className='w-[90%] mx-auto'/>
            <div>
            
            </div>
        </footer>
    )
}
