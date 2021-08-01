import React from "react";

import "./CustomButton.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? "sign-in-with-google" : null} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
