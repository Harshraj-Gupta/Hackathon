import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router";
import Roadmap from './components/Roadmap';
import Signup from './pages/Signup';
import Login from './pages/Login';


export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/Roadmap' element={<Roadmap></Roadmap>}></Route>
        <Route path='/Signup' element={<Signup></Signup>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>


      </Routes>
    </BrowserRouter>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)