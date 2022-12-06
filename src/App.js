import { useEffect, useState } from "react";
import "./App.scss";
import InputTareas from "./components/InputTareas";
import ListaTareas from "./components/ListaTareas.jsx";

function App() {
  const [listaTareas, setListaTareas] = useState([]);

  //Leer localStorage
  const getData = () => {
    return localStorage.getItem("lista-tareas");
  };

  useEffect(() => {
    // localStorage.setItem("lista-tareas", JSON.stringify(tareas));
    let tareas = JSON.parse(getData());
    setListaTareas(tareas);
  }, []);

  const agregarTarea = (tarea) => {
    setListaTareas([...listaTareas, tarea]);
  };

  return (
    <div className="App">
      <h1>App de Tareas</h1>
      <div>
        <h2>Lista de tareas</h2>
        <div>
          <InputTareas agregarTarea={agregarTarea} />
          <ListaTareas listaTareas={listaTareas} />
        </div>
      </div>
    </div>
  );
}

export default App;
