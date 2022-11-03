export const onValidateForm = (values) => {
  const errors = {};
  if (!values.locationName) {
    errors.locationName = "First Name is Required";
  }

  return errors;
};
