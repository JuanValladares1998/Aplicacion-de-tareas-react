import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, Card } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
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

const TareaDisplay = ({ titulo, descripcion, fechaInicio, fechaFin }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { setListaTareas, listaTareas } = useContext(UserContext);

  const eliminarTarea = (nombre) => {
    setListaTareas(listaTareas.filter((tarea) => tarea.titulo !== nombre));
  };

  return (
    <>
      <Card
        sx={{
          padding: "1rem",
          marginTop: 1,
          "&:first-of-type": {
            marginTop: 0,
          },
        }}
        onClick={handleOpen}
      >
        <Typography variant="subtitle1">{titulo}</Typography>
        <Typography variant="body2">{descripcion}</Typography>
        <Typography variant="caption" display="block">
          Inicio: {fechaInicio}
        </Typography>
        <Typography variant="caption" display="block">
          Fin: {fechaFin}
        </Typography>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" component="h2">
              {titulo}
            </Typography>
            <IconButton
              aria-label="delete"
              size="large"
              onClick={() => {
                eliminarTarea(titulo);
              }}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </Box>

          <Typography variant="body1" mt={2}>
            {descripcion}
          </Typography>

          <Typography variant="subtitle2" mt={2}>
            Fecha de inicio: {fechaInicio}
          </Typography>
          <Typography variant="subtitle2">Fecha de fin: {fechaFin}</Typography>

          <Box sx={{ width: "100%", textAlign: "right" }} mt={4}>
            <Button
              variant="contained"
              sx={{ boxShadow: "none" }}
              type="submit"
            >
              Editar
            </Button>
            <Button variant="text" sx={{ marginLeft: 1 }} onClick={handleClose}>
              Cerrar
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default TareaDisplay;
