import React from "react";
import "../MainInput/_mainInput.scss";
import { InfoCircleOutlined } from "@ant-design/icons";

const MainTextArea = (props) => {
  const { label, errorMessage, onChange, onBlur, name, defaultValue } =
    props;

  return (
    <div className="main-input-wrapper">
      <div className="text-container">
        <span className="label-style">{label}</span>
        {errorMessage && (
          <>
            <InfoCircleOutlined className="error-icon" />
            <span className="error-style">{errorMessage}</span>
          </>
        )}
      </div>
      <textarea
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={defaultValue}
        className="text-area-input-style"
      />
    </div>
  );
};

export default MainTextArea;
