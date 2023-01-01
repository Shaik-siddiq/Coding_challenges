import React from 'react'
import {Routes, Route} from "react-router-dom"
import About from './About'
import Contact from './Contact'
import Home from './Home'
import NavBarMain from './NavBarMain'
import Services from './Services'
import Testimonial from './Testimonial'
const NavBar = () => {
  return (
    <div>
        <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/testimonial' element={<Testimonial />} />
        </Routes>
        <NavBarMain />
    </div>
  )
}

export default NavBar