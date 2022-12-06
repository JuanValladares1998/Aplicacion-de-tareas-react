import React from "react";

const InputTareas = ({ agregarTarea }) => {
  const formSubmit = (formulario) => {
    formulario.preventDefault();
    agregarTarea({
      titulo: formulario.target.titulo.value,
      descripcion: formulario.target.descripcion.value,
    });
    formulario.target.titulo.value = "";
    formulario.target.descripcion.value = "";
  };

  return (
    <form on onSubmit={formSubmit}>
      <input type="text" name="titulo" placeholder="Ingrese un titulo"></input>
      <input
        type="text"
        name="descripcion"
        placeholder="Ingrese una tarea"
      ></input>
      <button>Agregar Tarea</button>
    </form>
  );
};

export default InputTareas;
