import { language } from "../../config.js";

import englishLang from "images/flag/uk.svg";
import chineseLang from "images/flag/china.svg";

const config = {
  defaultLanguage: language,
  options: [
    {
      languageId: "english",
      locale: "en",
      text: "English",
      icon: englishLang
    },
    {
      languageId: "chinese",
      locale: "zh",
      text: "Chinese",
      icon: chineseLang
    }
  ]
};

export function getCurrentLanguage(lang) {
  let selecetedLanguage = config.options[0];
  config.options.forEach(language => {
    if (language.languageId === lang) {
      selecetedLanguage = language;
    }
  });
  return selecetedLanguage;
}
export default config;
