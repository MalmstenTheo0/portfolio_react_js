import React from 'react'
import twitterClone from '../assets/twitterClone.png'
import MovieLand from '../assets/MovieLand.png'
import Expensetracker from '../assets/Expensetracker.png'

import { HiArrowNarrowDown } from 'react-icons/hi'
import { Link } from 'react-scroll'

export default function Work() {
  return (
    <div className='w-full md:h-screen text-gray-300 bg-[#0a192f]' name='work'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 '>Projectos</p>
          <p className='py-6 pb-0'>Estos son algunos del trabajos que realice.</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Imagen 1 */}
          <div style={{ backgroundImage: `url(${twitterClone})`, backgroundSize: '100% 100%' }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 flex flex-col '>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Twitter Clone <br /> Laravel
              </span>
              <div className='pt-8 text-center'>
                <a href="/* link */">
                  {/* <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button> */}
                </a>
                <a href="https://github.com/MalmstenTheo0/twitterClone_laravel">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Codigo</button>
                </a>
              </div>
            </div>
          </div>
          {/* Imagen 2 */}
          <div style={{ backgroundImage: `url(${MovieLand})`, backgroundSize: '100% 100%' }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 flex flex-col '>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Movie Land <br /> React JS
              </span>
              <div className='pt-8 text-center'>
                <a href="/* link */">
                  {/* <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button> */}
                </a>
                <a href="https://github.com/MalmstenTheo0/movieLand_react_js">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Codigo</button>
                </a>
              </div>
            </div>
          </div>
          {/* Imagen 3 */}
          <div style={{ backgroundImage: `url(${Expensetracker})`, backgroundSize: '100% 100%' }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 flex flex-col '>
              <span className='text-2xl font-bold text-white '>
                Expense Tracker <br /> React JS
              </span>
              <div className='pt-8 text-center'>
                <a href="/* link */">
                  {/* <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button> */}
                </a>
                <a href="https://github.com/MalmstenTheo0/expenseTracker_react_js">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Codigo</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-end mt-3'>
          <div className='text-white size-8 flex items-center justify-center'>
            <Link to="contact" smooth={true} duration={600}>
              <HiArrowNarrowDown className='hover:size-8 duration-300 cursor-pointer hover:text-pink-500' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
