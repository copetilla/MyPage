import React from 'react'
import { socialMedia } from '@/data'
import EmailForm from './ui/EmailForm'

const Footer = () => {
    return (
        <footer className='w-full pt-20 pb-20' id='contact'>

            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw]'>Ready to collaborate and {' '}
                    <span className='text-purple'>contribute!</span>
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Let&apos;s connect today and discuss how I can contribute to your team!
                </p>

                <EmailForm />

            </div >


            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2024 Gabriel Guerrero
                </p>

                <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
                    {socialMedia.map((info) => (
                        <a key={info.id} href={info.link} target="_blank" rel="noopener noreferrer">
                            <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                                <img src={info.img} alt="icons" width={20} height={20} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </footer >
    )
}

export default Footer