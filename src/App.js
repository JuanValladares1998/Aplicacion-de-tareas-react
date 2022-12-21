import { useEffect, useState } from "react";
import "./App.scss";
import InputTareas from "./components/InputTareas";
import ListaTareas from "./components/ListaTareas.jsx";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { UserContext } from "./context/UserContext";
import Filtro from "./components/Filtro";

function App() {
  const [listaTareas, setListaTareas] = useState([]);
  const [listaFiltrada, setlistaFiltrada] = useState([]);

  //Leer localStorage
  const getData = () => {
    return localStorage.getItem("lista-tareas");
  };

  useEffect(() => {
    let tareas = JSON.parse(getData());
    if (tareas) {
      setListaTareas(tareas);
    }
  }, []);

  useEffect(() => {
    if (listaTareas) {
      localStorage.setItem("lista-tareas", JSON.stringify(listaTareas));
    }
    setlistaFiltrada(listaTareas);
  }, [listaTareas]);

  return (
    <UserContext.Provider
      value={{ listaTareas, setListaTareas, listaFiltrada, setlistaFiltrada }}
    >
      <AppBar position="relative">
        <Toolbar>
          <ListAltIcon fontSize="large" sx={{ marginRight: "10px" }} />
          <Typography variant="h5">App de Tareas</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container maxWidth="xl" sx={{ paddingBottom: 10 }}>
          <Grid container spacing={10}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
                paddingTop={5}
              >
                Lista de Tareas
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="textPrimary"
                gutterBottom
                paddingBottom={5}
              >
                Hola y bienvendio a mi aplicación de Tareas. Agrega y revisa
                todas las tareas que requieras.
              </Typography>
              <InputTareas />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="button"
                display="block"
                gutterBottom
                marginTop={6}
              >
                overline text
              </Typography>
              <Filtro />
              <ListaTareas />
            </Grid>
          </Grid>
        </Container>
      </main>
    </UserContext.Provider>
  );
}

export default App;
