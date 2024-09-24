<template>
  <div class="form-container">
    <div class="locale-buttons">
      <button @click="changeLocale('ar')">العربية</button>
      <button @click="changeLocale('en')">English</button>
    </div>

    <Form @submit="onSubmit" class="form">
      <label for="name">{{ locales[currentLocale].name }}</label>
      <Field
        name="name"
        type="text"
        rules="required"
        class="input"
        autocomplete="none"
      />
      <ErrorMessage name="name" class="error" />

      <label for="age">{{ locales[currentLocale].age }}</label>
      <Field
        name="age"
        type="number"
        rules="required|between:18,96"
        class="input"
        autocomplete="off"
      />
      <ErrorMessage name="age" class="error" />

      <label for="ageConfirm">{{ locales[currentLocale].ageConfirm }}</label>
      <Field
        name="ageConfirm"
        type="number"
        rules="required|confirmed:@age"
        class="input"
        autocomplete="off"
      />
      <ErrorMessage name="ageConfirm" class="error" />

      <label>{{ locales[currentLocale].gender }}</label>
      <div class="gender-options">
        <label>
          <Field type="radio" name="gender" value="male" rules="required" />
          {{ locales[currentLocale].male }}
        </label>
        <label>
          <Field type="radio" name="gender" value="female" rules="required" />
          {{ locales[currentLocale].female }}
        </label>
      </div>
      <ErrorMessage name="gender" class="error" />

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
import { Form, Field, ErrorMessage } from "vee-validate";
import { changeLocale } from "@/locales/validation";
import ar from "@/locales/ar.js";
import en from "@/locales/en.js";

const locales = {
  ar,
  en,
};

let currentLocale = "ar";

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

.gender-options {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
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
