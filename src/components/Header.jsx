import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import axios from "axios";
import logo from "../public/images/L1.png"; // ✅ Ensure the logo path is correct

export default function Header() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check student authentication
        const studentRes = await axios.get("http://localhost:3050/api/auth/student", { withCredentials: true });
        if (studentRes.data) {
          setUser({ role: "student", ...studentRes.data });
          setIsAuthenticated(true);
          return;
        }
      } catch (error) {
        // No student session found, checking mentor...
      }

      try {
        // Check mentor authentication
        const mentorRes = await axios.get("http://localhost:3050/api/auth/mentor", { withCredentials: true });
        if (mentorRes.data) {
          setUser({ role: "mentor", ...mentorRes.data });
          setIsAuthenticated(true);
          return;
        }
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
      }
    };

    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:3050/api/auth/logout", { withCredentials: true });
      setIsAuthenticated(false);
      setUser(null);
      window.location.href = "/home"; // Redirect to homepage after logout
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <header className="font-system-ui w-full h-22 shadow-md bg-white">
      <nav className="flex w-full h-full">
        <div className="flex h-full justify-around w-full">
        <Link className='flex' to='/Home'>
                        <img src={logo} alt="" className='w-50 h-16 my-auto' />
                    </Link>

          <div className="flex gap-20 my-auto text-[#0D2431] text-xl font-medium">
            <Link to="/Home">Home</Link>
            <Link to="/Roadmap">Roadmap</Link>
            <Link to="/Aboutus">About Us</Link>
            <Link to="/Resources">Resources</Link>
          </div>

          <div className="my-auto gap-5 flex text-xl font-semibold">
            {isAuthenticated ? (
              <>
                {/* ✅ If user is authenticated, show Dashboard button */}
                {user?.role === "student" ? (
                  <Link
                    to="/Userdashboard"
                    className="text-green-600 border-2 bg-white px-6 rounded-md py-2 hover:cursor-pointer"
                  >
                    Student Dashboard
                  </Link>
                ) : user?.role === "mentor" ? (
                  <Link
                    to="/MentorDashboard"
                    className="text-orange-600 border-2 bg-white px-6 rounded-md py-2 hover:cursor-pointer"
                  > 
                    Mentor Dashboard
                  </Link>
                ) : null}

                <button
                  onClick={handleLogout}
                  className="text-white bg-red-600 px-8 rounded-md py-2 hover:cursor-pointer"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/Login" className="text-blue-600 border-2 bg-white px-8 rounded-md py-2 hover:cursor-pointer">
                  Login
                </Link>
                <Link to="/LoginSection" className="flex items-center justify-center text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 rounded-md py-2 hover:cursor-pointer">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
