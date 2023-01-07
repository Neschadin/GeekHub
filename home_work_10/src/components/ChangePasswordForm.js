import { useRef, useState } from "react";

import { Form } from "./Form";
import { FormField } from "./FormField";

export const ChangePasswordForm = () => {
  const onSubmit = (values) => {
    // Save to API or do somethings
  };

  const formRef = useRef();
  const passRef = useRef();
  // console.log(formRef);

  return (
    <Form ref={formRef} onSubmit={onSubmit} formName="Change password form">
      <FormField required name="password" label="Password" type="password" />
      <FormField required name="confirmPassword" label="Confirm Password" type="confirmPassword" />
      <button
        type="submit"
        onClick={() => {
          // formRef.current.submit();
        }}
      >
        Submit
      </button>
    </Form>
  );
};
