import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, Fab, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { UserContext } from "../context/UserContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  padding: 4,
  borderRadius: 2,
  width: { xs: "90%", sm: "32rem" },
};

const ModalAgregarTareas = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { setListaTareas, listaTareas, setAlerta } = useContext(UserContext);

  const formSubmit = (formulario) => {
    setAlerta(0);
    formulario.preventDefault();
    if (
      formulario.target.titulo.value &&
      formulario.target.descripcion.value &&
      formulario.target.fechaInicio.value &&
      formulario.target.fechaFin.value
    ) {
      const tarea = {
        estado: false,
        titulo: formulario.target.titulo.value,
        descripcion: formulario.target.descripcion.value,
        importante: false,
        fechaInicio: formulario.target.fechaInicio.value,
        fechaFin: formulario.target.fechaFin.value,
      };

      if (
        listaTareas.find(
          (obj) => obj.titulo.toLowerCase() === tarea.titulo.toLowerCase()
        )
      ) {
        //Tarea ya existe
        setAlerta(1);
      } else if (tarea.fechaInico > tarea.fechaFin) {
        //Fecha incorrecta
        setAlerta(4);
      } else {
        setListaTareas([...listaTareas, tarea]);
        formulario.target.titulo.value = "";
        formulario.target.descripcion.value = "";
        formulario.target.fechaInicio.value = "";
        formulario.target.fechaFin.value = "";
        setAlerta(1);
        setTimeout(() => {
          handleClose();
        }, 1500);
      }
    } else {
      //Debes completar todos los campos
      setAlerta(3);
    }
  };

  return (
    <div>
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: "fixed",
          right: { xs: "1rem", sm: "2rem", lg: "4rem" },
          bottom: { xs: "1rem", sm: "2rem" },
        }}
        onClick={() => handleOpen()}
      >
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={formSubmit}>
          <Box sx={style}>
            <Typography variant="h5" component="h2">
              Nueva Tarea
            </Typography>
            <Typography sx={{ mt: 4 }}>Título de la tarea</Typography>
            <TextField
              name="titulo"
              variant="outlined"
              placeholder="Título"
              sx={{ mt: 2, width: "100%" }}
            />
            {/*<Typography sx={{ mt: 2 }}>Duración</Typography>
             <Box sx={{ display: "flex", gap: "2rem" }}>
              <TextField
                name="numeroTiempo"
                variant="outlined"
                type="number"
                placeholder="Numero de..."
                sx={{ mt: 2, width: "70%" }}
              />
              <FormControl sx={{ mt: 2, width: "25%" }}>
                <InputLabel>Tiempo</InputLabel>
                <Select label="Tiempo">
                  <MenuItem value={1}>Días</MenuItem>
                  <MenuItem value={2}>Semanas</MenuItem>
                  <MenuItem value={3}>Meses</MenuItem>
                </Select>
              </FormControl>
            </Box> */}
            <Typography sx={{ mt: 2 }}>Fecha de inicio</Typography>
            <TextField
              name="fechaInicio"
              variant="outlined"
              type="date"
              sx={{ mt: 2, width: "100%" }}
            />
            <Typography sx={{ mt: 2 }}>Fecha de Fin</Typography>
            <TextField
              name="fechaFin"
              variant="outlined"
              type="date"
              sx={{ mt: 2, width: "100%" }}
            />
            <Typography sx={{ mt: 2 }}>Descripcion</Typography>
            <TextField
              name="descripcion"
              variant="outlined"
              sx={{ mt: 2, mb: 4, width: "100%" }}
              rows={4}
              multiline
            />

            <Box sx={{ width: "100%", textAlign: "right" }}>
              <Button
                variant="contained"
                sx={{ boxShadow: "none" }}
                type="submit"
              >
                Aceptar
              </Button>
              <Button
                variant="text"
                onClick={handleClose}
                sx={{ marginLeft: 1 }}
              >
                Descartar
              </Button>
            </Box>
          </Box>
        </form>
      </Modal>
    </div>
  );
};

export default ModalAgregarTareas;
