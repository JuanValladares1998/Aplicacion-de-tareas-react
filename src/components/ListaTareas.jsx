import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Switch from "@mui/material/Switch";
import { Button, FormControlLabel, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ListaTareas = ({ listaTareas, setListaTareas }) => {
  const tareaEstadoCambiado = (nombre) => {
    setListaTareas(
      listaTareas.map((tarea) =>
        tarea.titulo === nombre ? { ...tarea, estado: !tarea.estado } : tarea
      )
    );
  };

  const eliminarTarea = (nombre) => {
    setListaTareas(listaTareas.filter((tarea) => tarea.titulo !== nombre));
  };

  if (!listaTareas) {
    return <h2>loading</h2>;
  } else {
    return (
      <Grid container spacing={2} direction="column" paddingTop={5} fullWidth>
        {listaTareas.map((tarea) => (
          <Grid item fullWidth key={tarea.titulo}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                fullWidth
              >
                <FormControlLabel
                  control={
                    <Switch
                      checked={tarea.estado}
                      onChange={() => {
                        tareaEstadoCambiado(tarea.titulo);
                      }}
                    />
                  }
                />
                <Typography>{tarea.titulo}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography marginBottom={5}>{tarea.descripcion}</Typography>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={() => {
                    eliminarTarea(tarea.titulo);
                  }}
                >
                  Delete
                </Button>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    );
  }
};

export default ListaTareas;
