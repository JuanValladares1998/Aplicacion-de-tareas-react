import React from "react";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

const InputTareas = ({ setListaTareas, listaTareas }) => {
  //Submit Formulario
  const formSubmit = (formulario) => {
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
        alert("La tarea ya existe");
      }
    } else {
      alert("Debes completar todos los campos");
    }
  };

  return (
    <form on onSubmit={formSubmit}>
      <Grid
        container
        spacing={2}
        sx={{
          width: 500,
          margin: "auto",
        }}
      >
        <Grid item xs={8}>
          <TextField
            sx={{
              width: 400,
            }}
            type="text"
            name="titulo"
            placeholder="Ingrese un titulo"
          ></TextField>
        </Grid>
        <Grid item xs={8}>
          <TextField
            sx={{
              width: 400,
            }}
            type="text"
            name="descripcion"
            placeholder="Ingrese una tarea"
            multiline
            rows={4}
          ></TextField>
        </Grid>
        <Grid item xs={8}>
          <button>Agregar Tarea</button>
        </Grid>
      </Grid>
    </form>
  );
};

export default InputTareas;
