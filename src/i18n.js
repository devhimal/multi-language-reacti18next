import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "np",
  fallbackLng: "np",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        title: "Multi-language app",
        label: "Select another language!",
        about: "About me",
        home: "Home",
        user: "My name is: {{name}}",
      },
    },
    zh: {
      translation: {
        title: "多语言应用",
        label: "选择另一种语言！",
        about: "关于我",
        home: "首页",
        user: "我的名字是：{{name}}",
      },
    },
  },
});

export default i18n;
