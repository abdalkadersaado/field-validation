import { createI18n } from "vue-i18n";

const messages = {
  en: {
    login: {
      email: "Email",
      password: "Password",
      emailRequired: "Email is required.",
      emailInvalid: "Please enter a valid email.",
      passwordRequired: "Password is required.",
      passwordMin: "Password must be at least 6 characters long.",
    },
    validation: {
      required: "This field is required.",
      email: "Please enter a valid email.",
      min: "This field must have at least {min} characters.",
    },
  },
  ar: {
    login: {
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      emailRequired: "يرجى إدخال البريد الإلكتروني.",
      emailInvalid: "يرجى إدخال بريد إلكتروني صالح.",
      passwordRequired: "يرجى إدخال كلمة المرور.",
      passwordMin: "يجب أن تكون كلمة المرور مكونة من 6 أحرف على الأقل.",
    },
    validation: {
      required: "هذا الحقل مطلوب.",
      email: "يرجى إدخال بريد إلكتروني صالح.",
      min: "يجب أن يحتوي هذا الحقل على {min} أحرف على الأقل.",
    },

    register: {
      title: "إنشاء حساب جديد",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      confirmPassword: "تأكيد كلمة المرور",
      submit: "إنشاء حساب",
      namePlaceholder: "أدخل اسمك الكامل",
      emailPlaceholder: "أدخل بريدك الإلكتروني",
      passwordPlaceholder: "أدخل كلمة المرور",
      confirmPasswordPlaceholder: "أعد إدخال كلمة المرور",
      success: "تم إنشاء الحساب بنجاح",
    },
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    locale: "en", 
    fallbackLocale: "en", 
    messages,
  });

  nuxtApp.vueApp.use(i18n);
});
