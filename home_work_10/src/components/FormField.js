import { useId, useContext, useState, useEffect } from "react";

import validator from "./validator";

import Input from "./fields/Input";
import PasswordInput from "./fields/PasswordInput";
import SelectInput from "./fields/SelectInput";
import RadioInput from "./fields/RadioInput";
import Checkboxes from "./fields/CheckboxesInput";
import Terms from "./fields/Checkbox";

import { FormContext } from "./Form";

const useFormFieldComponent = (type) => {
  switch (type) {
    case "checkbox":
      return Terms;

    case "select":
      return SelectInput;

    case "checkboxes":
      return Checkboxes;

    case "radio":
      return RadioInput;

    case "password":
    case "confirmPassword":
      return PasswordInput;

    default:
      return Input;
  }
};

export const FormField = ({ type, id: propsId, ...props }) => {
  const Component = useFormFieldComponent(type);

  const { formContext, setFormContext } = useContext(FormContext);
  // console.log(FormContext);

  const innerId = useId();
  const id = propsId || `FormField${innerId}`;

  const [value, setInputValue] = useState("");

  const [errorMessage, setErrorMMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(
    () =>
      setFormContext((prevContext) => ({
        ...prevContext,
        [props.name]: { isValid: false, values: [], errorMessages: [] },
      })),
    []
  );

  useEffect(() => {
    setFormContext((prevContext) => ({
      ...prevContext,
      [props.name]: {
        ...prevContext[props.name],
        isValid,
      },
    }));
  }, [isValid]);

  useEffect(() => {
    if (props.name !== "consent" && !value) {
      setIsValid(false);
      return;
    }

    const handlerValidator = () => {
      const { errorMessage, resultValue } = validator(value, props.name);
      // console.log(value);
      // console.log(resultValue);
      // console.log(errorMessage);
      
      setInputValue(resultValue);
      setErrorMMessage(errorMessage);
      setIsValid(!errorMessage ? true : false);

      setFormContext((prevContext) => {
        const item = prevContext[props.name];
        const newValues = [...item.values, resultValue];
        const newErrorMessages = errorMessage
          ? [...item.errorMessages, errorMessage]
          : item.errorMessages;

        return {
          ...prevContext,
          [props.name]: {
            isValid: item.isValid,
            values: newValues,
            errorMessages: newErrorMessages,
          },
        };
      });
    };

    const t =
      ["phone", "firstName", "lastName", "email", "password"].some(
        (template) => template === props.name
      ) && 1000;

    const timer = setTimeout(handlerValidator, t);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);


  return (
    <div>
      <Component
        {...props}
        id={id}
        type={type}
        errorMessage={errorMessage}
        error={!isValid}
        onChange={setInputValue}
        value={value || ""}
      />
    </div>
  );
};
