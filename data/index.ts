export const getNavItems = (t: any) => [
    { name: t.nav.about, link: "#about" },
    { name: t.nav.projects, link: "#projects" },
    { name: t.nav.references, link: "#references" },
    { name: t.nav.experience, link: "#experience" },
    { name: t.nav.contact, link: "#contact" },
];

export const getGridItems = (t: any) => [
    {
        id: 1,
        title: t.grid.item1.title,
        description: t.grid.item1.description,
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] border-none",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.png",
        spareImg: "",
    },
    {
        id: 2,
        title: t.grid.item2.title,
        description: t.grid.item2.description,
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: t.grid.item3.title,
        description: t.grid.item3.description,
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: t.grid.item4.title,
        description: t.grid.item4.description,
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },
    {
        id: 5,
        title: t.grid.item5.title,
        description: t.grid.item5.description,
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: t.grid.item6.title,
        description: t.grid.item6.description,
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: ""
    },
];

export const getProjects = (t: any) => [
    {
        id: 1,
        title: t.projects.p1.title,
        des: t.projects.p1.des,
        img: "events.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg", "/mongo.svg"],
        link: "https://dance-events-web.vercel.app/",
    },
    {
        id: 2,
        title: t.projects.p2.title,
        des: t.projects.p2.des,
        img: "/portfolio2.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
        link: "https://github.com/copetilla/MyPage",
    },
    {
        id: 3,
        title: t.projects.p3.title,
        des: t.projects.p3.des,
        img: "/cms.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/supabase-logo-icon.svg", "/c.svg"],
        link: "https://eccomercecms.vercel.app/",
    },
    {
        id: 4,
        title: t.projects.p4.title,
        des: t.projects.p4.des,
        img: "/store.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/supabase-logo-icon.svg"],
        link: "https://ecommercestore-eta.vercel.app/",
    },
];

export const getWorkExperience = (t: any) => [
    {
        id: 1,
        title: t.experience.exp1.title,
        desc: t.experience.exp1.desc,
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 2,
        title: t.experience.exp2.title,
        desc: t.experience.exp2.desc,
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 3,
        title: t.experience.exp3.title,
        desc: t.experience.exp3.desc,
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
    {
        id: 4,
        title: t.experience.exp4.title,
        desc: t.experience.exp4.desc,
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/copetilla",
    },
    {
        id: 2,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/gabriel-guerrero-b503b9199/",
    },
];

export const getTestimonials = (t: any) => t.testimonials;