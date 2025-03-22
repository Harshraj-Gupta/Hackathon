import React from 'react'
import { Route, Book, FileCode, Users, MessageCircle, Group } from 'lucide-react';
export default function Features() {
    return (
        <section className='bg-[#F6F8FF] pb-20'>
            <div className='pt-20'>
                <p className='text-center text-6xl text-blue-700 font-bold font-system-ui ' >Why StuTechMap?</p>
            </div>
            <div>
                <p className='text-center font-semibold text-gray-700 text-xl pt-10'>The ultimate platform to guide first-year CS students with structured learning, expert resources, and a supportive community.</p>
            </div>
            {/* Features Section */}
            <div className='p-10 mt-10 flex gap-10'>
                    {/* Card 1 */}
                <div className='h-75 w-95 rounded-2xl shadow-lg bg-white p-7 transition duration-300 ease-in-out hover:scale-105'>
                    <div className='rounded-full bg-blue-100 inline-block p-5'>
                        <Route className='h-10 w-10 text-blue-700' />
                    </div>
                    <div className='mt-5'>
                        <p className='font-semibold text-xl'>Step-by-Step Roadmap</p>
                        <p className='mt-6 text-gray-700'>A structured roadmap to help first-year CS students learn and grow from basics to advanced skills.</p>
                    </div>
                </div>
                    
                    {/* Card 2 */}
                     
                <div className='h-75 w-95 rounded-2xl shadow-lg bg-white p-7 transition duration-300 ease-in-out hover:scale-105'>
                    <div className='rounded-full bg-green-100 inline-block p-5'>
                        <Book className='h-10 w-10 text-green-700' />
                    </div>
                    <div className='mt-5'>
                        <p className='font-semibold text-xl'>Learning Resources</p>
                        <p className='mt-6 text-gray-700'>Carefully selected books, courses, and tutorials to help you learn CS efficiently and effectively</p>
                    </div>
                </div>
                    {/* Card 3 */}

                <div className='h-75 w-95 rounded-2xl shadow-lg bg-white p-7 transition duration-300 ease-in-out hover:scale-105'>
                    <div className='rounded-full bg-orange-100 inline-block p-5'>
                        <FileCode className='h-10 w-10 text-orange-700' />
                    </div>
                    <div className='mt-5'>
                        <p className='font-semibold text-xl'>Project-Based Learning</p>
                        <p className='mt-6 text-gray-700'>Learn by building real-world projects, applying concepts, and gaining hands-on experience in computer science..</p>
                    </div>
                </div>

                {/* Card 4 */}
                <div className='h-75 w-95 rounded-2xl shadow-lg bg-white p-7 transition duration-300 ease-in-out hover:scale-105'>
                    <div className='rounded-full bg-violet-100 inline-block p-5'>
                        <Users className='h-10 w-10 text-violet-700' />
                    </div>
                    <div className='mt-5'>
                        <p className='font-semibold text-xl'>Community Support</p>
                        <p className='mt-6 text-gray-700'>Connect with peers, get guidance from mentors, and collaborate to solve problems in a supportive community.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}
