import React, { useState } from 'react';
import {
  Home,
  Mail,
  Calendar,
  MessageSquare,
  FileText,
  Star,
  Settings,
  Bell,
  Clock,
  CheckCircle,
  XCircle,
  Upload,
  ExternalLink,
  RotateCcw,
  Plus,
  ChevronRight,
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const mentorData = {
    name: "Sarah Johnson",
    title: "Senior Frontend Developer",
    expertise: ["React", "JavaScript", "TypeScript", "UI/UX", "Data Structures"],
    bio: "10+ years of experience in frontend development. Passionate about mentoring and helping others grow in their tech careers.",
    profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    stats: {
      studentsMentored: 45,
      rating: 4.8,
      sessionsCompleted: 120
    }
  };

  const studentRequests = [
    { id: 1, name: "Rahul Kumar", course: "React.js", date: "24 March 2024", status: "pending" },
    { id: 2, name: "Priya Sharma", course: "Data Structures", date: "23 March 2024", status: "pending" }
  ];

  const nextSession = {
    title: "Advanced React – Hooks Deep Dive",
    date: "27 March 2024",
    time: "5:00 PM IST",
    platform: "Google Meet",
    link: "https://meet.google.com/xyz"
  };

  const questions = [
    { id: 1, question: "How do I optimize React performance?", status: "answered", student: "Alex Chen" },
    { id: 2, question: "Best approach to solving Graph problems?", status: "pending", student: "Maria Garcia" }
  ];

  const resources = [
    { id: 1, name: "React Roadmap", type: "PDF", link: "#" },
    { id: 2, name: "DSA Cheat Sheet", type: "Google Drive Link", link: "#" }
  ];

  const feedback = [
    { id: 1, comment: "The mentor explained React concepts really well!", rating: 4.8, student: "John Doe" },
    { id: 2, comment: "Great session on TypeScript generics!", rating: 5.0, student: "Emma Wilson" }
  ];

  const navigationItems = [
    { icon: Home, label: "Dashboard", id: "dashboard" },
    { icon: Mail, label: "Student Requests", id: "requests" },
    { icon: Calendar, label: "Scheduled Sessions", id: "sessions" },
    { icon: MessageSquare, label: "Q&A Section", id: "qa" },
    { icon: FileText, label: "Resources", id: "resources" },
    { icon: Star, label: "Feedback & Ratings", id: "feedback" },
    { icon: Settings, label: "Settings", id: "settings" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg fixed h-full">
        <div className="p-6">
          <h1 className="text-xl font-bold text-[#1742D2]">Mentor Dashboard</h1>
        </div>
        <nav className="mt-6">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#1742D2] ${
                activeSection === item.id ? 'bg-blue-50 text-[#1742D2]' : ''
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        {/* Header */}
        <header className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={mentorData.profilePic}
                alt="Profile"
                className="w-16 h-16 rounded-full border-2 border-[#1742D2]"
              />
              <div>
                <h2 className="text-2xl font-bold">{mentorData.name}</h2>
                <p className="text-gray-600">{mentorData.title}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {mentorData.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#1742D2]">{mentorData.stats.studentsMentored}</p>
                <p className="text-sm text-gray-600">Students</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#1742D2] flex items-center">
                  {mentorData.stats.rating}
                  <Star className="w-5 h-5 ml-1 text-yellow-400" fill="currentColor" />
                </p>
                <p className="text-sm text-gray-600">Rating</p>
              </div>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <Bell className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </header>

        {/* Next Session Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-[#1742D2]" />
              Next Session
            </h3>
            <div className="flex space-x-2">
              <button className="flex items-center px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                <RotateCcw className="w-4 h-4 mr-1" />
                Reschedule
              </button>
              <button className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg">
                <XCircle className="w-4 h-4 mr-1" />
                Cancel
              </button>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-lg">{nextSession.title}</h4>
            <div className="mt-2 space-y-2">
              <p className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                {nextSession.date}, {nextSession.time}
              </p>
              <p className="flex items-center text-gray-600">
                <MessageSquare className="w-4 h-4 mr-2" />
                {nextSession.platform}
              </p>
              <a
                href={nextSession.link}
                className="inline-flex items-center text-[#1742D2] hover:underline"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Join Meeting
              </a>
            </div>
          </div>
        </div>

        {/* Student Requests */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold flex items-center mb-6">
            <Mail className="w-6 h-6 mr-2 text-[#1742D2]" />
            Student Requests
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3">Student Name</th>
                  <th className="text-left py-3">Course</th>
                  <th className="text-left py-3">Request Date</th>
                  <th className="text-right py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {studentRequests.map((request) => (
                  <tr key={request.id} className="border-b">
                    <td className="py-3">{request.name}</td>
                    <td className="py-3">{request.course}</td>
                    <td className="py-3">{request.date}</td>
                    <td className="py-3">
                      <div className="flex justify-end space-x-2">
                        <button className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200">
                          <CheckCircle className="w-5 h-5" />
                        </button>
                        <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">
                          <XCircle className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Q&A Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold flex items-center mb-6">
              <MessageSquare className="w-6 h-6 mr-2 text-[#1742D2]" />
              Recent Questions
            </h3>
            <div className="space-y-4">
              {questions.map((question) => (
                <div key={question.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">{question.question}</p>
                      <p className="text-sm text-gray-600">From: {question.student}</p>
                    </div>
                    <span
                      className={`text-sm px-2 py-1 rounded-full ${
                        question.status === 'answered'
                          ? 'bg-green-100 text-green-600'
                          : 'bg-yellow-100 text-yellow-600'
                      }`}
                    >
                      {question.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold flex items-center mb-6">
              <FileText className="w-6 h-6 mr-2 text-[#1742D2]" />
              Resources
            </h3>
            <div className="space-y-4">
              {resources.map((resource) => (
                <div key={resource.id} className="p-4 bg-gray-50 rounded-lg flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{resource.name}</p>
                    <p className="text-sm text-gray-600">{resource.type}</p>
                  </div>
                  <a
                    href={resource.link}
                    className="text-[#1742D2] hover:underline flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View
                  </a>
                </div>
              ))}
              <button className="w-full mt-4 p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-[#1742D2] hover:text-[#1742D2] flex items-center justify-center">
                <Plus className="w-5 h-5 mr-2" />
                Upload New Resource
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;