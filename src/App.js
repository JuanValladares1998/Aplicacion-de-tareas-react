import { useEffect, useState } from "react";
import "./App.scss";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { UserContext } from "./context/UserContext";
import SerachBar from "./components/SerachBar";
import ColumnaTareas from "./components/ColumnaTareas";
import ModalAgregarTareas from "./components/ModalAgregarTareas";
import TareaDisplay from "./components/TareaDisplay";
import Alertas from "./components/Alertas";

function App() {
  const [listaTareas, setListaTareas] = useState([]);
  const [listaFiltrada, setlistaFiltrada] = useState([]);
  const [alerta, setAlerta] = useState(0);

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
      value={{
        listaTareas,
        setListaTareas,
        listaFiltrada,
        setlistaFiltrada,
        alerta,
        setAlerta,
      }}
    >
      <AppBar position="relative">
        <Toolbar>
          <ListAltIcon fontSize="large" sx={{ marginRight: "10px" }} />
          <Typography variant="h5">App de Tareas</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container maxWidth="xl" sx={{ paddingBottom: 5 }}>
          <Typography variant="h2" component="h1" mt="2rem">
            Tabla de Tareas
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ marginTop: "2rem", marginBottom: "1rem" }}
          >
            Tabla de Tarea de: Juan Valladares.
          </Typography>
          <SerachBar />
          <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
            <Grid item xs={12} md={6} xl={3}>
              <ColumnaTareas placeHolder="POR HACER">
                {listaTareas.map((tarea) => (
                  <TareaDisplay
                    key={tarea.titulo}
                    titulo={tarea.titulo}
                    descripcion={tarea.descripcion}
                    fechaInicio={tarea.fechaInicio}
                    fechaFin={tarea.fechaFin}
                  ></TareaDisplay>
                ))}
              </ColumnaTareas>
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <ColumnaTareas placeHolder="EN PROGRESO">
                <p>XDDDDDDDDDD</p>
              </ColumnaTareas>
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <ColumnaTareas placeHolder="EN REVISIÓN">
                <p>XDDDDDDDDDD</p>
              </ColumnaTareas>
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <ColumnaTareas placeHolder="FINALIZADO">
                <p>XDDDDDDDDDD</p>
              </ColumnaTareas>
            </Grid>
          </Grid>
          <ModalAgregarTareas></ModalAgregarTareas>
        </Container>
        <Alertas alerta={alerta}></Alertas>
      </main>
    </UserContext.Provider>
  );
}

export default App;
