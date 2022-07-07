import React from "react";
import { Formik } from "formik";
import MainInput from "../MainInput";
import MainTextArea from "../MainTextArea";
import { onValidateForm } from "./helpers";
import "./_form.scss";

const Form = () => {

  const onSubmitForm = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };
  return (
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={onValidateForm}
        onSubmit={onSubmitForm}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className="form-container" onSubmit={handleSubmit}>
            <MainInput
              label="First Name"
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              errorMessage={
                touched?.firstName && errors.firstName ? errors.firstName : null
              }
            />
            <MainInput
              label="Last Name"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              errorMessage={
                touched?.lastName && errors.lastName ? errors.lastName : null
              }
            />
            <MainInput
              label="Age"
              name="age"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.age}
              type="number"
              min={19}
              max={49}
              errorMessage={touched?.age && errors.age ? errors.age : null}
            />
            <MainInput
              label="Birth date"
              name="birthDate"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.birthDate}
              type={"date"}
              errorMessage={
                touched?.birthDate && errors.birthDate ? errors.birthDate : null
              }
            />
            {/* conuntry */}
            {/* city */}
            {/* job title */}
            <MainInput
              label="Phone Number"
              name="phoneNumber"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber}
              errorMessage={
                touched?.phoneNumber && errors.phoneNumber
                  ? errors.phoneNumber
                  : null
              }
            />
            {/* work type */}

            <MainTextArea
              label="Description"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              errorMessage={
                touched?.description && errors.description
                  ? errors.description
                  : null
              }
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
  );
};

export default Form;
