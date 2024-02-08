import Image, { StaticImageData } from "next/image";
import Project1 from "./project-1.jpeg";
import Project2 from "./project-2.jpeg";
import Project3 from "./project-3.jpeg";
import Project4 from "./project-4.jpeg";
import Project5 from "./project-5.jpeg";
import Project6 from "./project-6.jpeg";

interface ProjectProps {
  image: StaticImageData;
  alt: string;
  title: string;
  description: string;
}

const Project = ({ image, alt, title, description }: ProjectProps) => (
  <div className="relative overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl flex-shrink-0 mx-auto transition-all duration-300 aspect-w-2 aspect-h-3 w-full min-w-[256px] md:w-[calc(50% - 1rem)] lg:w-[calc(33.3333% - 1rem)]">
    <Image
      alt={alt}
      src={image}
      className="w-full h-[400px] lg:h-full object-center object-cover rounded-lg md:rounded-xl lg:rounded-2xl"
      data-nimg="fill"
      decoding="async"
    />
    <div className="absolute w-full bottom-0 left-0 flex flex-col text-white min-h-[256px] bg-black bg-opacity-80">
      <div className="flex flex-col text-center items-center p-6 justify-end">
        <p className="text-2xl mb-4 transition-all duration-300">{title}</p>
        <div className="rich-text-block website-wysiwyg transition-all duration-300 ">
          {description}
        </div>
      </div>
    </div>
  </div>
);

const ProjectsSection = () => (
  <section className="container mx-auto px-5 md:px-6 pt-16 md:pt-20 lg:pt-32 pb-8 transition-all duration-300 ">
    <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-10">
      <Project
        image={Project1}
        alt="Desarrollo de software personalizado"
        title="Desarrollo de software personalizado"
        description="Creación de una plataforma personalizada para optimizar procesos internos y mejorar la eficiencia operativa."
      />
      <Project
        image={Project2}
        alt="Integración de sistemas"
        title="Integración de sistemas"
        description="Implementación de una solución tecnológica para integrar y sincronizar diferentes sistemas dentro de la empresa."
      />
      <Project
        image={Project3}
        alt="Seguridad cibernética avanzada"
        title="Seguridad cibernética avanzada"
        description="Desarrollo e implementación de medidas avanzadas de seguridad cibernética para proteger los datos y la infraestructura tecnológica."
      />
      <Project
        image={Project4}
        alt="Automatización de procesos"
        title="Automatización de procesos"
        description="Automatización de tareas repetitivas y manuales para mejorar la productividad y reducir errores humanos."
      />
      <Project
        image={Project5}
        alt="Análisis de datos en tiempo real"
        title="Análisis de datos en tiempo real"
        description="Implementación de un sistema para analizar grandes volúmenes de datos en tiempo real y tomar decisiones basadas en información actualizada."
      />
      <Project
        image={Project6}
        alt="Desarrollo de aplicaciones móviles"
        title="Desarrollo de aplicaciones móviles"
        description="Creación de una aplicación móvil personalizada para mejorar la experiencia del usuario y ampliar la presencia digital de la empresa."
      />
    </div>
  </section>
);

export default ProjectsSection;
