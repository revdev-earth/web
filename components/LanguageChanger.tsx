'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import { useState } from 'react';
import Select, { ActionMeta, SingleValue } from 'react-select';

type OnChangeSelect =
  | ((
      newValue: SingleValue<{
        value: string;
        label: string;
      }>,
      actionMeta: ActionMeta<{
        value: string;
        label: string;
      }>
    ) => void)
  | undefined;

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const [selectedOption, setSelectedOption] = useState({
    value: currentLocale,
    label: getLanguageLabel(currentLocale)
  });

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'de', label: 'Deutsch' },
    { value: 'ja', label: '日本語' },
    { value: 'es', label: 'Español' }
  ];

  const handleChange = (
    selectedOption: SingleValue<{ value: string; label: string }>
  ) => {
    if (!selectedOption) return;

    setSelectedOption(selectedOption);

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${
      selectedOption.value
    };expires=${date.toUTCString()};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + selectedOption.value + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${selectedOption.value}`)
      );
    }

    router.refresh();
  };

  return (
    <Select
      options={languageOptions}
      onChange={handleChange}
      value={selectedOption}
      styles={{
        control: baseStyles => ({
          ...baseStyles,
          border: 0,
          boxShadow: '0 0 0',
          background: '#e1e6ec90',
          cursor: 'pointer'
        }),
        input: b => ({ ...b, minWidth: '80px', cursor: 'pointer' }),
        singleValue: b => ({
          ...b,
          textAlign: 'center',
          color: '#000000c9',
          cursor: 'pointer'
        }),
        indicatorsContainer: () => ({ display: 'none' }),
        menu: b => ({
          ...b,
          marginTop: '1px',
          background: '#e1e6ec90',
          width: '100px',
          cursor: 'pointer',
          borderRadius: '3px'
        }),
        menuList: b => ({
          ...b,
          padding: '0'
        }),
        option: (b, s) => ({
          ...b,
          cursor: 'pointer',
          textAlign: 'center',
          color: s.isSelected || s.isFocused ? '#e1e6ec' : '#000000c9',
          background: s.isSelected
            ? '#000000c9'
            : s.isFocused
            ? '#00000059'
            : '#e1e6ecc9'
        })
      }}
    />
  );
}

function getLanguageLabel(locale: string) {
  switch (locale) {
    case 'en':
      return 'English';
    case 'de':
      return 'Deutsch';
    case 'ja':
      return '日本語';
    case 'es':
      return 'Español';
    default:
      return '';
  }
}
