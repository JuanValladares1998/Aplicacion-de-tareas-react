import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Error from "./Error";
import Box from "@mui/material/Box/Box";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const InputTareas = () => {
  const { setListaTareas, listaTareas } = useContext(UserContext);
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
        importante: false,
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
      <Box
        container
        spacing={2}
        sx={{
          margin: "auto",
        }}
        justifyContent="left"
      >
        <TextField
          type="text"
          name="titulo"
          placeholder="Ingrese un titulo"
          fullWidth
          sx={{ marginBottom: 3 }}
        ></TextField>

        <TextField
          type="text"
          name="descripcion"
          placeholder="Ingrese una tarea"
          multiline
          rows={3}
          fullWidth
          sx={{ marginBottom: 3 }}
        ></TextField>

        <Button sx={{ marginBottom: 2 }} variant="contained" type="submit">
          Agregar Tarea
        </Button>

        <Error error={error} />
      </Box>
    </form>
  );
};

export default InputTareas;
