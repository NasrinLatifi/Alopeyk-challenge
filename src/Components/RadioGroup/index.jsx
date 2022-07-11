import React from "react";
import "./_radioGroup.scss";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Radio } from "antd";

/**
 * we use antd Radio
 * we just support male and female options (becaues we have onlyone radio)
 * options can be as a prop
 * @param {object} props 
 * @returns radio group with label
 */
const RadioGroup = (props) => {
  const {name, isDisabled, label, errorMessage, onBlur, onChange, defaultValue } =
    props;

  /****************************** ELMENTS *****************************************/
  return (
    <div className="radio-group-wrapper">
      <hr />
      <div className="text-container">
        <span className="label-style">{label}</span>
        {errorMessage && (
          <>
            <InfoCircleOutlined className="error-icon" />
            <span className="error-style">{errorMessage}</span>
          </>
        )}
      </div>
      <Radio.Group
        disabled={isDisabled}
        onChange={onChange}
        defaultValue={defaultValue}
        onBlur={onBlur}
        name={name}
      >
        <Radio key={1} value={"female"}>
          Female
        </Radio>
        <Radio key={0} value={"male"}>
          Male
        </Radio>
      </Radio.Group>
      <hr />
    </div>
  );
};

export default RadioGroup;
