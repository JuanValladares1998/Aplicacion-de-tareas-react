import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Grid, Button } from "@mui/material";
import Error from "./Error";

const InputTareas = ({ setListaTareas, listaTareas }) => {
  const [error, setError] = useState(0);
  //Submit Formulario
  const formSubmit = (formulario) => {
    setError(0);
    formulario.preventDefault();
    if (formulario.target.titulo.value && formulario.target.descripcion.value) {
      const tarea = {
        estado: false,
        titulo: formulario.target.titulo.value,
        descripcion: formulario.target.descripcion.value,
      };

      if (
        !listaTareas.find(
          (obj) => obj.titulo.toLowerCase() === tarea.titulo.toLowerCase()
        )
      ) {
        setListaTareas([...listaTareas, tarea]);
        formulario.target.titulo.value = "";
        formulario.target.descripcion.value = "";
      } else {
        //Tarea ya existe
        setError(1);
      }
    } else {
      //Debes completar todos los campos
      setError(2);
    }
  };

  return (
    <form onSubmit={formSubmit}>
      <Grid
        container
        spacing={2}
        sx={{
          margin: "auto",
        }}
        justifyContent="center"
      >
        <Grid item xs={12}>
          <TextField
            type="text"
            name="titulo"
            placeholder="Ingrese un titulo"
            fullWidth
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="text"
            name="descripcion"
            placeholder="Ingrese una tarea"
            multiline
            rows={3}
            fullWidth
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit">
            Agregar Tarea
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Error error={error} />
        </Grid>
      </Grid>
    </form>
  );
};

export default InputTareas;
