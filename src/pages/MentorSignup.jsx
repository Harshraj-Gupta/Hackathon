import React from 'react'
import {Link} from 'react-router'
import { useState } from 'react'
import { UserPlus, User, Mail,GraduationCap, Briefcase, Building2, Code, Lock, Calendar } from 'lucide-react'

export default function MentorSignup() {
    const [formData, setFormData] = useState({
      fullname: '',
      email:'',
      password:'',
      currentJobRole:'',
      qualification:'',
      experties: [{field:"",yearsOfExperience:""}],
      isVerified:false
    })
  const addExpertise = () => {
    setFormData({
      ...formData,
      experties: [...formData.experties, { field: "", yearsOfExperience: "" }],
    });
  };
    // Handle expertise change
  const handleExpertiseChange = (index, field, value) => {
    const updatedExpertise = [...formData.experties];
    updatedExpertise[index][field] = value;
    setFormData({ ...formData, experties: updatedExpertise });
  };


  // Remove expertise field
  const removeExpertise = (index) => {
    const updatedExpertise = formData.experties.filter((_, i) => i !== index);
    setFormData({ ...formData, experties: updatedExpertise });
  };


  const expertiseOptions = [
    "Web Development",
    "Mobile Development",
    "Data Science",
    "Machine Learning",
    "Cloud Computing",
    "DevOps",
    "UI/UX Design",
    "Cybersecurity"
  ]

  const handlesubmit = async(e) =>{
      e.preventDefault();
    //   const response = await fetch("http://localhost:3050/api/auth/mentor/signUp", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });
    // const data = await response.json();
    // alert(data.message || "Signup Successful!");
  console.log(formData);
  }
  
  return (
    <>

    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="relative overflow-hidden mb-8 rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
            alt="Mentor teaching"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-[#1742D2] opacity-40"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <UserPlus className="w-16 h-16 text-white drop-shadow-lg mx-auto mb-2" />
            <h1 className="text-3xl font-bold text-white drop-shadow-lg">
              Mentor Sign Up
            </h1>
          </div>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handlesubmit}>
          {/* Full Name */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#1742D2] focus:ring-2 focus:ring-[#1742D2] focus:ring-opacity-20 transition-colors duration-300 outline-none"
                placeholder="Enter your full name"
                value={formData.fullname}
  onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
              />
            </div>
          </div>

          {/* Email */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#1742D2] focus:ring-2 focus:ring-[#1742D2] focus:ring-opacity-20 transition-colors duration-300 outline-none"
                placeholder="john@example.com"
                value={formData.email}
  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          {/* Password */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#1742D2] focus:ring-2 focus:ring-[#1742D2] focus:ring-opacity-20 transition-colors duration-300 outline-none"
                placeholder="••••••••"
                value={formData.password}
  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          </div>





          {/* Current Job Role */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Current Job Role
            </label>
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#1742D2] focus:ring-2 focus:ring-[#1742D2] focus:ring-opacity-20 transition-colors duration-300 outline-none"
                placeholder="Senior Developer"
                value={formData.currentJobRole}
  onChange={(e) => setFormData({ ...formData, currentJobRole: e.target.value })}
              />
            </div>
          </div>

{/* Qualification */}
            <div className="col-span-2">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Qualification{" "}
              {/* <span className="text-gray-400">(Optional)</span> */}
            </label>
            <div className="relative">
              <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#1742D2] focus:ring-2 focus:ring-[#1742D2] focus:ring-opacity-20 transition-colors duration-300 outline-none"
                placeholder="Qualification"
                value={formData.qualification}
  onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
              />
            </div>
          </div>

          {/* Company/Organization */}
          <div className="col-span-2">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Company/Organization{" "}
              <span className="text-gray-400">(Optional)</span>
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#1742D2] focus:ring-2 focus:ring-[#1742D2] focus:ring-opacity-20 transition-colors duration-300 outline-none"
                placeholder="Company Name"
              />
            </div>
          </div>


          {/* <div>
          <h3 className="font-semibold">Expertise</h3>
          {formData.experties.map((exp, index) => (
            <div key={index} className="flex space-x-2 mt-2">
              <select
                value={exp.field}
                onChange={(e) => handleExpertiseChange(index, "field", e.target.value)}
                required
                className="p-2 border rounded w-1/2"
              >
                <option value="">Select Field</option>
                {expertiseOptions.map((field, idx) => (
                  <option key={idx} value={field}>
                    {field}
                  </option>
                ))}
              </select>
              <input
                type="number"
                min="1"
                max="50"
                placeholder="Years"
                value={exp.yearsOfExperience}
                onChange={(e) => handleExpertiseChange(index, "yearsOfExperience", e.target.value)}
                required
                className="p-2 border rounded w-1/3"
              />
              {index > 0 && (
                <button type="button" onClick={() => removeExpertise(index)} className="text-red-500">
                  ❌
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={addExpertise} className="text-blue-500 mt-2">
            ➕ Add Expertise
          </button>
        </div> */}
        {/* Expertise Section */}
<div className="col-span-2">
  <label className="block text-gray-700 text-sm font-semibold mb-2">
    Expertise
  </label>
  {formData.experties.map((exp, index) => (
    <div key={index} className="flex space-x-3 mt-2">
      <div className="relative w-1/2">
        <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <select
          value={exp.field}
          onChange={(e) => handleExpertiseChange(index, "field", e.target.value)}
          required
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#1742D2] focus:ring-2 focus:ring-[#1742D2] focus:ring-opacity-20 transition-colors duration-300 outline-none"
        >
          <option value="">Select Field</option>
          {expertiseOptions.map((field, idx) => (
            <option key={idx} value={field}>
              {field}
            </option>
          ))}
        </select>
      </div>
      
      <div className="relative w-1/3">
        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="number"
          min="1"
          max="50"
          placeholder="Years"
          value={exp.yearsOfExperience}
          onChange={(e) => handleExpertiseChange(index, "yearsOfExperience", e.target.value)}
          required
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#1742D2] focus:ring-2 focus:ring-[#1742D2] focus:ring-opacity-20 transition-colors duration-300 outline-none"
        />
      </div>

      {index > 0 && (
        <button 
          type="button" 
          onClick={() => removeExpertise(index)} 
          className="text-red-500 hover:text-red-700 transition-colors duration-300"
        >
          ❌
        </button>
      )}
    </div>
  ))}
  
  <button 
    type="button" 
    onClick={addExpertise} 
    className="text-[#1742D2] mt-3 font-semibold hover:underline transition-colors duration-300"
  >
    ➕ Add Expertise
  </button>
</div>

        


          {/* Submit Button */}
          <div className="col-span-2 mt-6">
            <button
              type="submit"
              className="w-full bg-[#1742D2] text-white py-4 px-6 rounded-xl font-semibold 
                       transition-all duration-300 ease-smooth hover:bg-[#1235A8] hover:shadow-lg
                       flex items-center justify-center gap-2"
            >
              <UserPlus className="w-5 h-5" />
              Create Mentor Account
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}
