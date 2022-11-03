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
import MainMap from "../MainMap";

/****************************** DATA BASE *****************************************/
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

/**
 *
 * @param {object} param0
 * ***************************
 *
 * @param {boolean} isDisabled  is true in view mode
 * @param {object} initialValues is { gender: "female" } when we are creating a new account
 *
 * ***************************
 * @returns account form + buttons
 */

const Form = ({ isDisabled, initialValues = { locationType: "home" } }) => {
  /****************************** VALUE GETTERS *****************************************/
  const { setTableState, tableState } = useContext(TableContext);

  /****************************** NAVIGATE *****************************************/
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate(HOME_ROUTE);
  };

  /****************************** FORM SUBMIT *****************************************/
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

  /****************************** ELEMNTS *****************************************/
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
                label="Location Name"
                name="locationName"
                onChange={handleChange}
                onBlur={handleBlur}
                defaultValue={initialValues.locationName}
                errorMessage={errors?.locationName ? errors.locationName : null}
              />
              <MainSelect
                isDisabled={isDisabled}
                label="Location Type"
                name="locationType"
                onChange={handleChange}
                onBlur={handleBlur}
                defaultValue={initialValues?.locationType}
                optionsList={[
                  { id: "home", name: "Home" },
                  { id: "work", name: "Work" },
                  { id: "business", name: "Business" },
                  { id: "friendly", name: "Friend's Location" },
                  { id: "family", name: "Family's Location" },
                ]}
                errorMessage={
                  touched?.jobTitle && errors?.jobTitle
                    ? errors?.jobTitle
                    : null
                }
              />
              <MainInput
                isDisabled={isDisabled}
                label="Logo"
                name="logo"
                onChange={handleChange}
                onBlur={handleBlur}
                defaultValue={null}
                type={"file"}
              />
              <MainMap
                label="Location"
                name="location"
                defaultValue={initialValues?.location}
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
