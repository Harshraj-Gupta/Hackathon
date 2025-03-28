import React, {useState} from 'react'
import {Link} from 'react-router'
import {Code2, Server, Smartphone}  from 'lucide-react'
import {
  Home,
  BookOpen,
  FileText,
  Users,
  Settings,
  LogOut,
  Trophy,
  BookMarked,
  Target,
  BarChart3,
  Calendar,
  Bell,
  Compass
} from 'lucide-react';


export default function Userdashboard() {
  const [selectedCourse, setSelectedCourse] = useState("frontend")
  const [isTransitioning, setIsTransitioning] = useState(false)

  const courseData = {
    frontend: {
      completedModules: 12,
      totalModules: 20,
      nextLesson: "Advanced React Patterns",
      upcomingDeadline: "March 20, 2024",
      dailyChallenge: {
        title: "Build a React Component",
        description:
          "Create a reusable button component with different variants."
      },
      resources: [
        "React Documentation",
        "TypeScript Handbook",
        "CSS Tricks Guide"
      ]
    },
    backend: {
      completedModules: 8,
      totalModules: 15,
      nextLesson: "Database Design Patterns",
      upcomingDeadline: "March 25, 2024",
      dailyChallenge: {
        title: "Create an API Endpoint",
        description: "Build a RESTful API endpoint with proper error handling."
      },
      resources: [
        "Node.js Documentation",
        "SQL Fundamentals",
        "API Design Guide"
      ]
    },
    mobile: {
      completedModules: 5,
      totalModules: 18,
      nextLesson: "Native Device Features",
      upcomingDeadline: "March 30, 2024",
      dailyChallenge: {
        title: "Mobile UI Components",
        description: "Design and implement a mobile-first navigation system."
      },
      resources: [
        "React Native Docs",
        "Mobile UI/UX Guide",
        "App Store Guidelines"
      ]
    }
  }

  const roleCourses = [
    {
      id: "frontend",
      name: "Frontend Development",
      icon: <Code2 />,
      description:
        "Learn to build interactive and responsive web applications using HTML, CSS, and JavaScript frameworks like React and Vue."
    },
    {
      id: "backend",
      name: "Backend Development",
      icon: <Server />,
      description:
        "Master server-side programming, databases, and APIs using technologies like Node.js, Express, and SQL/NoSQL databases."
    },
    {
      id: "mobile",
      name: "Mobile App Development",
      icon: <Smartphone />,
      description:
        "Develop mobile applications for Android and iOS using frameworks like React Native, Flutter, and Swift."
    }
  ]

  const username = "Sanju"

  const handleCourseClick = courseId => {
    if (courseId !== selectedCourse) {
      setIsTransitioning(true)
      setTimeout(() => {
        setSelectedCourse(courseId)
        setIsTransitioning(false)
      }, 300)
    }
  }

  const currentCourseData = courseData[selectedCourse]

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-[#1742D2] text-white p-6 space-y-6">
          <div className="flex items-center space-x-2 mb-8">
            <BookMarked className="w-8 h-8" />
            <span className="text-xl font-bold">StuTechMap</span>
          </div>

          <nav className="space-y-2">
            <Link
              to=""
              className="flex items-center space-x-3 bg-white/10 text-white p-3 rounded-lg"
            >
              <Home className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>

            <Link
              to="/ExploreCourses"
              className="flex items-center space-x-3 hover:bg-white/10 p-3 rounded-lg transition-colors"
            >
              <Compass className="w-5 h-5" />
              <span>Explore Courses</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-3 hover:bg-white/10 p-3 rounded-lg transition-colors"
            >
              <Target className="w-5 h-5" />
              <span>My Roadmap</span>
            </Link>
            <Link
              to="https://www.w3schools.com/"
              className="flex items-center space-x-3 hover:bg-white/10 p-3 rounded-lg transition-colors z-10 relative hover:cursor-pointer"
            >
              <FileText className="w-5 h-5" />
              <span>Resources</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-3 hover:bg-white/10 p-3 rounded-lg transition-colors"
            >
              <Trophy className="w-5 h-5" />
              <span>Projects & Challenges</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-3 hover:bg-white/10 p-3 rounded-lg transition-colors"
            >
              <Users className="w-5 h-5" />
              <span>Community</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-3 hover:bg-white/10 p-3 rounded-lg transition-colors"
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </Link>
          </nav>

          <div className="pt-6 mt-6 border-t border-white/10">
            <button className="flex items-center space-x-3 hover:bg-white/10 p-3 rounded-lg transition-colors w-full">
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Welcome back, {username}! 👋
                </h1>
                <p className="text-gray-600 mt-1">
                  Ready to continue your learning journey?
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Bell className="w-6 h-6 text-gray-600" />
                </button>
                <div className="w-10 h-10 rounded-full bg-[#1742D2] text-white flex items-center justify-center">
                  {username[0]}
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-600">
              Your enrolled courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roleCourses.map(course => (
                <div
                  key={course.id}
                  onClick={() => handleCourseClick(course.id)}
                  className={`bg-white rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:scale-105 mb-10 mt-5 cursor-pointer ${
                    selectedCourse === course.id ? "ring-2 ring-[#1742D2]" : ""
                  }`}
                >
                  <div className="flex items-center p-6">
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="text-[#1742D2]">{course.icon}</div>
                      <span className="text-gray-800 font-medium">
                        {course.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Overview with Transitions */}
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 transition-opacity duration-300 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-800">
                    Course Progress
                  </h3>
                  <BarChart3 className="w-5 h-5 text-[#1742D2]" />
                </div>
                <div className="mb-4">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-[#1742D2] rounded-full transition-all duration-500"
                      style={{
                        width: `${(currentCourseData.completedModules /
                          currentCourseData.totalModules) *
                          100}%`
                      }}
                    ></div>
                  </div>
                </div>
                <p className="text-gray-600">
                  {currentCourseData.completedModules} of{" "}
                  {currentCourseData.totalModules} modules completed
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-800">Next Lesson</h3>
                  <BookOpen className="w-5 h-5 text-[#1742D2]" />
                </div>
                <p className="text-gray-600">{currentCourseData.nextLesson}</p>
                <button className="mt-4 text-[#1742D2] font-medium hover:underline">
                  Continue Learning →
                </button>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-800">
                    Upcoming Deadline
                  </h3>
                  <Calendar className="w-5 h-5 text-[#1742D2]" />
                </div>
                <p className="text-gray-600">
                  {currentCourseData.upcomingDeadline}
                </p>
                <button className="mt-4 text-[#1742D2] font-medium hover:underline">
                  View Calendar →
                </button>
              </div>
            </div>

            {/* Quick Access Section with Transitions */}
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-opacity duration-300 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-4">
                  Daily Challenge
                </h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-700">
                    {currentCourseData.dailyChallenge.title}
                  </h4>
                  <p className="text-gray-600 mt-2">
                    {currentCourseData.dailyChallenge.description}
                  </p>
                  <button className="mt-4 bg-[#1742D2] text-white px-4 py-2 rounded-lg hover:bg-[#1742D2]/90 transition-colors">
                    Start Challenge
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-4">
                  Learning Resources
                </h3>
                <ul className="space-y-3">
                  {currentCourseData.resources.map((resource, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-3 text-gray-600"
                    >
                      <FileText className="w-5 h-5 text-[#1742D2]" />
                      <span>{resource}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
