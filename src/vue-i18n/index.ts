import { createI18n } from 'vue-i18n';
import en from './locales/en-US.ts'

const i18n = createI18n({
  locale: 'en-US', //it by default
  fallbackLocale: 'en-US',
  globalInjection: true,
  messages: {
    'en-US': en,
  },
});

export default i18n;