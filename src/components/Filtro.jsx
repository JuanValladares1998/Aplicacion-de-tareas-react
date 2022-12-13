import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Filtro = () => {
  return (
    <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
      <FormControlLabel control={<Checkbox />} label="Completados" />
      <FormControlLabel control={<Checkbox />} label="Importantes" />
    </FormGroup>
  );
};

export default Filtro;
