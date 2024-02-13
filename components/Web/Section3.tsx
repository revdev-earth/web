'use client';
import { useTranslation } from 'react-i18next';

import Image, { StaticImageData } from 'next/image';
import Solution1 from './images/solution-1.jpeg';
import Solution2 from './images/solution-2.jpeg';

interface SolutionProps {
  image: StaticImageData;
  alt: string;
  title: string;
  description: string;
}

const Solution = ({ image, alt, title, description }: SolutionProps) => (
  <div className="overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl w-full md:w-[47%] lg:w-1/3">
    <div className="flex-shrink-0 w-full mx-auto transition-all duration-300 aspect-w-1 aspect-h-1">
      <Image
        alt={alt}
        src={image}
        decoding="async"
        data-nimg="fill"
        className="rounded-lg md:rounded-xl lg:rounded-2xl"
        priority
      />
    </div>
    <div className="flex flex-col text-center items-center py-6">
      <h3 className="text-2xl mb-4 transition-all duration-300">{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const SolutionsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-5 md:px-6 pt-16 md:pt-20 lg:pt-32 pb-8 transition-all duration-300">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        {t('section3.title')}
      </h2>
      <div className="flex flex-wrap w-full justify-center gap-10">
        <Solution
          image={Solution1}
          alt={t('section3.cards.0.alt')}
          title={t('section3.cards.0.title')}
          description={t('section3.cards.0.description')}
        />
        <Solution
          image={Solution2}
          alt={t('section3.cards.1.alt')}
          title={t('section3.cards.1.title')}
          description={t('section3.cards.1.description')}
        />
      </div>
    </section>
  );
};

export default SolutionsSection;
