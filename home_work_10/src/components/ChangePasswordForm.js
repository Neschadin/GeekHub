import { Form } from "./Form";
import { FormField } from "./FormField";

export const ChangePasswordForm = () => {
  const onSubmit = (values) => {
    localStorage.setItem("passForm", JSON.stringify(values));
  };

  return (
    <Form  onSubmit={onSubmit} formName="Change password form">
      <FormField
        required
        name="password"
        label="Password"
        type="password"
      />
      <FormField
        required
        name="confirmPassword"
        label="Confirm Password"
        type="confirmPassword"
      />
    </Form>
  );
};
