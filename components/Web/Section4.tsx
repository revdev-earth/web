'use client';
import { useTranslation } from 'react-i18next';

import Image, { StaticImageData } from 'next/image';
import Project1 from './images/project-1.jpeg';
import Project2 from './images/project-2.jpeg';
import Project3 from './images/project-3.jpeg';
import Project4 from './images/project-4.jpeg';
import Project5 from './images/project-5.jpeg';
import Project6 from './images/project-6.jpeg';

interface ProjectProps {
  image: StaticImageData;
  alt: string;
  title: string;
  description: string;
}

const Project = ({ image, alt, title, description }: ProjectProps) => (
  <div
    id="projects"
    className="relative overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl flex-shrink-0 mx-auto transition-all duration-300 aspect-w-2 aspect-h-3 w-full min-w-[256px] md:w-[calc(50% - 1rem)] lg:w-[calc(33.3333% - 1rem)]">
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

const projectsData = [
  { image: Project1, index: 0 },
  { image: Project2, index: 1 },
  { image: Project3, index: 2 },
  { image: Project4, index: 3 },
  { image: Project5, index: 4 },
  { image: Project6, index: 5 }
];

const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-5 md:px-6 pt-16 md:pt-20 lg:pt-32 pb-8 transition-all duration-300 ">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        {t('section4.title')}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-10">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            image={project.image}
            alt={t(`section4.cards.${project.index}.alt`)}
            title={t(`section4.cards.${project.index}.title`)}
            description={t(`section4.cards.${project.index}.description`)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
