<template>
  <div class="form-container">
    <div class="locale-buttons">
      <button @click="changeLocale('ar')">العربية</button>
      <button @click="changeLocale('en')">English</button>
    </div>

    <Form @submit="onSubmit" class="form">
      <label for="name">{{ locales[currentLocale].name }}</label>
      <Field name="name" type="text" rules="required" class="input" />
      <ErrorMessage name="name" class="error" />

      <label for="age">{{ locales[currentLocale].age }}</label>
      <Field
        name="age"
        type="number"
        rules="required|between:18,96"
        class="input"
      />
      <ErrorMessage name="age" class="error" />

      <label for="ageConfirm">{{ locales[currentLocale].ageConfirm }}</label>
      <Field
        name="ageConfirm"
        type="number"
        rules="required|confirmed:@age"
        class="input"
      />
      <ErrorMessage name="ageConfirm" class="error" />

      <label for="image">{{ locales[currentLocale].image }}</label>
      <Field
        name="image"
        type="file"
        rules="required|file"
        @change="handleFileChange"
        class="input"
      />
      <ErrorMessage name="image" class="error" />

      <button class="submit-button">
        {{ currentLocale === "ar" ? "ارسال" : "Submit" }}
      </button>
    </Form>
  </div>
</template>

<script setup>
import { defineRule, Form, Field, ErrorMessage, configure } from "vee-validate";
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
  // if (!value.length) {
  //   return "File is required.";
  // }
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

let currentLocale = "ar";

function changeLocale(locale) {
  currentLocale = locale;
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

function handleFileChange(event) {
  const file = event.target.files[0];
  if (file) {
    const fileInput = document.querySelector('input[name="image"]');
    fileInput.value = fileInput.value;
  }
}

function onSubmit(values) {
  alert(JSON.stringify(values, null, 2));
}

changeLocale(currentLocale);
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.locale-buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}

.input {
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s;
}

.input:focus {
  border-color: #007bff;
  outline: none;
}

.error {
  color: red;
  font-size: 0.875em;
}

.submit-button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
