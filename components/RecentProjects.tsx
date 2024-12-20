import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa6'

const RecentProjects = () => {
    return (
        <div className='py-20' id='projects'>
            <h1 className='heading'>Small Selection of {' '}
                <span className='text-purple'>recent projects</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center p-4 gap-x-24 gap-y-24 mt-10'>
                {projects.map(({ title, link, img, id, des, iconLists }) => (
                    <div key={id} className=' sm:h-[32rem] h-[25rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                        <PinContainer title={link} href={link}>
                            <div className='relative flex items-center justify-center sm:w-[500px] w-[70vw] overflow-hidden h-[30vh] lg:h-72 mb-10 sm:h-[40vh]'>
                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                    <img src={img} alt='bg-img' className='w-full h-full object-contain' />
                                </div>
                            </div>
                            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>
                            <p className=' lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                                {des}
                            </p>

                            <div className='flex items-center justify-between mt-7 mb-3 '>
                                <div className='flex items-center'>
                                    {iconLists.map((icon, index) => (
                                        <div key={icon} className=' border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                            style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                                            <img src={icon} alt={icon} className='p-2' />
                                        </div>

                                    ))}
                                </div>
                                <div className='flex justify-center items-center'>
                                    <a className='flex lg:text-lg md:text-xs text-sm text-purple'>Check Live Site</a>
                                    <FaLocationArrow className='ms-3' color='#CBACF9' />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))
                }
            </div >

        </div >
    )
}

export default RecentProjects