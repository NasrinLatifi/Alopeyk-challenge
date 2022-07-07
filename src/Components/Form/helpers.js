export const onValidateForm = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "First Name is Required";
  }
  if (!values.lastName) {
    errors.lastName = "Last Name is Required";
  }
  if (!values.age) {
    errors.age = "Age is Required";
  }
  if (values.age && values.age < 18 ) {
    errors.age = "Age must be greater than 18";
  }
  if (values.age && values.age > 50 ) {
    errors.age = "Age must be less than 50";
  }
  if (!values.birthDate) {
    errors.birthDate = "Birth Date is Required";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone Number is Required";
  }
  if (!values.description) {
    errors.description = "Description is Required";
  }
  return errors;
};
