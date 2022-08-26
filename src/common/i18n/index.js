import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "Login form": "Login form",
      "Invalid credentials": "Invalid credentials",
      "Email address": "Email address",
      "Password": "Password",
      "Show": "Show",
      "Hide": "Hide",
      "Login": "Login",
      "Account details": "Account details",
      "First name": "First name",
      "Last name": "Last name",
      "Logout": "Logout",
      "Switch to dark mode": "Switch to dark mode",
      "Switch to light mode": "Switch to light mode",
    }
  },
  pt: {
    translation: {
      "Login form": "Formulário de login",
      "Invalid credentials": "Credenciais inválidas",
      "Email address": "Endereço de e-mail",
      "Password": "Senha",
      "Show": "Exibir",
      "Hide": "Esconder",
      "Login": "Entrar",
      "Account details": "Detalhes da conta",
      "First name": "Nome",
      "Last name": "Sobrenome",
      "Logout": "Sair",
      "Switch to dark mode": "Mudar para tema escuro",
      "Switch to light mode": "Mudar para tema claro",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: 'en',
  });

export default i18n;