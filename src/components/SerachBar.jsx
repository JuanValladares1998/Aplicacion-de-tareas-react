import { Box, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../context/UserContext";

const SerachBar = () => {
  const { busqueda, setBusqueda } = useContext(UserContext);

  const formSubmit = (formulario) => {
    formulario.preventDefault();
    setBusqueda(formulario.target.nombre.value);
  };

  const cambioBarraDeBusqueda = (evento) => {
    if (evento.target.value === "") {
      setBusqueda("");
    }
  };

  const SearchBar = styled(Box)({
    backgroundColor: "#fff",
    width: "20rem",
    padding: ".2rem .4rem",
    borderRadius: ".4rem",
    border: ".1rem solid #BABABA",
    "&:hover": {
      border: ".1rem solid #1976D2",
    },
  });
  return (
    <SearchBar>
      <form onSubmit={formSubmit}>
        <IconButton aria-label="delete" type="submit">
          <SearchIcon />
        </IconButton>
        <InputBase
          name="nombre"
          placeholder="Buscar..."
          sx={{ width: "85%", margin: "auto 0" }}
          defaultValue={busqueda}
          onChange={cambioBarraDeBusqueda}
        />
      </form>
    </SearchBar>
  );
};

export default SerachBar;
