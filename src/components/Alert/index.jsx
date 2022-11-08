import React from "react";
import { AlertStyle, Tick } from "./styles";

const Alert = () => {
  return (
    <AlertStyle>
      <p>
        <Tick />
        Thanks for reaching out to me, I will get back to you shortly
      </p>
    </AlertStyle>
  );
};

export default Alert;
