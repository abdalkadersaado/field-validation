import { defineRule, configure } from "vee-validate";
import { required, between, confirmed } from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";
import arMessages from "@vee-validate/i18n/dist/locale/ar.json";
import enMessages from "@vee-validate/i18n/dist/locale/en.json";
import ar from "@/locales/ar.js";
import en from "@/locales/en.js";


defineRule("required", required);
defineRule("between", between);
defineRule("confirmed", confirmed);

defineRule("file", (value) => {
  if (!value.length) {
    return "File is required.";
  }
  const file = value[0];
  const validTypes = ["image/jpeg", "image/png", "image/gif", "image/jpg"];
  if (!validTypes.includes(file.type)) {
    return "File type must be JPEG, PNG, or GIF.";
  }
  if (file.size > 2000000) {
    return "File size must be less than 2MB.";
  }
  return true; 
});

const locales = {
  ar,
  en,
};

const messages = {
  ar: arMessages,
  en: enMessages,
};

export function changeLocale(locale) {
  localize({
    [locale]: {
      ...messages[locale],
      names: locales[locale],
    },
  });
  configure({
    generateMessage: localize(locale),
  });
}

export default { changeLocale };
