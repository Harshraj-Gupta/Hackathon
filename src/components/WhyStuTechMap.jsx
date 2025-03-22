import React from 'react'
import {  Map, BookOpen, Code, Users, Compass, Lightbulb, Award } from 'lucide-react';
export default function WhyStuTechMap() {
    return (
        < div className = "py-20 px-4 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white" >
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Learning Roadmap</h2>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto">
                        Navigate your journey to mastering computer science with our structured learning path
                    </p>
                </div>

                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-center mb-20 relative">
                    <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
                        <div className="relative group">
                            <div className="w-full h-64 md:h-80 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-2xl overflow-hidden relative transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] group-hover:scale-[1.02]">
                                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-in-out"></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:-translate-y-[55%] group-hover:scale-110">
                                    <div className="w-32 h-32 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-white/20">
                                        <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full shadow-lg flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                                            <Map size={48} className="text-white transition-all duration-500 group-hover:scale-110" />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-blue-900/80 to-transparent">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                                            <span className="text-xl font-bold">1</span>
                                        </div>
                                        <h3 className="text-xl font-bold transition-all duration-300 group-hover:translate-x-1">Explore the Roadmap</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full shadow-lg flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                                <Compass size={24} className="text-white transition-all duration-500 group-hover:rotate-45" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-10 group">
                        <h3 className="text-2xl font-bold mb-4 transition-all duration-300 group-hover:text-blue-300">Explore the Roadmap</h3>
                        <p className="text-lg opacity-80 mb-6 transition-all duration-300 group-hover:opacity-100">
                            Begin your journey by exploring our comprehensive roadmap designed specifically for first-year CS students. This structured path will guide you through fundamental concepts and advanced topics in a logical progression.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start group/item">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-1 transition-all duration-300 group-hover/item:bg-blue-400 group-hover/item:scale-110">
                                    <span className="text-xs font-bold">✓</span>
                                </div>
                                <span className="transition-all duration-300 group-hover/item:translate-x-1">Understand the complete learning journey</span>
                            </li>
                            <li className="flex items-start group/item">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-1 transition-all duration-300 group-hover/item:bg-blue-400 group-hover/item:scale-110">
                                    <span className="text-xs font-bold">✓</span>
                                </div>
                                <span className="transition-all duration-300 group-hover/item:translate-x-1">Visualize your progress through interactive milestones</span>
                            </li>
                            <li className="flex items-start group/item">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-1 transition-all duration-300 group-hover/item:bg-blue-400 group-hover/item:scale-110">
                                    <span className="text-xs font-bold">✓</span>
                                </div>
                                <span className="transition-all duration-300 group-hover/item:translate-x-1">Set realistic goals with our timeline estimator</span>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden md:block absolute right-1/2 bottom-0 transform translate-x-1/2 translate-y-full">
                        <div className="w-0.5 h-16 bg-gradient-to-b from-blue-400 to-transparent"></div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center mb-20 relative">
                    <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pl-10">
                        <div className="relative group">
                            <div className="w-full h-64 md:h-80 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-2xl overflow-hidden relative transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] group-hover:scale-[1.02]">
                                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1546&q=80')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-in-out"></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:-translate-y-[55%] group-hover:scale-110">
                                    <div className="w-32 h-32 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-white/20">
                                        <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full shadow-lg flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(147,51,234,0.6)]">
                                            <BookOpen size={48} className="text-white transition-all duration-500 group-hover:scale-110" />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-purple-900/80 to-transparent">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                                            <span className="text-xl font-bold">2</span>
                                        </div>
                                        <h3 className="text-xl font-bold transition-all duration-300 group-hover:translate-x-1">Pick Learning Resources</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full shadow-lg flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-[0_0_20px_rgba(147,51,234,0.6)]">
                                <Lightbulb size={24} className="text-white transition-all duration-500 group-hover:rotate-45" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:pr-10 group">
                        <h3 className="text-2xl font-bold mb-4 transition-all duration-300 group-hover:text-purple-300">Pick Learning Resources</h3>
                        <p className="text-lg opacity-80 mb-6 transition-all duration-300 group-hover:opacity-100">
                            Access our curated collection of high-quality learning materials for each topic. We've carefully selected the best books, tutorials, courses, and documentation to help you master every concept.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start group/item">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center mr-3 mt-1 transition-all duration-300 group-hover/item:bg-purple-400 group-hover/item:scale-110">
                                    <span className="text-xs font-bold">✓</span>
                                </div>
                                <span className="transition-all duration-300 group-hover/item:translate-x-1">Expert-vetted resources for every learning style</span>
                            </li>
                            <li className="flex items-start group/item">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center mr-3 mt-1 transition-all duration-300 group-hover/item:bg-purple-400 group-hover/item:scale-110">
                                    <span className="text-xs font-bold">✓</span>
                                </div>
                                <span className="transition-all duration-300 group-hover/item:translate-x-1">Filter by difficulty, format, and estimated completion time</span>
                            </li>
                            <li className="flex items-start group/item">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center mr-3 mt-1 transition-all duration-300 group-hover/item:bg-purple-400 group-hover/item:scale-110">
                                    <span className="text-xs font-bold">✓</span>
                                </div>
                                <span className="transition-all duration-300 group-hover/item:translate-x-1">Track your progress through each resource</span>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden md:block absolute right-1/2 bottom-0 transform translate-x-1/2 translate-y-full">
                        <div className="w-0.5 h-16 bg-gradient-to-b from-purple-400 to-transparent"></div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-center mb-20 relative">
                    <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
                        <div className="relative group">
                            <div className="w-full h-64 md:h-80 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl shadow-2xl overflow-hidden relative transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] group-hover:scale-[1.02]">
                                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-in-out"></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:-translate-y-[55%] group-hover:scale-110">
                                    <div className="w-32 h-32 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-white/20">
                                        <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]">
                                            <Code size={48} className="text-white transition-all duration-500 group-hover:scale-110" />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-cyan-900/80 to-transparent">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                                            <span className="text-xl font-bold">3</span>
                                        </div>
                                        <h3 className="text-xl font-bold transition-all duration-300 group-hover:translate-x-1">Build Projects</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]">
                                <Code size={24} className="text-white transition-all duration-500 group-hover:rotate-45" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-10 group">
                        <h3 className="text-2xl font-bold mb-4 transition-all duration-300 group-hover:text-cyan-300">Build Projects</h3>
                        <p className="text-lg opacity-80 mb-6 transition-all duration-300 group-hover:opacity-100">
                            Apply your knowledge by working on carefully designed projects that reinforce key concepts. Start with beginner-friendly exercises and progress to complex real-world applications that showcase your skills.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start group/item">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center mr-3 mt-1 transition-all duration-300 group-hover/item:bg-cyan-400 group-hover/item:scale-110">
                                    <span className="text-xs font-bold">✓</span>
                                </div>
                                <span className="transition-all duration-300 group-hover/item:translate-x-1">Step-by-step guided projects with increasing complexity</span>
                            </li>
                            <li className="flex items-start group/item">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center mr-3 mt-1 transition-all duration-300 group-hover/item:bg-cyan-400 group-hover/item:scale-110">
                                    <span className="text-xs font-bold">✓</span>
                                </div>
                                <span className="transition-all duration-300 group-hover/item:translate-x-1">Code reviews and feedback from experienced mentors</span>
                            </li>
                            <li className="flex items-start group/item">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center mr-3 mt-1 transition-all duration-300 group-hover/item:bg-cyan-400 group-hover/item:scale-110">
                                    <span className="text-xs font-bold">✓</span>
                                </div>
                                <span className="transition-all duration-300 group-hover/item:translate-x-1">Build a portfolio of impressive projects to showcase</span>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden md:block absolute right-1/2 bottom-0 transform translate-x-1/2 translate-y-full">
                        <div className="w-0.5 h-16 bg-gradient-to-b from-cyan-400 to-transparent"></div>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col md:flex-row-reverse items-center relative">
                    <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pl-10">
                        <div className="relative group">
                            <div className="w-full h-64 md:h-80 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl shadow-2xl overflow-hidden relative transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(219,39,119,0.5)] group-hover:scale-[1.02]">
                                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-in-out"></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:-translate-y-[55%] group-hover:scale-110">
                                    <div className="w-32 h-32 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-white/20">
                                        <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full shadow-lg flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(219,39,119,0.6)]">
                                            <Users size={48} className="text-white transition-all duration-500 group-hover:scale-110" />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-pink-900/80 to-transparent">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                                            <span className="text-xl font-bold">4</span>
                                        </div>
                                        <h3 className="text-xl font-bold transition-all duration-300 group-hover:translate-x-1">Join the Community</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full shadow-lg flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-[0_0_20px_rgba(219,39,119,0.6)]">
                                <Award size={24} className="text-white transition-all duration-500 group-hover:rotate-45" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:pr-10 group">
                        <h3 className="text-2xl font-bold mb-4 transition-all duration-300 group-hover:text-pink-300">Join the Community</h3>
                        <p className="text-lg opacity-80 mb-6 transition-all duration-300 group-hover:opacity-100">
                            Connect with fellow learners, experienced developers, and industry professionals. Our vibrant community provides support, collaboration opportunities, and valuable networking connections.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start group/item">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mr-3 mt-1 transition-all duration-300 group-hover/item:bg-pink-400 group-hover/item:scale-110">
                                    <span className="text-xs font-bold">✓</span>
                                </div>
                                <span className="transition-all duration-300 group-hover/item:translate-x-1">Participate in discussion forums and study groups</span>
                            </li>
                            <li className="flex items-start group/item">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mr-3 mt-1 transition-all duration-300 group-hover/item:bg-pink-400 group-hover/item:scale-110">
                                    <span className="text-xs font-bold">✓</span>
                                </div>
                                <span className="transition-all duration-300 group-hover/item:translate-x-1">Attend virtual meetups, workshops, and hackathons</span>
                            </li>
                            <li className="flex items-start group/item">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mr-3 mt-1 transition-all duration-300 group-hover/item:bg-pink-400 group-hover/item:scale-110">
                                    <span className="text-xs font-bold">✓</span>
                                </div>
                                <span className="transition-all duration-300 group-hover/item:translate-x-1">Get personalized guidance from mentors and peers</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
      </div >
  )
}
