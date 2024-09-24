import { defineRule, configure } from "vee-validate";
import { required, email, min } from "@vee-validate/rules";

export default defineNuxtPlugin(() => {
  defineRule("required", required);
  defineRule("email", email);
  defineRule("min", min);

  defineRule("same", (value, [target], ctx) => {
    if (value === ctx.form[target]) {
      return true; 
    }
    return `حقل ${ctx.field} يجب أن يتطابق مع ${target}`;
  });

  configure({
    generateMessage: (context) => {
      const messages = {
        required: `${context.field} مطلوب`,
        email: "البريد الإلكتروني غير صالح",
        min: `${context.field} يجب أن يحتوي على الأقل ${context.rule.params[0]} حروف`,
        same: `${context.field} يجب أن يتطابق مع ${context.rule.params[0]}`,
      };
      return messages[context.rule.name] || `حقل ${context.field} غير صالح`;
    },
  });
});
