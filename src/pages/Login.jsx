// import React, { useState } from 'react';
// import { Mail, Lock, LogIn } from 'lucide-react';
// import { Link } from 'react-router';
// function Login() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
//       <div className="w-full max-w-md">
//         <div className="bg-white p-8 rounded-xl shadow-lg">
//           <h1 className="text-2xl font-bold text-blue-800 mb-6 flex items-center gap-2">
//             <LogIn className="w-8 h-8" />
//             Login to your account
//           </h1>
          
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-2">
//               <label className="flex items-center gap-2 text-blue-800 font-medium">
//                 <Mail className="w-5 h-5" />
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all"
//                 placeholder="john@example.com"
//                 required
//               />
//             </div>

//             <div className="space-y-2">
//               <label className="flex items-center gap-2 text-blue-800 font-medium">
//                 <Lock className="w-5 h-5" />
//                 Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all"
//                 placeholder="••••••••"
//                 required
//               />
//               <div className="flex justify-end">
//                 <a href="#" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
//                   Forgot Password?
//                 </a>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
//             >
//               <LogIn className="w-5 h-5" />
//               Login
//             </button>

//             <div className="text-center text-gray-600">
//               Don't have an account?{' '}
//               <Link to='/Signup' className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
//                 Sign up
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from "react";
import { Mail, Lock, LogIn, GraduationCap, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in as Student:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        {/* Toggle Switch */}
        <div className="flex justify-center mb-6">
          <div className="bg-gray-200 rounded-full p-1 flex">
            <button className="px-6 py-2 rounded-full bg-blue-600 text-white" disabled>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" /> Student
              </div>
            </button>
            <Link to="/MentorLogin" className="px-6 py-2 rounded-full text-gray-700 hover:text-gray-900">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" /> Mentor
              </div>
            </Link>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-blue-800 mb-6 flex items-center gap-2">
          <LogIn className="w-8 h-8" /> Login as Student
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
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
              placeholder="student@example.com"
              required
            />
          </div>

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
              required
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg">
            Login as Student
          </button>
        </form>
      </div>
    </div>
  );
}
