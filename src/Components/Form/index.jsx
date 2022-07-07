import React from "react";
import { Formik } from "formik";
import MainInput from "../MainInput";
import MainTextArea from "../MainTextArea";
import { onValidateForm } from "./helpers";
import "./_form.scss";
import RadioGroup from "../RadioGroup";
import CheckBox from "../CheckBox";
import MainSelect from "../MainSelect";

const cityDB = {
  iran: [
    { id: "tehran", name: "Tehran" },
    { id: "esfahan", name: "Esfahan" },
    { id: "shiraz", name: "Shiraz" },
  ],
  germany: [
    { id: "berlin", name: "Berlin" },
    { id: "hamburg", name: "Hamburg" },
  ],
  UK: [{ id: "london", name: "london" }],
  US: [{ id: "newyork", name: "Newyork" }],
  canada: [{ id: "toronto", name: "Toronto" }],
};

const Form = () => {
  const onSubmitForm = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };
  return (
    <Formik
      initialValues={{ gender: "female" }}
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
        initialValues,
        /* and other goodies */
      }) => {
        return (
          <form className="form-container" onSubmit={handleSubmit}>
            <MainInput
              label="First Name"
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={initialValues.firstName}
            />
            <MainInput
              label="Last Name"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={initialValues.lastName}
              errorMessage={
                touched?.lastName && errors.lastName ? errors.lastName : null
              }
            />
            <MainInput
              label="Age"
              name="age"
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={initialValues.age}
              type="number"
              min={19}
              max={49}
              errorMessage={touched?.age && errors.age ? errors.age : null}
            />
            <RadioGroup
              label="Gender"
              name="gender"
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={initialValues.gender}
              errorMessage={
                touched?.gender && errors.gender ? errors.gender : null
              }
            />
            <MainInput
              label="Birth date"
              name="birthDate"
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={initialValues.birthDate}
              type={"date"}
              errorMessage={
                touched?.birthDate && errors.birthDate ? errors.birthDate : null
              }
            />
            <MainSelect
              label="Country"
              name="country"
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={initialValues.country}
              optionsList={[
                { id: "iran", name: "Iran" },
                { id: "canada", name: "Canada" },
                { id: "germany", name: "Germany" },
                { id: "US", name: "US" },
                { id: "UK", name: "UK" },
              ]}
              errorMessage={
                touched?.country && errors.country ? errors.country : null
              }
            />
            <MainSelect
              label="City"
              name="city"
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={initialValues.city}
              optionsList={cityDB[values.country]}
              errorMessage={touched?.city && errors.city ? errors.city : null}
            />
            <MainSelect
              label="Job Title"
              name="jobTitle"
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={initialValues.jobTitle}
              optionsList={[
                { id: "developr/junior", name: "developr - junior" },
                { id: "developr/middle", name: "developr - middle" },
                { id: "developr/senior", name: "developr - senior" },
                { id: "HR", name: "HR" },
                { id: "CTO", name: "CTO" },
              ]}
              errorMessage={
                touched?.jobTitle && errors.jobTitle ? errors.jobTitle : null
              }
            />
            <MainInput
              label="Phone Number"
              name="phoneNumber"
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={initialValues.phoneNumber}
              errorMessage={
                touched?.phoneNumber && errors.phoneNumber
                  ? errors.phoneNumber
                  : null
              }
            />
            <CheckBox
              label="Work Type"
              name="worktype"
              onChange={handleChange}
              defaultValue={initialValues.worktype}
            />

            <MainTextArea
              label="Description"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={initialValues.description}
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
        );
      }}
    </Formik>
  );
};

export default Form;
