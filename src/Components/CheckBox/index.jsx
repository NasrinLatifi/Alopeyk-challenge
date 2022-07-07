import React, { useState } from "react";
import "./_checkbox.scss";
import { Checkbox } from "antd";
const CheckboxGroup = Checkbox.Group;

const CheckBox = (props) => {
  const { label, onChange, defaultValue } = props;
  const workTypeOptions = ["Part Time", "Full time", "Freelance"];
  const [groupValue, setGroupValue] = useState(defaultValue);

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
