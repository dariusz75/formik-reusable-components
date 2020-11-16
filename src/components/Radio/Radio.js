import React from "react";
import { Field, ErrorMessage } from "formik";

import "./radio.css";
import { ErrorText } from "../../components";

const Radio = (props) => {
  const { label, name, options, ...rest } = props;

  return (
    <div className="form-group">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <div key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label style={{ marginLeft: "10px" }} htmlFor={option.value}>
                  {option.key}
                </label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};

export default Radio;
