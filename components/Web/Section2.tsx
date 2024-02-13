'use client';
import { useTranslation } from 'react-i18next';

const DescriptionSection = () => {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-5 md:px-6 pt-16 md:pt-20 lg:pt-32 pb-8 transition-all duration-300">
      <p className="text-2xl font-light">&#34;{t('section2.text')}&#34;</p>
    </section>
  );
};

export default DescriptionSection;
