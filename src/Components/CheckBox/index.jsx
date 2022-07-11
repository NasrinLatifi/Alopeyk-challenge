import React from "react";
import "./_checkbox.scss";
import { Checkbox } from "antd";
const CheckboxGroup = Checkbox.Group;

const workTypeOptions = ["Part Time", "Full time", "Freelance"];
/**
 * handle check box with "Part Time", "Full time", "Freelance" options
 * (options can be a props, but we set it as a fix constant, here)
 * we use antd check box
 * @param {object} props 
 * @returns check box with label
 */
const CheckBox = (props) => {
  const { isDisabled, label, onChange, defaultValue, name } = props;

  const onChangeGtoup = (value) => {
    onChange?.({ target: { name, value } });
  };

  /****************************** ELMENTS *****************************************/
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
