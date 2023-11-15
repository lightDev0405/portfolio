import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { content } from './languages';

if (!localStorage.getItem('i18nextLng')) {
  localStorage.setItem('i18nextLng', 'en-US');
}

i18n.use(LanguageDetector).init({
  debug: false,
  defaultNS: ['locale'],
  fallbackLng: 'en',
  ns: 'locale',
  resources: content,
});

export { i18n };
