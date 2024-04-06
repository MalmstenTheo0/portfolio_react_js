import React from 'react'
import { HiArrowNarrowRight, HiArrowNarrowDown } from 'react-icons/hi'
import { Link } from 'react-scroll'

export default function Home() {
  return (
    <div name='home' className='bg-[#0a192f]  w-full h-screen'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-500'>Hola! Me llamo </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-gray-200'>Theo Malmsten</h1>
        <h2 className='text-2xl sm:text-3xl font-bold text-pink-500'>Web Developer</h2>
        <p className='text-gray-400 py-4 max-w-[700px]'>Y me inicalize en el mundo de la programacion a principios de 2023. <br />En ese momento, descubri lo que hoy es mi pasion.</p>
        <p className='text-gray-300 max-w-[700px]'>Actualmente me dedico al Desarrollo web. Comence enfocandome en el estudio del Front End, y al descubrir nuevas tecnologias, incursione en el Back End. <br />Por lo que hoy me encuentro estudiando ambos campos. </p>
        <p className='text-gray-400 py-4 max-w-[700px]'>Mi gran interés en la programación y en la resolución de problemas me llevó a instruirme en este atrapante rubro en profundidad. Comencé de forma autodidacta y ahora estoy complementando mi aprendizaje en la universidad. </p>
        <div className='flex justify-between items-center'>
          <Link to="work" smooth={true} duration={800}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>Ver trabajos
              <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300' />
            </button>
          </Link>
          <div className='text-white size-8 flex items-center justify-center'>
            <Link to="about" smooth={true} duration={600}>
              <HiArrowNarrowDown className='hover:size-8 duration-300 cursor-pointer hover:text-pink-500' />
            </Link>
          </div>
        </div>
      </div>
    </div >
  )
}
