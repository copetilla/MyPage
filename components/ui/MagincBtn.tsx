import React from 'react'

type MagincBtnType = {
    words: string,
    icon?: React.ReactNode,
    position?: string,
    handleClick?: () => void,
    otherClasses?: string,

}

const MagincBtn = ({ words, icon, position, handleClick, otherClasses }: MagincBtnType) => {
    return (
        <button
            className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] md:w-60 md:mt-10 shadow"
            onClick={handleClick}>
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF0000_0%,#800000_50%,#FF0000_100%)]" />
            <span className={`bg-guerrero-red inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
                {position === "left" && icon}
                {words}
                {position === "right" && icon}
            </span>
        </button>
    )
}

export default MagincBtn