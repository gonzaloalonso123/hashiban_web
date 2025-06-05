// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./english.json";
import nlTranslation from "./dutch.json";
import esTranslation from "./spanish.json";
let domain = window.location.hostname;

const resources = {
  en: { translation: enTranslation },
  nl: { translation: nlTranslation },
  es: { translation: esTranslation },
};

i18n.use(initReactI18next).init({
  resources,
  lng: domain === "hashiban.nl" ? "nl" : "es",
  fallbackLng: "nl",
  interpolation: {
    escapeValue: false,
  },
});

switch (domain) {
  case "hashiban.nl":
    document.title = "De Veiling Van Hashiban";
    break;
  case "hashiban.tiranik.es":
    document.title = "La Subasta De Hashiban";
    break;
  default:
    document.title = "La Subasta de Hashiban";
    break;
}

export default i18n;
