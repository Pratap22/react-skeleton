import { language } from "../../config.js"

import englishLang from "images/flag/uk.svg"

const config = {
  defaultLanguage: language,
  options: [
    {
      languageId: "english",
      locale: "en",
      text: "English",
      icon: englishLang,
    },
  ],
}

export function getCurrentLanguage(lang) {
  let selecetedLanguage = config.options[0]
  config.options.forEach(language => {
    if (language.languageId === lang) {
      selecetedLanguage = language
    }
  })
  return selecetedLanguage
}
export default config
