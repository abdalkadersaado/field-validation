<template>
  <div class="login-container">
    <h1>title</h1>
    <Form @submit="handleSubmit">
      <div>
        <label for="email">{{ t("login.email") }}</label>
        <Field
          type="email"
          id="email"
          name="email"
          v-model="email"
          :rules="emailRules"
        />
        <ErrorMessage name="email" class="error" />
      </div>
      <div>
        <label for="password">{{ t("login.password") }}</label>
        <Field
          type="password"
          id="password"
          name="password"
          v-model="password"
          :rules="passwordRules"
        />
        <ErrorMessage name="password" class="error" />
      </div>
      <button type="submit">submit</button>
    </Form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as Yup from "yup";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const email = ref("");
const password = ref("");

const emailRules = Yup.string()
  .required(t("login.emailRequired"))
  .email(t("login.emailInvalid"));

const passwordRules = Yup.string()
  .required(t("login.passwordRequired"))
  .min(6, t("login.passwordMin"));

const handleSubmit = (values) => {
  alert(t("login.success"));
  console.log(values);
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.error {
  color: red;
}
</style>
