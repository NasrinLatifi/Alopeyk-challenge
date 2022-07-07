import React from "react";
import Form from "../../Components/Form";
import "./_login.scss";

const Login = () => {
  return (
    <div className="login-page">
      <div className="first-part" />
      <div className="second-part" />
      <div className="third-part">
        <h1>Create A New Member</h1>
        <Form />
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default Login;
