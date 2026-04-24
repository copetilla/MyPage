import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "@/components/ui/MagincBtn";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeroProps {
    messages: any;
}

const Hero = ({ messages }: HeroProps) => {
    return (
        <div className="pt-36 h-screen">

            <LanguageSwitcher />

            {/* Logo */}
            <div className="absolute top-8 left-8 md:top-12 md:left-12 z-50">
                <img
                    src="/logo.svg"
                    alt="Logo Guerrero"
                    className="w-12 h-12 md:w-20 md:h-20 object-contain"
                />
            </div>

            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="red"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="red" />
            </div>

            <div
                className="h-screen w-full dark:bg-guerrero-secondary bg-guerrero-secondary 
       absolute top-0 left-0 flex items-center justify-center"
            >
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>

            <div className="justify-center relative z-10 flex flex-row-2 h-full ">
                <div className="md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center lg:items-start justify-start pt-20 lg:pt-0 lg:justify-center">
                    <p className="uppercase tracking-widest text-xs text-center text-black max-w-80">
                        {messages.hero.badge}
                    </p>

                    <TextGenerateEffect
                        words={messages.hero.title}
                        className="text-center lg:text-start items-center lg:items-start text-[40px] md:text-5xl lg:text-6xl"
                    />

                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        {messages.hero.description}
                    </p>

                    <a href="#about">
                        <MagicButton
                            words={messages.hero.button}
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
                <div className="hidden lg:block relative w-full lg:w-[40vw] lg:h-full">
                    <img
                        src="/me.png"
                        alt="Gabriel Guerrero"
                        className="absolute bottom-0 right-0 min-w-[60%] max-w-[160%] object-contain xl:w-[140%] 2xl:w-[160%] max-w-none"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;