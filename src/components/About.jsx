import React from 'react'
import { HiArrowNarrowDown } from 'react-icons/hi'
import { Link } from 'react-scroll'

export default function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-100'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div>
          </div>
        </div>
        <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold '>
            <p>Te invito a que conozcas un poco mas </p>
            <p className='text-pink-600'>
              sobre mi.
            </p>
          </div>
          <div>
            <div>
              <p className='mt-2 text-gray-400'>
                Actualmente estoy realizando una tecnicatura universitaria en programación en la Universidad Tecnológica Nacional (UTN).
              </p>
              <div className='text-gray-300 font-semibold'>
                <p className='my-1'>
                  En cuanto a mis objetivos, estoy en la búsqueda de una oportunidad laboral que me permita mejorar y poner en práctica mis habilidades en programación; tanto en el desarrollo de sitios web como en la resolución de problemas a través de algoritmos, en lo cual, trabajo y practico día a día con entusiasmo.
                </p>
              </div>
              <p className='text-gray-400 my-1'>
                A nivel personal estoy muy motivado por seguir aprendiendo y enfrentar cualquier desafío que se me presente.
              </p>
              <div className='text-gray-300 font-semibold flex justify-between items-center'>
                <p>
                  Te invito a leer mi <a href="https://drive.google.com/file/d/1W81G_qbzyF11oTjDsyztGAFOztDKNXS8/view?usp=sharing" className='border-b-2 hover:text-pink-600 hover:border-pink-600 duration-300'>Curriculum</a>
                </p>
                <div className='text-white size-8 flex items-center justify-center'>
                  <Link to="skills" smooth={true} duration={600}>
                    <HiArrowNarrowDown className='mt-1 hover:size-8 duration-300 cursor-pointer hover:text-pink-500' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
