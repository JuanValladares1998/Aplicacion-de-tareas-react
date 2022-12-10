import { useEffect, useState } from "react";
import "./App.scss";
import InputTareas from "./components/InputTareas";
import ListaTareas from "./components/ListaTareas.jsx";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { AppBar, CssBaseline, Grid, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";

function App() {
  const [listaTareas, setListaTareas] = useState([]);

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
  }, [listaTareas]);

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <ListAltIcon fontSize="large" sx={{ marginRight: "10px" }} />
          <Typography variant="h5">App de Tareas</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
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
              Hola y bienvendio a mi aplicación de Tareas. Agrega y revisa todas
              las tareas que requieras.
            </Typography>
            <Grid container spacing={2} justify="center" maxWidth="sm">
              <InputTareas
                setListaTareas={setListaTareas}
                listaTareas={listaTareas}
              />
              <ListaTareas listaTareas={listaTareas} />
            </Grid>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
