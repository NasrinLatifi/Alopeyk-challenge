import React, { useContext } from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import MainInput from "../MainInput";
import MainTextArea from "../MainTextArea";
import { onValidateForm } from "./helpers";
import "./_form.scss";
import RadioGroup from "../RadioGroup";
import CheckBox from "../CheckBox";
import MainSelect from "../MainSelect";
import { HOME_ROUTE } from "../../RouteManager";
import { TableContext } from "../../App";
import { v4 as uuid } from "uuid";

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

const Form = ({ isDisabled, initialValues = { gender: "female" } }) => {
  const { setTableState, tableState } = useContext(TableContext);
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate(HOME_ROUTE);
  };

  const onSubmitForm = (values, { setSubmitting }) => {
    let newData = [];
    if (tableState?.data?.length && values?.id) {
      newData = tableState?.data?.map((obj) => {
        if (obj.id === values?.id) {
          return values;
        }
        return obj;
      });
    } else if (!values?.id) {
      newData = [...tableState?.data, { ...values, id: uuid() }];
    }
    setTableState({
      ...tableState,
      data: newData,
    });
    setTimeout(() => {
      navigateToHome();
      setSubmitting(false);
    }, 400);
  };

  return (
    <Formik
      initialValues={initialValues}
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
        initialValues,
        /* and other goodies */
      }) => {
        return (
          <>
            <form className="form-container" onSubmit={handleSubmit}>
              <MainInput
                isDisabled={isDisabled}
                label="First Name"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                defaultValue={initialValues.firstName}
                errorMessage={
                  touched?.firstName && errors.firstName
                    ? errors.firstName
                    : null
                }
              />
              <MainInput
                isDisabled={isDisabled}
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
                isDisabled={isDisabled}
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
              <MainInput
                isDisabled={isDisabled}
                label="Birth date"
                name="birthDate"
                onChange={handleChange}
                onBlur={handleBlur}
                defaultValue={initialValues.birthDate}
                type={"date"}
                errorMessage={
                  touched?.birthDate && errors.birthDate
                    ? errors.birthDate
                    : null
                }
              />
              <RadioGroup
                isDisabled={isDisabled}
                label="Gender"
                name="gender"
                onChange={handleChange}
                onBlur={handleBlur}
                defaultValue={initialValues.gender}
                errorMessage={
                  touched?.gender && errors.gender ? errors.gender : null
                }
              />
              <CheckBox
                isDisabled={isDisabled}
                label="Work Type"
                name="worktype"
                onChange={handleChange}
                defaultValue={initialValues.worktype}
              />

              <MainSelect
                isDisabled={isDisabled}
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
                isDisabled={isDisabled}
                label="City"
                name="city"
                onChange={handleChange}
                onBlur={handleBlur}
                defaultValue={initialValues.city}
                optionsList={cityDB[values.country]}
                errorMessage={touched?.city && errors.city ? errors.city : null}
              />
              <MainSelect
                isDisabled={isDisabled}
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
                isDisabled={isDisabled}
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
              <MainTextArea
                isDisabled={isDisabled}
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
              <div className="button-container">
                <button onClick={navigateToHome} className="cancel-button">
                  {!isDisabled ? "Cancel" : "Go Home"}
                </button>
                {!isDisabled && (
                  <button className="submit-button" type="submit">
                    Submit
                  </button>
                )}
              </div>
            </form>
          </>
        );
      }}
    </Formik>
  );
};

export default Form;
