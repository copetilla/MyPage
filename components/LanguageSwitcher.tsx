'use client';

import { usePathname, useRouter } from 'next/navigation';

const LanguageSwitcher = () => {
    const pathname = usePathname();
    const router = useRouter();

    const toggleLanguage = () => {
        const segments = pathname.split('/');
        const currentLocale = segments[1];
        const newLocale = currentLocale === 'en' ? 'es' : 'en';

        segments[1] = newLocale;
        const newPath = segments.join('/');

        router.push(newPath);
    };

    const currentLocale = pathname.split('/')[1];

    return (
        <button
            onClick={toggleLanguage}
            className="absolute top-8 right-8 md:top-12 md:right-12 z-[100] flex items-center gap-2 md:gap-3 px-3 py-2 md:px-5 md:py-2.5 
                 bg-white/80 border border-slate-200 rounded-full 
                 backdrop-blur-md shadow-sm hover:shadow-md
                 hover:border-purple-400 transition-all duration-300 
                 text-slate-700 text-sm font-medium"
        >

            <span className="block md:hidden uppercase font-bold">
                {currentLocale === 'en' ? 'ES' : 'EN'}
            </span>


            <span className="hidden md:block tracking-tighter uppercase">
                {currentLocale === 'en' ? 'Español' : 'English'}
            </span>

            <div className="w-[1px] h-4 bg-slate-300" />

            <span className="text-lg leading-none">
                {currentLocale === 'en' ? '🇪🇸' : '🇺🇸'}
            </span>
        </button>
    );
};

export default LanguageSwitcher;