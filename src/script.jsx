import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router";
import Roadmap from './components/Roadmap';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Chatbot from './pages/Chatbot';
import Userdashboard from './pages/Userdashboard';
import Aboutus from './pages/Aboutus';
import SelectRoadmap from './pages/SelectRoadmap';
import LoginSection from './pages/LoginSection';
import MentorSignup from './pages/MentorSignup';
export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/Roadmap' element={<Roadmap></Roadmap>}></Route>
        <Route path='/LoginSection' element={<LoginSection></LoginSection>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/AIChatbot' element={<Chatbot></Chatbot>}></Route>
        <Route path='/Userdashboard' element={<Userdashboard></Userdashboard>}></Route>
        <Route path='/Aboutus' element={<Aboutus></Aboutus>}></Route>
        <Route path='/ExploreCourses' element={<SelectRoadmap></SelectRoadmap>}></Route>
        <Route path='/Signup' element={<Signup></Signup>}></Route>
        <Route path='/MentorSignup' element={<MentorSignup></MentorSignup>}></Route>

      </Routes>
    </BrowserRouter>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)