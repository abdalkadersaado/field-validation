<template>
  <div class="login-page">
    <h1>Login</h1>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="email"> email:</label>
        <Field
          name="email"
          type="email"
          :rules="'required|email'"
          v-slot="{ field, meta }"
        >
          <input
            v-bind="field"
            :class="{ 'input-error': meta.touched && meta.error }"
            placeholder="Enter your email"
            @focus="handleFocus"
            @blur="handleBlur"
          />
        </Field>
        <ErrorMessage name="email" class="error" />
      </div>

      <div class="form-group">
        <label for="password">password :</label>
        <Field
          name="password"
          type="password"
          :rules="'required|min:6'"
          v-slot="{ field, meta }"
        >
          <input
            v-bind="field"
            :class="{ 'input-error': meta.touched && meta.error }"
            placeholder="Enter password"
            @focus="handleFocus"
            @blur="handleBlur"
          />
        </Field>
        <ErrorMessage name="password" class="error" />
      </div>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { Field, ErrorMessage, useForm } from "vee-validate";
import { required, email, min } from "@vee-validate/rules";

export default {
  components: {
    Field,
    ErrorMessage,
  },
  setup() {
    const { handleSubmit } = useForm();

    const email = ref("");
    const password = ref("");

    const onSubmit = handleSubmit((values) => {
      alert("تم تسجيل الدخول بنجاح");
    });

    const handleFocus = (event) => {
      event.target.classList.add("input-focused");
    };

    const handleBlur = (event) => {
      event.target.classList.remove("input-focused");
    };

    return { email, password, onSubmit, handleFocus, handleBlur };
  },
};
</script>

<style scoped>
.login-page {
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  transition: border-color 0.3s, transform 0.3s;
}

input:focus {
  border-color: #007bff;
  outline: none;
  transform: scale(1.02);
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  font-size: 0.875em;
  margin-top: 5px;
}

.input-error {
  border-color: red;
}

.input-focused {
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
</style>
