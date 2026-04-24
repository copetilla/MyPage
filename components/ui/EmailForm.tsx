'use client'

import React, { useState } from 'react'
import MagincBtn from './MagincBtn'
import { FaLocationArrow } from 'react-icons/fa6'
import emailjs from 'emailjs-com';

interface EmailFormProps {
    messages: any;
}

const EmailForm = ({ messages }: EmailFormProps) => {
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_USER_ID;

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
        if (!serviceId || !templateId) return;

        setisSubmitting(true);
        emailjs.send(serviceId, templateId, formData, userId)
            .then(() => {
                setisSent(true)
                setisSubmitting(false)
                setcolorSent('text-green-600')
                setsentMessage(messages.contact.success)
            }, (error) => {
                setcolorSent('text-red-600')
                setsentMessage(messages.contact.error)
                console.log('FAILED...', error);
            });

        setFormData({ to_name: '', from_name: '', message: '' });
    };

    return (
        // Fondo crema suave o blanco, borde guerrero-red sutil
        <div className='bg-white/50 backdrop-blur-sm flex md:flex-row flex-col px-8 py-10 rounded-3xl w-full justify-between border border-slate-200 shadow-sm'>
            <div className='flex justify-center items-center md:w-1/2 mb-10 md:mb-0 w-full'>
                <img src="/mail5.png" alt="Mail" className='w-60 object-contain' />
            </div>

            <div className='flex flex-col md:w-1/2 justify-center w-full'>
                <div className='flex justify-center mb-8'>
                    <h1 className='text-2xl md:text-3xl font-bold text-slate-800'>
                        {messages.contact.title}
                    </h1>
                </div>

                <form className="w-full max-w-md mx-auto space-y-5" onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name="to_name"
                        value={formData.to_name}
                        onChange={handleChange}
                        className="bg-white border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent block w-full p-3 outline-none transition-all"
                        placeholder={messages.contact.placeholderName}
                        required
                    />

                    <input
                        type="email"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        className="bg-white border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent block w-full p-3 outline-none transition-all"
                        placeholder={messages.contact.placeholderEmail}
                        required
                    />

                    <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-white border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent block w-full p-3 outline-none transition-all resize-none"
                        placeholder={messages.contact.placeholderMessage}
                        required
                    />

                    <div className='flex flex-col items-center pt-2'>
                        <MagincBtn
                            words={isSubmitting ? messages.contact.submitting : messages.contact.submit}
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                        {isSent && (
                            <p className={`mt-4 font-medium text-sm ${colorSent}`}>
                                {sentMessage}
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EmailForm;