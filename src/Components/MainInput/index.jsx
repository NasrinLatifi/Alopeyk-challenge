import React, { useState } from "react";
import "./_mainInput.scss";
import { InfoCircleOutlined } from "@ant-design/icons";

/**
 * we use HTML input
 * @param {object} props 
 * @returns input element with label
 */
const MainInput = (props) => {
  const {
    isDisabled,
    label,
    errorMessage,
    onChange,
    defaultValue,
    type,
    min,
    max,
    name,
    onBlur,
  } = props;

  /****************************** ELMENTS *****************************************/
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
        disabled={isDisabled}
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
