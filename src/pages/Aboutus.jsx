import React from 'react'
import { Users, Rocket, BookOpen, Heart, Target, ArrowRight, GraduationCap, Users2, MessageSquareMore, Github, Linkedin, Twitter } from 'lucide-react';
import Header from '../components/Header';
import Me from '../public/images/Me.png'
import Anand from '../public/images/Anand.jpeg'
export default function Aboutus() {
  return (
    <>
    <Header></Header>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1742D2] to-[#1334A6] text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Empowering Students with a Clear Path to Master Computer Science
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              We provide a structured learning roadmap, handpicked resources, and project-based learning to help students navigate their CS journey.
            </p>
            <button className="bg-white text-[#1742D2] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all flex items-center mx-auto gap-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 ">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-[#1742D2]">The Challenge</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#1742D2]"><Users className="w-5 h-5" /></div>
                  <p>Many CS students feel lost & overwhelmed after joining college</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#1742D2]"><BookOpen className="w-5 h-5" /></div>
                  <p>They don't know what to learn and in what order</p>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-[#1742D2]">Our Solution</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#1742D2]"><Rocket className="w-5 h-5" /></div>
                  <p>A step-by-step learning roadmap that guides them</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#1742D2]"><Heart className="w-5 h-5" /></div>
                  <p>Curated resources & projects to practice their skills</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-[#1742D2]/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="w-16 h-16 text-[#1742D2] mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Vision</h2>
            <p className="text-xl text-gray-700">
              To become the go-to platform for students who want to learn Computer Science in a structured, practical, and engaging way.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <GraduationCap className="w-12 h-12 text-[#1742D2] mb-4" />
            <h3 className="text-xl font-semibold mb-3">Structured Learning</h3>
            <p className="text-gray-600">No more confusion, just a clear roadmap to guide your journey.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <Users2 className="w-12 h-12 text-[#1742D2] mb-4" />
            <h3 className="text-xl font-semibold mb-3">Community Support</h3>
            <p className="text-gray-600">Get help & guidance from peers and experienced mentors.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <MessageSquareMore className="w-12 h-12 text-[#1742D2] mb-4" />
            <h3 className="text-xl font-semibold mb-3">Real-World Projects</h3>
            <p className="text-gray-600">Learn by building practical projects that matter.</p>
          </div>
        </div>
      </div>

     {/* Team Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Team Member 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80" 
                  alt="Anshu Singh"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Anshu Singh</h3>
                <p className="text-[#1742D2] font-medium mb-3">Team Leader</p>
                <p className="text-gray-600 mb-4">Leads presentation, communicates ideas, and represents the project vision.</p>
                <div className="flex gap-4 text-gray-600">
                  <a href="#" className="hover:text-[#1742D2] transition-colors"><Github className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-[#1742D2] transition-colors"><Linkedin className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-[#1742D2] transition-colors"><Twitter className="w-5 h-5" /></a>
                </div>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80" 
                  alt="Sumit Singh"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Sumit Singh</h3>
                <p className="text-[#1742D2] font-medium mb-3">Backend Engineer</p>
                <p className="text-gray-600 mb-4">Expert in building scalable systems and optimizing performance.</p>
                <div className="flex gap-4 text-gray-600">
                  <a href="#" className="hover:text-[#1742D2] transition-colors"><Github className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-[#1742D2] transition-colors"><Linkedin className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-[#1742D2] transition-colors"><Twitter className="w-5 h-5" /></a>
                </div>
              </div>
            </div>
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={Anand} 
                  alt="Anand Chaurasiya"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Anand Chaurasiya</h3>
                <p className="text-[#1742D2] font-medium mb-3">AI Chatbot & Messaging Integration Lead</p>
                <p className="text-gray-600 mb-4">AI chatbot & messaging for mentor-student interaction.</p>
                <div className="flex gap-4 text-gray-600">
                  <a href="#" className="hover:text-[#1742D2] transition-colors"><Github className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-[#1742D2] transition-colors"><Linkedin className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-[#1742D2] transition-colors"><Twitter className="w-5 h-5" /></a>
                </div>
              </div>
            </div>



            {/* Team Member 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all">
              <div className="aspect-square overflow-hidden">
                <img 
                 src={Me}
                  alt="Harshraj Gupta"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Harshraj Gupta</h3>
                <p className="text-[#1742D2] font-medium mb-3">Frontend Lead</p>
                <p className="text-gray-600 mb-4">Develops and optimizes user interface for seamless user experience.</p>
                <div className="flex gap-4 text-gray-600">
                  <a href="#" className="hover:text-[#1742D2] transition-colors"><Github className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-[#1742D2] transition-colors"><Linkedin className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-[#1742D2] transition-colors"><Twitter className="w-5 h-5" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-[#1742D2] to-[#1334A6] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-gray-100">Join our platform today and take the first step towards mastering Computer Science.</p>
          <button className="bg-white text-[#1742D2] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all flex items-center mx-auto gap-2">
            Join Now <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
    </>
  )
}
