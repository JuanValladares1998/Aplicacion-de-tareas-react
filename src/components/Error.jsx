import { Alert } from "@mui/material";
import React from "react";

const Error = ({ error }) => {
  if (error === 1) {
    return <Alert severity="error">El nombre de la tarea ya existe</Alert>;
  } else if (error === 2) {
    return <Alert severity="warning">Complete todos los campos</Alert>;
  }
};

export default Error;
