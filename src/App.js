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
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DateRangeIcon from "@mui/icons-material/DateRange";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";

function App() {
  const [listaTareas, setListaTareas] = useState([]);
  const [listaFiltrada, setlistaFiltrada] = useState([]);
  const [listaPorHacer, setlistaPorHacer] = useState([]);
  const [listaEnProgreso, setlistaEnProgreso] = useState([]);
  const [listaEnRevision, setlistaEnRevision] = useState([]);
  const [listaFinalizado, setlistaFinalizado] = useState([]);
  const [alerta, setAlerta] = useState(0);
  const [busqueda, setBusqueda] = useState([]);

  //Leer localStorage
  const getData = () => {
    return localStorage.getItem("lista-tareas");
  };

  useEffect(() => {
    let tareas = JSON.parse(getData());

    let fechaActual = new Date().toJSON().slice(0, 10);
    console.log(fechaActual);

    if (tareas) {
      setListaTareas(
        tareas.map((tarea) => {
          if (fechaActual < tarea.fechaInicio) {
            return { ...tarea, estado: "por hacer" };
          } else if (
            fechaActual > tarea.fechaInicio &&
            fechaActual < tarea.fechaFin
          ) {
            return { ...tarea, estado: "en progreso" };
          } else if (fechaActual > tarea.fechaFin) {
            return { ...tarea, estado: "en revision" };
          } else {
            return tarea;
          }
        })
      );
    }
  }, []);

  useEffect(() => {
    setlistaPorHacer(
      listaTareas.filter(
        (tareas) =>
          tareas.estado === "por hacer" && tareas.titulo.indexOf(busqueda) > -1
      )
    );
    setlistaEnProgreso(
      listaTareas.filter(
        (tareas) =>
          tareas.estado === "en progreso" &&
          tareas.titulo.indexOf(busqueda) > -1
      )
    );
    setlistaEnRevision(
      listaTareas.filter(
        (tareas) =>
          tareas.estado === "en revision" &&
          tareas.titulo.indexOf(busqueda) > -1
      )
    );
    setlistaFinalizado(
      listaTareas.filter(
        (tareas) =>
          tareas.estado === "finalizado" && tareas.titulo.indexOf(busqueda) > -1
      )
    );
  }, [busqueda, listaTareas]);

  useEffect(() => {
    if (listaTareas) {
      localStorage.setItem("lista-tareas", JSON.stringify(listaTareas));
    }
    //setlistaFiltrada(listaTareas);
    setlistaPorHacer(
      listaTareas.filter((tareas) => tareas.estado === "por hacer")
    );
    setlistaEnProgreso(
      listaTareas.filter((tareas) => tareas.estado === "en progreso")
    );
    setlistaEnRevision(
      listaTareas.filter((tareas) => tareas.estado === "en revision")
    );
    setlistaFinalizado(
      listaTareas.filter((tareas) => tareas.estado === "finalizado")
    );
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
        busqueda,
        setBusqueda,
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
              <ColumnaTareas
                placeHolder="POR HACER"
                icon={<DateRangeIcon sx={{ color: "gray" }} />}
              >
                {listaPorHacer.map((tarea) => (
                  <TareaDisplay
                    key={tarea.titulo}
                    titulo={tarea.titulo}
                    descripcion={tarea.descripcion}
                    fechaInicio={tarea.fechaInicio}
                    fechaFin={tarea.fechaFin}
                    estado={tarea.estado}
                  ></TareaDisplay>
                ))}
              </ColumnaTareas>
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <ColumnaTareas
                placeHolder="EN PROGRESO"
                icon={<AccessTimeIcon color="primary" />}
              >
                {listaEnProgreso.map((tarea) => (
                  <TareaDisplay
                    key={tarea.titulo}
                    titulo={tarea.titulo}
                    descripcion={tarea.descripcion}
                    fechaInicio={tarea.fechaInicio}
                    fechaFin={tarea.fechaFin}
                    estado={tarea.estado}
                  ></TareaDisplay>
                ))}
              </ColumnaTareas>
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <ColumnaTareas
                placeHolder="EN REVISIÓN"
                icon={<VisibilityOutlinedIcon sx={{ color: "orange" }} />}
              >
                {listaEnRevision.map((tarea) => (
                  <TareaDisplay
                    key={tarea.titulo}
                    titulo={tarea.titulo}
                    descripcion={tarea.descripcion}
                    fechaInicio={tarea.fechaInicio}
                    fechaFin={tarea.fechaFin}
                    estado={tarea.estado}
                  ></TareaDisplay>
                ))}
              </ColumnaTareas>
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <ColumnaTareas
                placeHolder="FINALIZADO"
                icon={<DoneOutlineOutlinedIcon sx={{ color: "green" }} />}
              >
                {listaFinalizado.map((tarea) => (
                  <TareaDisplay
                    key={tarea.titulo}
                    titulo={tarea.titulo}
                    descripcion={tarea.descripcion}
                    fechaInicio={tarea.fechaInicio}
                    fechaFin={tarea.fechaFin}
                    estado={tarea.estado}
                  ></TareaDisplay>
                ))}
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
