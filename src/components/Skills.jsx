import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript (1).png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Mysql from '../assets/mysql.png'
import laravel from '../assets/laravel.png'
import Tailwind from '../assets/tailwind.png'

import { HiArrowNarrowDown } from 'react-icons/hi'
import { Link } from 'react-scroll'

export default function Skills() {
  return (
    <div name='skills' className='bg-[#0a192f] w-full h-screen'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300'>
        <div className='flex justify-center text-4xl'>
          <p className='font-bold border-b-4 border-pink-600'>Skills</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-300'>
            <img className='w-20 mx-auto my-4' src={ReactImg} alt="React JS Icon" />
            <p className='mt-2'>React JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-300'>
            <img className='w-20 mx-auto my-4 ' src={laravel} alt="Laravel Icon" />
            <p className='mt-2'>Laravel</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-300'>
            <img className='w-30 h-[80px] mx-auto  my-4' src={Mysql} alt="MySQL Icon" />
            <p className='mt-2'>MySQL</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-300'>
            <img className='w-20 mx-auto  my-4' src={GitHub} alt="GitHub Icon" />
            <p className='mt-2'>GitHub</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-300'>
            <img className='w-20 mx-auto  my-4' src={HTML} alt="HTML Icon" />
            <p className='mt-2'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-300'>
            <img className='w-20 mx-auto  my-4' src={CSS} alt="CSS Icon" />
            <p className='mt-2'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-300'>
            <img className='w-20 mx-auto  my-4' src={Tailwind} alt="Tailwind Icon" />
            <p className='mt-2'>Tailwind</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-300'>
            <img className='w-20  mx-auto  my-4' src={JavaScript} alt='JavaScript Icon' />
            <p className='mt-2'>JavaScript</p>
          </div>
        </div>
        <div className='w-full flex justify-end'>
          <div className='text-white size-8 flex items-center justify-center'>
            <Link to="work" smooth={true} duration={600}>
              <HiArrowNarrowDown className='hover:size-8 duration-300 cursor-pointer hover:text-pink-500' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
