'use client';
import { useTranslation } from 'react-i18next';

import Image from 'next/image';
import React from 'react';
import RobotHandImage from './images/robot-hand.jpeg';

const UsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-5 md:px-6 pt-16 md:pt-20 lg:pt-32 pb-8">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 w-full items-center">
        <div className="flex-1 items-center lg:items-start">
          <div className="flex flex-col gap-4">
            <h2 className="whitespace-pre-line text-3xl font-semibold mb-4">
              {t('section6.title')}
            </h2>
            <p>{t('section6.text1')}</p>
            <p>{t('section6.text2')}</p>
          </div>
        </div>
        <div className="flex-1 lg:max-w-1/2 h-full justify-center lg:justify-start">
          <div className="flex-shrink-0 mx-auto w-full h-full">
            <Image
              src={RobotHandImage}
              alt="Robot Hand"
              className="w-full rounded-lg md:rounded-xl lg:rounded-2xl"
              width={400}
              height={400}
              decoding="async"
              data-nimg="fill"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsSection;
