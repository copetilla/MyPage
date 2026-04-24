const dictionaries = {
    en: () => import('@/data/messages/en.json').then((module) => module.default),
    es: () => import('@/data/messages/es.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'en' | 'es') => {
    return dictionaries[locale]();
};