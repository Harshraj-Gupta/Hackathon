import React, { useState } from "react";
import { Mail, Lock, LogIn, GraduationCap, Users } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:3050";

export default function MentorLogin() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/api/auth/mentor/signIn`, formData, { withCredentials: true });

      alert(response.data.message);

      if (response.data.success) {
        // ✅ Redirect using window.location.href
        window.location.href = response.data.redirectUrl || "/mentor-dashboard";
      }
    } catch (error) {
      console.error("Sign-in failed:", error.response?.data || error);
      alert(error.response?.data?.message || "Sign-in failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        {/* Toggle Switch */}
        <div className="flex justify-center mb-6">
          <div className="bg-gray-200 rounded-full p-1 flex">
            <Link to="/Login" className="px-6 py-2 rounded-full text-gray-700 hover:text-gray-900">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" /> Student
              </div>
            </Link>
            <button className="px-6 py-2 rounded-full bg-blue-600 text-white" disabled>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" /> Mentor
              </div>
            </button>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-blue-800 mb-6 flex items-center gap-2">
          <LogIn className="w-8 h-8" /> Login as Mentor
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-blue-800 font-medium">
              <Mail className="w-5 h-5" /> Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border"
              placeholder="mentor@example.com"
              autoComplete="off"
              required
            />
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-blue-800 font-medium">
              <Lock className="w-5 h-5" /> Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border"
              placeholder="••••••••"
              autoComplete="off"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Login as Mentor
          </button>
        </form>
      </div>
    </div>
  );
}
