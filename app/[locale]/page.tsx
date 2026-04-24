import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { getNavItems, getProjects, getTestimonials, getWorkExperience } from "@/data";
import { getDictionary } from "@/utils/get-dictionaries";

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  // 1. Obtenemos el diccionario (idioma)
  const dict = await getDictionary(locale as 'en' | 'es');

  // 2. Generamos las listas traducidas usando las funciones de tu data/index.ts
  const navItems = getNavItems(dict);
  const projects = getProjects(dict);
  const experience = getWorkExperience(dict);
  const testimonials = getTestimonials(dict);

  return (
    <main className="relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* Pasamos los datos traducidos a cada componente */}
        <FloatingNav navItems={navItems} />
        <Hero messages={dict} />
        <Grid messages={dict} />
        <RecentProjects projects={projects} messages={dict} />
        <Clients testimonials={testimonials} messages={dict} />
        <Experience experience={experience} messages={dict} />
        <Footer messages={dict} />
      </div>
    </main>
  );
}