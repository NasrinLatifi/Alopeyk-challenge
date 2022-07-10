import React from "react";
import "./_checkbox.scss";
import { Checkbox } from "antd";
const CheckboxGroup = Checkbox.Group;

const CheckBox = (props) => {
  const { isDisabled, label, onChange, defaultValue, name } = props;
  const workTypeOptions = ["Part Time", "Full time", "Freelance"];

  const onChangeGtoup = (value) => {
    onChange?.({ target: { name, value } });
  };

  return (
    <div className="check-box-group-wrapper">
      <hr />
      <div className="text-container">
        <span className="label-style">{label}</span>
      </div>
      <CheckboxGroup
        disabled={isDisabled}
        name={name}
        options={workTypeOptions}
        defaultValue={defaultValue}
        onChange={onChangeGtoup}
      />
      <hr />
    </div>
  );
};

export default CheckBox;
