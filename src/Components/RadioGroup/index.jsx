import React, { useState } from "react";
import "../MainInput/mainInput.scss";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Radio } from "antd";

const RadioGroup = (props) => {
  const { label, errorMessage, onBlur, onChange, value } = props;

  const [groupValue, setGroupValue] = useState(value);

  const onChangeGtoup = (e) => {
    const value = e?.target?.value ?? null;
    setGroupValue(value);
    onChange?.(value);
    onBlur?.(value);
  };
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
      <Radio.Group onChange={onChangeGtoup} value={groupValue}>
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
