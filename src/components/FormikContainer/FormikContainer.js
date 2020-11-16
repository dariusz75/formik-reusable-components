import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormikControl/FormikControl";

const FormikContainer = () => {
  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" }
  ];

  const initialValues = {
    email: "",
    description: "",
    selectOption: ""
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Wrong email format. Please correct.")
      .required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required")
  });
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl control="input" label="Email" name="email" />
            <FormikControl
              control="textarea"
              type="textarea"
              label="Description"
              name="description"
            />
            <FormikControl
              control="select"
              label="Select a topic"
              name="selectOption"
              options={dropdownOptions}
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
