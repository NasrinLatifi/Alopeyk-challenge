import React, { useState } from "react";
import "./_mainInput.scss";
import { InfoCircleOutlined } from "@ant-design/icons";

const MainInput = (props) => {
  const { label, errorMessage, onChange, defaultValue, type, min, max, name, onBlur } =
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
      <input
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        defaultValue={defaultValue}
        type={type}
        className="input-style"
        min={min}
        max={max}
      />
    </div>
  );
};

export default MainInput;
