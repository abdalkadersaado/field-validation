<template>
  <div class="register-page">
    <h1>Create New Account</h1>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="name">Full name:</label>
        <Field
          name="name"
          type="text"
          v-model="name"
          :rules="'required|min:3'"
          v-slot="{ field, meta }"
        >
          <input
            v-bind="field"
            :class="{ 'input-error': meta.touched && meta.error }"
            placeholder="Enter Full name"
          />
        </Field>
        <ErrorMessage name="name" class="error" />
      </div>

      <div class="form-group">
        <label for="email">email:</label>
        <Field
          name="email"
          type="email"
          v-model="email"
          :rules="'required|email'"
          v-slot="{ field, meta }"
        >
          <input
            v-bind="field"
            :class="{ 'input-error': meta.touched && meta.error }"
            placeholder="Enter Email"
          />
        </Field>
        <ErrorMessage name="email" class="error" />
      </div>

      <div class="form-group">
        <label for="password">password :</label>
        <Field
          name="password"
          type="password"
          v-model="password"
          :rules="'required|min:6'"
          v-slot="{ field, meta }"
        >
          <input
            v-bind="field"
            :class="{ 'input-error': meta.touched && meta.error }"
            placeholder="Enter password"
          />
        </Field>
        <ErrorMessage name="password" class="error" />
      </div>

      <div class="form-group">
        <label for="confirmPassword">Confirm password:</label>
        <Field
          name="confirmPassword"
          type="password"
          v-model="confirmPassword"
          :rules="'required|same:password'"
          v-slot="{ field, meta }"
        >
          <input
            v-bind="field"
            :class="{ 'input-error': meta.touched && meta.error }"
            placeholder="Confirm password"
          />
        </Field>
        <ErrorMessage name="confirmPassword" class="error" />
      </div>

      <button type="submit">register</button>
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
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");

    const { handleSubmit } = useForm();
    const onSubmit = handleSubmit((values) => {
      alert("created successfully");
    });

    return { name, email, password, confirmPassword, onSubmit };
  },
};
</script>

<style scoped>
.register-page {
  max-width: 450px;
  margin: 50px auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  font-family: "Arial", sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 28px;
  color: #333;
  font-weight: 600;
}

.form-group {
  margin-bottom: 25px;
}

label {
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #555;
}

input {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #d1d1d1;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 0 transparent;
  transform: translateY(0);
  animation: fadeIn 0.5s ease; 
}

input:focus {
  border-color: #007bff;
  box-shadow: 0 0 6px rgba(0, 123, 255, 0.25);
  outline: none;
  transform: translateY(-3px); 
}

.input-error {
  border-color: #e74c3c;
  animation: shake 0.3s ease;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #28a745;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s;
}

button:hover {
  background-color: #218838;
  transform: translateY(-3px); 
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  20%,
  60% {
    transform: translateX(-5px);
  }
  40%,
  80% {
    transform: translateX(5px);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 600px) {
  .register-page {
    padding: 20px;
    margin: 30px auto;
  }

  button {
    font-size: 16px;
    padding: 10px;
  }
}
</style>
