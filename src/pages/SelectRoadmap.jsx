import React, { useState } from 'react';
import { Code2, Database, Smartphone, Cloud, Shield, Brain, Bot, LineChart, Palette, Video, Globe, Server, Terminal, Network, Cpu, Blocks, Microscope, Binary, Workflow, Lightbulb, Coffee, Box, GitBranch, AlertCircle, Info, PenTool as Tool } from 'lucide-react';

function SelectRoadmap() {
  const [selectedRoleCourses, setSelectedRoleCourses] = useState([]);
  const [selectedSkillCourses, setSelectedSkillCourses] = useState([]);
  const [isHidden, setIsHidden] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);


const roleCourses = [
  { id: 'frontend', name: 'Frontend Development', icon: <Code2 />, description: 'Learn to build interactive and responsive web applications using HTML, CSS, and JavaScript frameworks like React and Vue.' },
  { id: 'backend', name: 'Backend Development', icon: <Server />, description: 'Master server-side programming, databases, and APIs using technologies like Node.js, Express, and SQL/NoSQL databases.' },
  { id: 'mobile', name: 'Mobile App Development', icon: <Smartphone />, description: 'Develop mobile applications for Android and iOS using frameworks like React Native, Flutter, and Swift.' },
  { id: 'cloud', name: 'Cloud Architecture', icon: <Cloud />, description: 'Understand cloud computing, deployment strategies, and services like AWS, Azure, and Google Cloud.' },
  { id: 'security', name: 'Cybersecurity Expert', icon: <Shield />, description: 'Learn about network security, ethical hacking, penetration testing, and security protocols.' },
  { id: 'ai', name: 'AI Engineer', icon: <Brain />, description: 'Explore artificial intelligence concepts, including neural networks, deep learning, and AI-driven applications.' },
  { id: 'ml', name: 'Machine Learning Engineer', icon: <Bot />, description: 'Gain expertise in machine learning algorithms, data preprocessing, and model training using Python and TensorFlow.' },
  { id: 'data', name: 'Data Scientist', icon: <LineChart />, description: 'Analyze and interpret complex data to extract insights using Python, R, and machine learning techniques.' },
  { id: 'ui', name: 'UI/UX Designer', icon: <Palette />, description: 'Design user-friendly interfaces and improve user experiences through wireframing, prototyping, and design principles.' },
  { id: 'video', name: 'Video Game Developer', icon: <Video />, description: 'Create engaging video games using engines like Unity and Unreal Engine with C# and C++ programming.' },
  { id: 'web3', name: 'Web3 Developer', icon: <Globe />, description: 'Build decentralized applications (DApps) and smart contracts using blockchain technologies like Ethereum and Solidity.' },
  { id: 'devops', name: 'DevOps Engineer', icon: <Terminal />, description: 'Automate development workflows, manage CI/CD pipelines, and deploy applications efficiently using DevOps practices.' },
  { id: 'network', name: 'Network Engineer', icon: <Network />, description: 'Learn about network infrastructure, routing, switching, and network security principles.' },
  { id: 'embedded', name: 'Embedded Systems Engineer', icon: <Cpu />, description: 'Develop software and hardware solutions for embedded systems using C, C++, and microcontrollers.' },
  { id: 'blockchain', name: 'Blockchain Developer', icon: <Blocks />, description: 'Understand blockchain technology, create smart contracts, and develop decentralized applications.' },
  { id: 'qa', name: 'Quality Assurance Engineer', icon: <Microscope />, description: 'Ensure software reliability by performing manual and automated testing with tools like Selenium and Jest.' },
  { id: 'system', name: 'Systems Architect', icon: <Binary />, description: 'Design and oversee the architecture of complex IT systems, focusing on scalability, performance, and security.' },
  { id: 'product', name: 'Product Manager', icon: <Workflow />, description: 'Develop and manage software products by aligning business goals with user needs and market trends.' },
  { id: 'research', name: 'Research Engineer', icon: <Lightbulb />, description: 'Work on innovative projects in computing, AI, or engineering by conducting in-depth research and analysis.' },
  { id: 'fullstack', name: 'Full Stack Developer', icon: <Code2 />, description: 'Master both frontend and backend technologies to build complete web applications from scratch.' }
];

const skillCourses = [
  { id: 'react', name: 'React.js', icon: <Code2 />, description: 'Learn React.js to build fast, interactive, and scalable web applications with component-based architecture.' },
  { id: 'node', name: 'Node.js', icon: <Server />, description: 'Master server-side development with Node.js and Express, handling APIs and database operations.' },
  { id: 'python', name: 'Python', icon: <Terminal />, description: 'Learn Python programming for web development, automation, AI, and data science applications.' },
  { id: 'java', name: 'Java', icon: <Coffee />, description: 'Understand Java programming for building enterprise applications, Android apps, and backend services.' },
  { id: 'aws', name: 'AWS', icon: <Cloud />, description: 'Get hands-on with Amazon Web Services (AWS) to manage cloud infrastructure and deploy applications.' },
  { id: 'docker', name: 'Docker', icon: <Box />, description: 'Learn containerization and microservices development using Docker for efficient software deployment.' },
  { id: 'kubernetes', name: 'Kubernetes', icon: <Network />, description: 'Manage containerized applications with Kubernetes for scalability, automation, and orchestration.' },
  { id: 'tensorflow', name: 'TensorFlow', icon: <Brain />, description: 'Develop AI models and machine learning applications using TensorFlow and deep learning techniques.' },
  { id: 'figma', name: 'Figma', icon: <Palette />, description: 'Use Figma for UI/UX design, wireframing, and prototyping collaborative design projects.' },
  { id: 'unity', name: 'Unity', icon: <Video />, description: 'Create 2D and 3D video games using the Unity game engine and C# scripting.' },
  { id: 'solidity', name: 'Solidity', icon: <Blocks />, description: 'Learn Solidity programming to develop smart contracts on the Ethereum blockchain.' },
  { id: 'git', name: 'Git', icon: <GitBranch />, description: 'Master Git for version control, collaboration, and managing code efficiently in software projects.' },
  { id: 'sql', name: 'SQL', icon: <Database />, description: 'Understand SQL to query databases, manage data, and perform complex data operations.' },
  { id: 'rust', name: 'Rust', icon: <Tool />, description: 'Learn Rust programming for system-level development, performance, and memory safety.' },
  { id: 'vue', name: 'Vue.js', icon: <Code2 />, description: 'Build modern and reactive web applications using the Vue.js framework.' },
  { id: 'angular', name: 'Angular', icon: <Code2 />, description: 'Develop dynamic web applications using Angular and TypeScript.' },
  { id: 'swift', name: 'Swift', icon: <Smartphone />, description: 'Learn Swift programming for developing iOS and macOS applications.' },
  { id: 'kotlin', name: 'Kotlin', icon: <Smartphone />, description: 'Use Kotlin for Android app development with modern, concise, and safe syntax.' },
  { id: 'flutter', name: 'Flutter', icon: <Smartphone />, description: 'Create cross-platform mobile applications using Flutter and the Dart programming language.' },
  { id: 'graphql', name: 'GraphQL', icon: <Database />, description: 'Understand GraphQL to build efficient and flexible APIs for web and mobile apps.' }
];

  const toggleRoleCourse = (id) => {
    setSelectedRoleCourses(prev =>
      prev.includes(id) ? prev.filter(courseId => courseId !== id) : [...prev, id]
    );
  };

  const toggleSkillCourse = (id) => {
    setSelectedSkillCourses(prev =>
      prev.includes(id) ? prev.filter(courseId => courseId !== id) : [...prev, id]
    );
  };

  return (
    <>
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1742D2] mb-4">
            Choose Your Courses and Skills
          </h1>
          <p className="text-gray-600 text-lg">
            Select courses according to your interests and career goals
          </p>
        </div>

        <div className="space-y-12">
          {/* Role-based Courses */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Role-based Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roleCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex items-center p-6 cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <div className="text-[#1742D2]">{course.icon}</div>
                      <span className="text-gray-800 font-medium flex-grow">
                        {course.name}
                      </span>
                      <input
                        type="checkbox"
                        checked={selectedRoleCourses.includes(course.id)}
                        onChange={() => toggleRoleCourse(course.id)}
                        className="h-5 w-5 rounded border-gray-300 text-[#1742D2] focus:ring-[#1742D2]"
                      />
                        <span className='absolute right-4 text-gray-500' onClick={()=>
                    {
                        setIsHidden(!isHidden)
                        setSelectedCourse(course)

                        
                    }}><Info size={24} /></span>

                    </div>
                  </div>
                </div>
              ))}

            </div>
          </section>

          {/* Skill-based Courses */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Skill-based Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex items-center p-6 cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <div className="text-[#1742D2]">{course.icon}</div>
                      <span className="text-gray-800 font-medium flex-grow">
                        {course.name}
                      </span>
                      <input
                        type="checkbox"
                        checked={selectedSkillCourses.includes(course.id)}
                        onChange={() => toggleSkillCourse(course.id)}
                        className="h-5 w-5 rounded border-gray-300 text-[#1742D2] focus:ring-[#1742D2]"
                      />
                    <span className='absolute right-4 text-gray-500' onClick={()=>
                    {
                        setIsHidden(!isHidden)
                        setSelectedCourse(course);
                        
                    }}><Info size={24} /></span>

                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className='bg-blue-600 text-white rounded-md py-3 px-10 font-medium mt-10 cursor-pointer block mx-auto'>Enroll Now</button>
          </section>
        </div>
      </div>
    
    </div>
      
      {!isHidden && ( // Show only when not hidden
  <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
    <div className="w-[60%] h-[60vh] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col relative">
      
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        onClick={() => setIsHidden(true)} // Hide popup on click
      >
        ✖
      </button>

      {/* Header Section */}
      <div className="bg-white px-8 py-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <AlertCircle className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-semibold text-gray-800">{selectedCourse?.name}</h1>
        </div>
      </div>

      {/* Description Container */}
      <div className="flex-1 p-8 bg-white">
        <div className="prose max-w-none">
          <p className="text-gray-600 leading-relaxed">
            {selectedCourse?.description}
          </p>
        </div>
      </div>
    </div>
  </div>
)}

    </>
  );
}

export default SelectRoadmap;