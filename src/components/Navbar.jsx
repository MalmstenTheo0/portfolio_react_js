import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

export default function Navbar() {

  const [nav, setNav] = useState(false)

  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-end items-center px-4 bg-[#0a192f] text-gray-300'>

      {/* Menu */}
      <div>
        <ul className='hidden md:flex'>
        <li>
          <Link to="home" smooth={true} duration={800}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={800}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={800}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={800}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={800}>
            Contact
          </Link>
        </li>
        </ul>
      </div>

      {/* Menu Hamburguesa */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-3 text-3xl'>
          <Link onClick={handleClick} to="home" smooth={true} duration={300}>
            Home
          </Link>
        </li>
        <li className='py-3 text-3xl'>
          <Link onClick={handleClick} to="about" smooth={true} duration={300}>
            About
          </Link>
        </li>
        <li className='py-3 text-3xl'>
          <Link onClick={handleClick} to="skills" smooth={true} duration={300}>
            Skills
          </Link>
        </li>
        <li className='py-3 text-3xl'>
          <Link onClick={handleClick} to="work" smooth={true} duration={300}>
            Work
          </Link>
        </li>
        <li className='py-3 text-3xl'>
          <Link onClick={handleClick} to="contact" smooth={true} duration={300}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[40%] left-0'>
        <ul>
          <li className='mb-2 w-[160px] h-[35px] flex justify-between items-center ml-[-88px] hover:ml-[-10px] duration-500'>
            <a className='flex gap-5 items-center w-full text-gray-300' href="https://www.linkedin.com/in/theo-malmsten-47920027a/">Linkedin <FaLinkedin size={30} /></a>
          </li>
          <li className='mb-2 w-[160px] h-[35px] flex justify-between items-center ml-[-78px] hover:ml-[-10px] duration-500'>
            <a className='flex gap-5 items-center w-full text-gray-300' href="https://github.com/MalmstenTheo0">GitHub <FaGithub size={30} /></a>
          </li>
          <li className='w-[190px] h-[35px] flex justify-between items-center ml-[-108px] hover:ml-[-10px] duration-500'>
            <a className='flex gap-5 items-center w-full text-gray-300' href="https://drive.google.com/file/d/1W81G_qbzyF11oTjDsyztGAFOztDKNXS8/view?usp=sharing">Curriculum <BsFillPersonLinesFill size={30} /></a>
          </li>
        </ul>
      </div>

    </div>
  )
}
