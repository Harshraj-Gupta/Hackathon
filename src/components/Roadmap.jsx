import React from 'react'
import Header from './Header'
import { ArrowRight } from 'lucide-react'
import Roadmapimages from '../public/images/RP.jpg';
import Roadmap2 from '../pages/Roadmap2';
import { Link } from 'react-router';

export default function Roadmap() {
  return (
    <>
      <Header></Header>
      <img src={Roadmapimages} alt="" className='h-full w-full' />
      <div className='font-system-ui pt-14 flex items-center justify-center bg-[#F9FAFB] pb-28'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-center text-5xl text-blue-800 font-bold '>Step-by-Step Learning Roadmap</h1>
          <p className='text-center mt-5 text-[#4B5767] text-xl'>Your structured path to becoming a proficient computer science professional. <br /> Follow our carefully crafted curriculum and track your progress.</p>
          <Link to='/Signup' className="cursor-pointer inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl animate-scale mt-8">
            Start Learning
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      <Roadmap2></Roadmap2>
    </>
  )
}

