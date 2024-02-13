'use client';
import { useTranslation } from 'react-i18next';

const EnterSection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="transition-all duration-300"
      style={{
        backgroundImage: `url(/fondo-2.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'top'
      }}>
      <div className="container mx-auto px-5 md:px-6 pb-20 lg:pb-32 pt-20 lg:pt-32 text-white">
        <div className="flex flex-col gap-5 max-w-3xl text-left">
          <h2 className="text-6xl font-bold leading-[4rem]">
            {t('section1.title')}
          </h2>
          <p className="text-2xl max-w-xl leading-10">{t('section1.text1')}</p>
          <button className="w-fit">{t('section1.button')}</button>
        </div>
      </div>
    </section>
  );
};

export default EnterSection;
