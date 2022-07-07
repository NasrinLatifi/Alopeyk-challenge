import React, { useState } from "react";
import "../MainInput/mainInput.scss";
import { Checkbox } from "antd";
const CheckboxGroup = Checkbox.Group;

const CheckBox = (props) => {
  const { label, onChange, value } = props;
  const workTypeOptions = ["Part Time", "Full time", "Freelance"];
  const [groupValue, setGroupValue] = useState(value);

  const onChangeGtoup = (value) => {
    setGroupValue(value);
    onChange?.(value);
  };

  return (
    <div className="check-box-group-wrapper">
      <hr />
      <div className="text-container">
        <span className="label-style">{label}</span>
      </div>
      <CheckboxGroup
        options={workTypeOptions}
        value={groupValue}
        onChange={onChangeGtoup}
      />
      <hr />
    </div>
  );
};

export default CheckBox;
