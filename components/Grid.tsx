import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
// Importamos la función en lugar de la constante estática
import { getGridItems } from '@/data'

interface GridProps {
    messages: any; // Aquí vendrá el contenido de tu JSON (es.json o en.json)
}

const Grid = ({ messages }: GridProps) => {
    // Generamos la lista de items usando las traducciones que vienen de los mensajes
    const translatedGridItems = getGridItems(messages);

    return (
        <section id='about'>
            <BentoGrid className="w-full py-20">
                {translatedGridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
                    <BentoGridItem
                        id={id}
                        key={id}
                        title={title}
                        description={description}
                        className={className}
                        img={img}
                        imgClassName={imgClassName}
                        titleClassName={titleClassName}
                        spareImg={spareImg}
                        messages={messages}
                    />
                ))}
            </BentoGrid>
        </section>
    )
}

export default Grid