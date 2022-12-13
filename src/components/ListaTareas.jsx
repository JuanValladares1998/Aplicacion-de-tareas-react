import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Box from "@mui/material/Box/Box";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ListaTareas = () => {
  const { listaTareas, setListaTareas, listaFiltrada } =
    useContext(UserContext);

  const tareaEstadoCambiado = (nombre) => {
    setListaTareas(
      listaTareas.map((tarea) =>
        tarea.titulo === nombre ? { ...tarea, estado: !tarea.estado } : tarea
      )
    );
  };

  const tareaImportanteCambiado = (nombre) => {
    setListaTareas(
      listaTareas.map((tarea) =>
        tarea.titulo === nombre
          ? { ...tarea, importante: !tarea.importante }
          : tarea
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
      <Box fullWidth>
        {listaFiltrada.map((tarea) => (
          <Box fullWidth key={tarea.titulo} sx={{ marginTop: 4 }}>
            <Paper variant="outlined">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ width: 100 }}>
                  <Checkbox
                    checked={tarea.estado}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                    onChange={() => {
                      tareaEstadoCambiado(tarea.titulo);
                    }}
                  />
                  <Checkbox
                    {...label}
                    checked={tarea.importante}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                    onChange={() => {
                      tareaImportanteCambiado(tarea.titulo);
                    }}
                  />
                </Box>
                <IconButton
                  aria-label="delete"
                  size="large"
                  onClick={() => {
                    eliminarTarea(tarea.titulo);
                  }}
                >
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </Box>
              <Box>
                <Typography sx={{ marginLeft: "1rem", marginBottom: "1rem" }}>
                  {tarea.titulo}
                </Typography>
              </Box>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  fullWidth
                >
                  <Typography variant="caption">Descripción...</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography marginBottom={5}>{tarea.descripcion}</Typography>
                </AccordionDetails>
              </Accordion>
            </Paper>
          </Box>
        ))}
      </Box>
    );
  }
};

export default ListaTareas;
