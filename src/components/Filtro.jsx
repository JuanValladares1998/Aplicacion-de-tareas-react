import React, { useEffect, useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Filtro = () => {
  const { setlistaFiltrada, listaTareas, listaFiltrada } =
    useContext(UserContext);

  const [filtro, setFiltro] = useState({
    completado: false,
    importante: false,
  });

  const filtrarCompletados = () => {
    setFiltro((filtros) => ({ ...filtros, completado: !filtro.completado }));
  };

  const filtrarImportantes = () => {
    setFiltro((filtros) => ({ ...filtros, importante: !filtro.importante }));
  };

  useEffect(() => {
    if (filtro.completado && !filtro.importante) {
      setlistaFiltrada(listaTareas.filter((tarea) => tarea.estado === true));
    } else if (filtro.importante && !filtro.completado) {
      setlistaFiltrada(
        listaTareas.filter((tarea) => tarea.importante === true)
      );
    } else if (filtro.completado && filtro.importante) {
      setlistaFiltrada(
        listaTareas.filter(
          (tarea) => tarea.importante === true && tarea.estado === true
        )
      );
    } else {
      setlistaFiltrada(listaTareas);
    }
  }, [filtro, listaTareas, setlistaFiltrada, listaFiltrada]);

  return (
    <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
      <FormControlLabel
        control={<Checkbox />}
        label="Completados"
        onChange={() => filtrarCompletados()}
      />
      <FormControlLabel
        control={
          <Checkbox
            {...label}
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
          />
        }
        label="Importantes"
        onChange={() => filtrarImportantes()}
      />
    </FormGroup>
  );
};

export default Filtro;
