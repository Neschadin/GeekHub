import { useId, useContext, useState, useEffect, useRef } from "react";

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

export const FormField = ({ type, id: propsId, name, ...props }) => {
  const Component = useFormFieldComponent(type);

  const { formContext, setFormContext } = useContext(FormContext);

  const innerId = useId();
  const id = propsId || `FormField${innerId}`;

  const [firstInit, setFirstInit] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const [value, setInputValue] = useState("");
  const [errorMessage, setErrorMMessage] = useState("");

  const passRef = useRef();

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    if (!firstInit) return;
    setFormContext((prevContext) => ({
      ...prevContext,
      [name]: {
        ...prevContext[name],
        isValid,
      },
    }));
  }, [isValid]);

  useEffect(() => {
    if (!firstInit) return;

    const handlerValidator = () => {
      const { errorMessage, resultValue } = validator(
        name !== "confirmPassword"
          ? value
          : [value, formContext.password.values.at(-1)],
        name
      );

      setInputValue(resultValue);
      setErrorMMessage(errorMessage);
      setIsValid(!errorMessage ? true : false);

      setFormContext((prevContext) => {
        const item = prevContext[name];
        const newValues = [...item.values, resultValue];
        const newErrorMessages = errorMessage
          ? [...item.errorMessages, errorMessage]
          : item.errorMessages;

        return {
          ...prevContext,
          [name]: {
            isValid: item.isValid,
            values: newValues,
            errorMessages: newErrorMessages,
          },
        };
      });
    };

    const t =
      ["title", "phone", "firstName", "lastName", "email", "password"].some(
        (template) => template === name
      ) && 1000;

    const timer = setTimeout(handlerValidator, t);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  useEffect(
    // first init
    () => {
      setFirstInit(true);
      setFormContext((prevContext) => ({
        ...prevContext,
        [name]: { isValid: false, values: [], errorMessages: [] },
      }));

      name === "prefer" && setInputValue("cola");
    },
    []
  );

  return (
    <>
      <label htmlFor={id}></label>
      <Component
        {...props}
        name={name}
        id={id}
        type={type}
        errorMessage={errorMessage}
        error={!isValid}
        onChange={setInputValue}
        value={value || ""}
      />
    </>
  );
};
