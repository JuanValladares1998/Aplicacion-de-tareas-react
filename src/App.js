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
    <div className="App">
      <h1>App de Tareas</h1>
      <div>
        <h2>Lista de tareas</h2>
        <div>
          <InputTareas
            setListaTareas={setListaTareas}
            listaTareas={listaTareas}
          />
          <ListaTareas listaTareas={listaTareas} />
        </div>
      </div>
    </div>
  );
}

export default App;
