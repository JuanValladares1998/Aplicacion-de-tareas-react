import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Switch from "@mui/material/Switch";
import { Button, FormControlLabel, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ListaTareas = ({ listaTareas }) => {
  const tareaTerminada = (nombre) => {
    // let tareaEliminada = listaTareas.filter((tarea) => tarea.id !== id);
    // let tareaCambiada = listaTareas.filter((tarea) => tarea.id === id);
    // console.log(tareaCambiada);
  };

  if (!listaTareas) {
    return <h2>loading</h2>;
  } else {
    return (
      <Grid container spacing={2} direction="column" paddingTop={5} fullWidth>
        {listaTareas.map((tarea) => (
          <Grid item fullWidth>
            <Accordion key={tarea.titulo}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                fullWidth
              >
                <FormControlLabel
                  control={
                    tarea.estado ? <Switch defaultChecked /> : <Switch />
                  }
                />
                <Typography>{tarea.titulo}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography marginBottom={5}>{tarea.descripcion}</Typography>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
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
