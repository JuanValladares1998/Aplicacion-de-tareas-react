import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Error from "./Error";
import Box from "@mui/material/Box/Box";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Typography from "@mui/material/Typography";

const InputTareas = () => {
  const { setListaTareas, listaTareas } = useContext(UserContext);
  const [error, setError] = useState(0);
  //Submit Formulario
  const formSubmit = (formulario) => {
    setError(0);
    formulario.preventDefault();
    if (
      formulario.target.titulo.value &&
      formulario.target.descripcion.value &&
      formulario.target.fechaInicio.value &&
      formulario.target.fechaFin.value
    ) {
      const tarea = {
        estado: false,
        titulo: formulario.target.titulo.value,
        descripcion: formulario.target.descripcion.value,
        importante: false,
        fechaInico: formulario.target.fechaInicio.value,
        fechaFin: formulario.target.fechaFin.value,
      };

      if (
        listaTareas.find(
          (obj) => obj.titulo.toLowerCase() === tarea.titulo.toLowerCase()
        )
      ) {
        //Tarea ya existe
        setError(1);
      } else if (tarea.fechaInico > tarea.fechaFin) {
        //Fecha incorrecta
        setError(3);
      } else {
        setListaTareas([...listaTareas, tarea]);
        formulario.target.titulo.value = "";
        formulario.target.descripcion.value = "";
        formulario.target.fechaInicio.value = "";
        formulario.target.fechaFin.value = "";
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
        <Typography sx={{ marginBottom: "1rem" }}>Titulo</Typography>
        <TextField
          type="text"
          name="titulo"
          placeholder="Ingrese un titulo"
          fullWidth
          sx={{ marginBottom: 3 }}
        ></TextField>
        <Typography sx={{ marginBottom: "1rem" }}>Descripción</Typography>
        <TextField
          type="text"
          name="descripcion"
          placeholder="Ingrese una tarea"
          multiline
          rows={3}
          fullWidth
          sx={{ marginBottom: 3 }}
        ></TextField>

        <Box sx={{ display: "grid", gap: 1, gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <Typography sx={{ marginBottom: "1rem" }}>
              Fecha de inicio
            </Typography>

            <TextField
              type="date"
              name="fechaInicio"
              placeholder="Ingrese un titulo"
              fullWidth
              sx={{ marginBottom: 3 }}
            ></TextField>
          </div>
          <div>
            <Typography sx={{ marginBottom: "1rem" }}>
              Fecha de finalización
            </Typography>

            <TextField
              type="date"
              name="fechaFin"
              placeholder="Ingrese un titulo"
              fullWidth
              sx={{ marginBottom: 3 }}
            ></TextField>
          </div>
        </Box>

        <Button sx={{ marginBottom: 2 }} variant="contained" type="submit">
          Agregar Tarea
        </Button>

        <Error error={error} />
      </Box>
    </form>
  );
};

export default InputTareas;
