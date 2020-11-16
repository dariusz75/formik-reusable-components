import React from "react";

import "./error-text.css";

const ErrorText = (props) => {
  return <div className="error">{props.children}</div>;
};

export default ErrorText;
