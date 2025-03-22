import RoadmapSection from './RoadmapSection'
import { Link } from 'react-router';
const roadmapData = {
  beginner: {
    title: "Beginner's Path",
    description: "Master the fundamentals of computer science and programming",
    gradient: "bg-gradient-to-r from-blue-600 to-blue-400",
    topics: [
      {
        id: "b1",
        title: "Front-End Development",
        description: "Build interactive, responsive, and dynamic websites.",
        completed: true,
        duration: "4 weeks",
        difficulty: "Beginner",
        resources: 12,
        link: "https://roadmap.sh/frontend"
      },
      {
        id: "b2",
        title: "Data Structures",
        description: "Understanding arrays, linked lists, stacks, and queues",
        completed: false,
        duration: "6 weeks",
        difficulty: "Beginner",
        resources: 8,
        link: "https://roadmap.sh/datastructures-and-algorithms"
      },
      {
        id: "b3",
        title: "Basic Algorithms",
        description: "Study sorting, searching, and basic problem-solving techniques",
        completed: false,
        duration: "6 weeks",
        difficulty: "Beginner",
        resources: 10,
        link: "https://roadmap.sh/datastructures-and-algorithms"
      }
    ]
  },
  intermediate: {
    title: "Intermediate Journey",
    description: "Dive deeper into advanced programming concepts and software development",
    gradient: "bg-gradient-to-r from-purple-600 to-purple-400",
    topics: [
      {
        id: "i1",
        title: "Object-Oriented Programming",
        description: "Master classes, inheritance, polymorphism, and encapsulation",
        completed: false,
        duration: "8 weeks",
        difficulty: "Intermediate",
        resources: 15,
        link: ""

      },
      {
        id: "i2",
        title: "Database Systems",
        description: "Learn SQL, database design, and management",
        completed: false,
        duration: "6 weeks",
        difficulty: "Intermediate",
        resources: 9,
        link: ""

      },
      {
        id: "i3",
        title: "Web Development",
        description: "Build full-stack applications with modern technologies",
        completed: false,
        duration: "12 weeks",
        difficulty: "Intermediate",
        resources: 20,
        link: ""

      }
    ]
  },
  advanced: {
    title: "Advanced Mastery",
    description: "Specialize in complex topics and industry-ready skills",
    gradient: "bg-gradient-to-r from-indigo-600 to-indigo-400",
    topics: [
      {
        id: "a1",
        title: "System Design",
        description: "Design scalable systems and architectures",
        completed: false,
        duration: "10 weeks",
        difficulty: "Advanced",
        resources: 14,
        link: ""

      },
      {
        id: "a2",
        title: "Machine Learning",
        description: "Explore AI, neural networks, and data science",
        completed: false,
        duration: "16 weeks",
        difficulty: "Advanced",
        resources: 25,
        link: ""

      },
      {
        id: "a3",
        title: "Cloud Computing",
        description: "Master cloud platforms and distributed systems",
        completed: false,
        duration: "12 weeks",
        difficulty: "Advanced",
        resources: 18,
        link: ""
      }
    ]
  }
};

function Roadmap() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-16">

        {/* Roadmap Sections */}
        <RoadmapSection {...roadmapData.beginner} />
        <RoadmapSection {...roadmapData.intermediate} />
        <RoadmapSection {...roadmapData.advanced} />

        {/* Call to Action */}
        <div className="text-center mt-16 relative p-5 pb-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-5 rounded-3xl" />
          <p className="text-xl text-gray-600 mb-8">
            Ready to take your first step? Start with our beginner-friendly courses and build your way to becoming a professional developer.
          </p>
          <Link to='/Signup'
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl transition-all duration-300 shadow-lg  cursor-pointer relative " >
            Begin Your Journey
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Roadmap;