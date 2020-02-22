module.exports = {
  locales: [
    {
      code: "en",
      iso: "en-US",
      name: "English",
      file: "en.js"
    },
    {
      code: "ru",
      iso: "ru-RU",
      name: "Russian",
      file: "ru.js"
    },
    {
      code: "uz",
      iso: "uz-UZ",
      name: "Uzbek",
      file: "uz.js"
    }
  ],
  defaultLocale: "ru",
  seo: true,
  lazy: true,
  detectBrowserLanguage: true,
  vueI18n: {
    fallbackLocale: "ru"
  },
  loadLanguagesAsync: false,
  langDir: "i18n/"
};
