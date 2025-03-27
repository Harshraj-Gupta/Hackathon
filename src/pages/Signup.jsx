import React, { useState } from 'react';
import { User, Mail, Lock, BookOpen, Calendar, ChevronDown, GraduationCap } from 'lucide-react';
import axios from "axios";
const API_URL ='http://localhost:3050'
function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    course: '',
    semester: ''
  });

  const courses = [
    'Master of Computer Applications (MCA)',
    'Bachelor of Computer Applications (BCA)',
    'Bachelor of Technology (B.Tech) - Computer Science',
    'Bachelor of Technology (B.Tech) - Information Technology',
    'Bachelor of Science (B.Sc) - Computer Science',
    'Master of Science (M.Sc) - Computer Science',
    'Master of Technology (M.Tech) - Computer Science'
  ];

  const semesters = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/api/auth/signUp`, formData,
        {
          withCredentials: true,
        }
      );
      alert(response.data.message);
      if (response.data.success) {
        window.location.href = response.data.redirectUrl;  // Redirect based on backend response
    }
    } catch (error) {
      console.error("Signup failed", error.response?.data || error);
      alert(error.response?.data?.message || "Registration failed. Try again.");
    }
  }    

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-xl shadow-xl">
          <h1 className="text-2xl font-bold text-blue-800 mb-6 flex items-center gap-2">
            <GraduationCap className="w-8 h-8" />
            Create Your Account
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-blue-800 font-medium">
                <User className="w-5 h-5" />
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-blue-800 font-medium">
                <Mail className="w-5 h-5" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all"
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-blue-800 font-medium">
                <Lock className="w-5 h-5" />
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all"
                placeholder="••••••••"
                pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                title="Must contain at least 8 characters, including letters, numbers and special characters"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-blue-800 font-medium">
                <Lock className="w-5 h-5" />
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-blue-800 font-medium">
                <BookOpen className="w-5 h-5" />
                Select Program
              </label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all appearance-none bg-white"
                required
              >
                <option value="">Select your program</option>
                {courses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-blue-800 font-medium">
                <Calendar className="w-5 h-5" />
                Select Semester
              </label>
              <select
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all appearance-none bg-white"
                required
              >
                <option value="">Select semester</option>
                {semesters.map((semester) => (
                  <option key={semester} value={semester}>
                    {semester} Semester
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <ChevronDown className="w-5 h-5" />
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Signup;