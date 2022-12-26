import { Box, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import styled from "styled-components";

const SerachBar = () => {
  const formSubmit = (formulario) => {
    formulario.preventDefault();
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
        />
      </form>
    </SearchBar>
  );
};

export default SerachBar;
