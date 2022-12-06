import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";

const ListaTareas = () => {
  const [listaTareas, setListaTareas] = useState([]);

  const getData = () => {
    return localStorage.getItem("lista-tareas");
  };

  useEffect(() => {
    // localStorage.setItem("lista-tareas", JSON.stringify(tareas));
    let tareas = JSON.parse(getData());
    setListaTareas(tareas);
  }, []);

  const tareaTerminada = (id) => {
    // let tareaEliminada = listaTareas.filter((tarea) => tarea.id !== id);
    // let tareaCambiada = listaTareas.filter((tarea) => tarea.id === id);
    // console.log(tareaCambiada);
  };

  if (!listaTareas) {
    return <h2>loading</h2>;
  } else {
    return (
      <>
        <Box
          sx={{
            width: 500,
            margin: "auto",
          }}
        >
          {listaTareas.map((tarea, key) => (
            <Accordion key={key}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Switch
                  onChange={() => {
                    tareaTerminada(tarea.id);
                  }}
                />
                <Typography>{tarea.titulo}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{tarea.descripcion}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </>
    );
  }
};

export default ListaTareas;
