import React from 'react'
import { GraduationCap, Users } from 'lucide-react';
import {Link} from 'react-router'
export default function LoginSection() {
  return (
    <>
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-8">
        
        {/* Student Login Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all hover:scale-105 hover:shadow-2xl">
          <div className="relative overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
              alt="Students studying"
              className="w-full h-48 object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-[#1742D2] opacity-40 rounded-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <GraduationCap className="w-16 h-16 text-white drop-shadow-lg" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Student Signup</h2>
          <p className="text-gray-600 mb-6 text-center">Access your learning dashboard and course materials</p>
          <Link 
          to='/Signup'
            className="w-full bg-[#1742D2] text-white py-3 px-6 rounded-xl font-semibold 
                     transform transition-all hover:bg-[#1235A8] hover:shadow-lg
                     flex items-center justify-center gap-2"
          >
            <GraduationCap className="w-5 h-5" />
            Signup as Student
          </Link>
        </div>

        {/* Mentor Login Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all hover:scale-105 hover:shadow-2xl">
          <div className="relative overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
              alt="Mentor teaching"
              className="w-full h-48 object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-[#1742D2] opacity-40 rounded-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Users className="w-16 h-16 text-white drop-shadow-lg" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Mentor Signup</h2>
          <p className="text-gray-600 mb-6 text-center">Access your teaching portal and student management</p>
          <Link
            to='/MentorSignup' 
            className="w-full bg-[#1742D2] text-white py-3 px-6 rounded-xl font-semibold 
                     transform transition-all hover:bg-[#1235A8] hover:shadow-lg
                     flex items-center justify-center gap-2"
          >
            <Users className="w-5 h-5" />
            Signup as Mentor
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}
