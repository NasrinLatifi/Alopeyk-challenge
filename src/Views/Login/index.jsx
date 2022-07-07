import React from "react";
import { Formik } from "formik";
import MainInput from "../../Components/MainInput";
import MainTextArea from "../../Components/MainTextArea";
import Form from "../../Components/Form";

const Login = () => {
  const onValidateForm = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };
  const onSubmitForm = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Form />
    </div>
  );
};

export default Login;
