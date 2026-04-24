import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

interface ClientsProps {
    messages: any;
    testimonials: any[];
}

const Clients = ({ messages, testimonials }: ClientsProps) => {
    return (
        <div className='py-20' id='references'>
            <h1 className='heading'>
                {messages.clients.title} {' '}
                <span className='text-guerrero-red'>{messages.clients.titleHighlight}</span>
            </h1>
            <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden'>
                <InfiniteMovingCards
                    items={testimonials}
                    direction='right'
                    speed='slow'
                />
            </div>
        </div>
    )
}

export default Clients