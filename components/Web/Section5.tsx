'use client';
import { useTranslation } from 'react-i18next';

import Image from 'next/image';
import React from 'react';
import Client1 from './images/client-1.jpeg';
import Client2 from './images/client-2.jpeg';
import Client3 from './images/client-3.jpeg';

const ClientsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-5 md:px-6 pt-16 md:pt-20 lg:pt-32 pb-8 transition-all duration-300">
      <h2 className="text-3xl font-semibold mb-8">{t('section5.title')}</h2>
      <div className="flex flex-wrap gap-6 md:gap-10 justify-center">
        {[Client1, Client2, Client3].map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 overflow-hidden w-full md:w-[47%] lg:w-[30%] aspect-[4/3] md:aspect-auto">
            <Image
              alt={`Client ${index + 1}`}
              src={client}
              className="w-full h-full object-center object-cover rounded-lg md:rounded-xl lg:rounded-2xl"
              decoding="async"
              data-nimg="fill"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
