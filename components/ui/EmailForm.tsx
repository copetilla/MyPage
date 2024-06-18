'use client'

import React, { useState } from 'react'
import MagincBtn from './MagincBtn'
import { FaLocationArrow } from 'react-icons/fa6'
import emailjs from 'emailjs-com';

const EmailForm = () => {
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_USER_ID;

    if (!serviceId || !templateId) {
        throw new Error("Check env");
    }

    const [isSubmitting, setisSubmitting] = useState(false)
    const [isSent, setisSent] = useState(false)
    const [sentMessage, setsentMessage] = useState('')
    const [colorSent, setcolorSent] = useState('')

    const [formData, setFormData] = useState({
        to_name: '',
        from_name: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setisSubmitting(true);

        emailjs.send(
            serviceId, // Replace with your EmailJS service ID
            templateId, // Replace with your EmailJS template ID
            formData,
            userId // Replace with your EmailJS user ID
        )
            .then((response) => {
                setisSent(true)
                setisSubmitting(false)
                setcolorSent('text-green-500')
                setsentMessage('Email sent with success')
                console.log('SUCCESS!', response.status, response.text);
            }, (error) => {
                setcolorSent('text-red-500')
                setsentMessage('Something happened, please report the bug')
                console.log('FAILED...', error);
            });

        // Clear form
        setFormData({
            to_name: '',
            from_name: '',
            message: ''
        });
    };

    return (
        <div className='bg-slate-900/[0.8] flex md:flex-row flex-col px-5 py-5 rounded-lg w-full justify-between border-cyan-500 border '>
            <div className='flex justify-center items-center md:w-1/2 mb-5 w-full'>
                <img src="/mail4.png" alt="Image mail" className='w-60' />
            </div>
            <div className='flex flex-row md:w-1/2 justify-center items-center w-full'>
                <div className='w-full'>
                    <div className='flex justify-center mb-5'>
                        <h1 className='text-start text-xl md:text-2xl font-bold'>Send me an email</h1>
                    </div>
                    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <input
                                type='text'
                                name="to_name"
                                value={formData.to_name}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <input
                                type="email"
                                name="from_name"
                                value={formData.from_name}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <textarea
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Describe your request or question..."
                                required
                            ></textarea>
                        </div>
                        <div className='flex flex-row justify-center'>
                            <div className='flex flex-col justify-center items-center'>
                                <MagincBtn words={isSubmitting ? 'Submiting...' : 'Submit'} icon={<FaLocationArrow />} position="right" />
                                {isSent && (
                                    <p className={`mt-3 ${colorSent}`}>{sentMessage}</p>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EmailForm;
