import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import React, { useRef, useState, useEffect, useImperativeHandle } from "react";

const serialize = (data) => {
  let obj = {}; // const ?
  for (let [key, value] of data) {
    if (obj[key] !== undefined) {
      if (!Array.isArray(obj[key])) {
        obj[key] = [obj[key]];
      }
      obj[key].push(value);
    } else {
      obj[key] = value;
    }
  }
  return obj;
};

export const FormContext = React.createContext({}); 

export const Form = React.forwardRef(
  ({ onSubmit: propsOnSubmit, children, formName, ...rest }, ref) => {
    const formRef = useRef();
    const submitRef = useRef();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formContext, setFormContext] = useState({});
    const [isValidForm, setIsValidForm] = useState(false);

    useEffect(() => {
      Object.values(formContext).every((item) => item.isValid)
        ? setIsValidForm(true)
        : setIsValidForm(false);
      // console.log(formContext);
    }, [formContext]);

    useImperativeHandle(ref, () => ({
      submit: () => {
        submitRef.current.click();
      },
    }));

    const onSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      console.log(formRef);

      const formData = new FormData(formRef.current); 
      const values = serialize(formData);

      try {
        if (propsOnSubmit) await propsOnSubmit(values);
      } catch (error) {
        console.error(error);
        alert("alarm!");
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <FormContext.Provider value={{ formContext, setFormContext }}>
        <fieldset disabled={isSubmitting} style={{ borderRadius: "10px" }}>
          <legend>{formName}</legend>
          <form noValidate {...rest} ref={formRef} onSubmit={onSubmit}>
            {children}
            {/* <input ref={submitRef} type="submit" hidden /> */}
            <Button sx={{ m: 1 }} disabled={!isValidForm} variant="contained">
              submit
            </Button>
          </form>
        </fieldset>
      </FormContext.Provider>
    );
  }
);
