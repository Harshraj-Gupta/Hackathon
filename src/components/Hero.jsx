import React from 'react'
import { Link } from 'react-router'
export default function Hero() {
    return (
        <section className='w-full flex'>
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-white to-yellow-50 w-full">
                {/* Abstract tech pattern background */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-no-repeat bg-cover"></div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-20 left-10 w-16 h-16 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-orange-500 rounded-full opacity-10 animate-pulse delay-700"></div>
                <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-yellow-500 rounded-full opacity-10 animate-pulse delay-1000"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32 flex flex-col-reverse md:flex-row items-center">
                        {/* Text content */}
                        <div className="md:w-1/2 md:pr-8 z-10">
                            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                                For CS Students
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">The Ultimate Roadmap</span>
                                <span className="block mt-2">for CS Students</span>
                            </h1>
                            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl">
                                 Confused about what to learn? Get a structured path and start your journey with expert-curated resources.
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <Link to='/Signup' className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg shadow-lg transform transition duration-300 hover:scale-105 flex items-center justify-center">
                                    Start Learning Now <span className="ml-2">🚀</span>
                                </Link>
                                <button className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold rounded-lg shadow-md transform transition duration-300 hover:scale-105 flex items-center justify-center">
                                    Explore Resources <span className="ml-2">📚</span>
                                </button>
                            </div>

                            {/* Trust indicators */}
                            <div className="mt-12 flex items-center space-x-6">
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-bold text-blue-600">500+</span>
                                    <span className="text-sm text-gray-500">Resources</span>
                                </div>
                                <div className="h-10 w-px bg-gray-300"></div>
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-bold text-orange-500">50+</span>
                                    <span className="text-sm text-gray-500">Roadmaps</span>
                                </div>
                                <div className="h-10 w-px bg-gray-300"></div>
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-bold text-yellow-500">10k+</span>
                                    <span className="text-sm text-gray-500">Students</span>
                                </div>
                            </div>
                        </div>

                        {/* Illustration */}
                        <div className="md:w-1/2 mt-12 md:mt-0 z-10 md:pl-8">
                            <div className="relative">
                                {/* Decorative elements */}
                                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-400 rounded-xl opacity-50 transform rotate-3"></div>
                                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-orange-400 rounded-xl opacity-50 transform -rotate-3"></div>

                                <div className="relative bg-white p-2 rounded-xl shadow-2xl overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                        alt="Students collaborating on tech projects"
                                        className="rounded-lg shadow-inner transform transition-transform duration-500 hover:scale-105"
                                    />

                                    {/* Floating badges */}
                                    <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-12">
                                        Python
                                    </div>
                                    <div className="absolute top-1/4 -left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform -rotate-12">
                                        JavaScript
                                    </div>
                                    <div className="absolute bottom-1/4 -right-3 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-12">
                                        React
                                    </div>
                                    <div className="absolute -bottom-2 left-1/3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform -rotate-12">
                                        Java
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Wave divider */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                        <svg className="relative block w-full h-12 md:h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,214.86,141.14c67.64,0,133.76-18.59,190.91-51.39C446.5,67.17,493.78,38.95,551.2,21.49,608.25,4.08,660.55-5.82,713.81,3.34,761.86,11.73,810,33.29,858,57.58,904.12,80.83,947.55,105.63,1000.08,111.28c39.54,4.24,79.54,1.35,117.21-9.55,5.67-1.64,11.27-3.47,16.89-5.4"
                                fill="#ffffff"
                                fillOpacity="1"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}
