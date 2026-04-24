import React from 'react'
import { socialMedia } from '@/data'
import EmailForm from './ui/EmailForm'

interface FooterProps {
    messages: any;
}

const Footer = ({ messages }: FooterProps) => {
    return (
        <footer className='w-full pt-20 pb-20' id='contact'>
            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw]'>
                    {messages.footer.title} {' '}
                    <span className='text-guerrero-red'>{messages.footer.titleHighlight}</span>
                </h1>
                <p className="text-black md:mt-10 my-5 text-center">
                    {messages.footer.subtitle}
                </p>


                <EmailForm messages={messages} />
            </div>

            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    {messages.footer.copyright}
                </p>

                <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
                    {socialMedia.map((info) => (
                        <a key={info.id} href={info.link} target="_blank" rel="noopener noreferrer">
                            <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-guerrero-red rounded-lg border border-black-300">
                                <img src={info.img} alt="social icon" width={20} height={20} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer