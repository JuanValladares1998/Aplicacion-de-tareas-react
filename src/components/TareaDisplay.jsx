import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, Card, Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserContext } from "../context/UserContext";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";

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

const TareaDisplay = ({
  titulo,
  descripcion,
  fechaInicio,
  fechaFin,
  estado,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { setListaTareas, listaTareas } = useContext(UserContext);

  const tareaEstadoCambiado = (nombre) => {
    setListaTareas(
      listaTareas.map((tarea) =>
        tarea.titulo === nombre ? { ...tarea, estado: "finalizado" } : tarea
      )
    );
  };

  const eliminarTarea = (nombre) => {
    setListaTareas(listaTareas.filter((tarea) => tarea.titulo !== nombre));
  };

  const acortarTexto = (texto) => {
    if (texto.length > 70) {
      return texto.slice(0, 70) + "...";
    } else {
      return texto;
    }
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
        <Typography variant="body2">{acortarTexto(descripcion)}</Typography>
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
            <Box sx={{ display: "flex", gap: 1 }}>
              <Tooltip title="Finalizar">
                <IconButton
                  aria-label="delete"
                  size="large"
                  onClick={() => {
                    tareaEstadoCambiado(titulo);
                  }}
                  sx={{ padding: 0 }}
                >
                  <DoneOutlineOutlinedIcon fontSize="inherit" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Eliminar">
                <IconButton
                  aria-label="delete"
                  size="large"
                  onClick={() => {
                    eliminarTarea(titulo);
                  }}
                  sx={{ padding: 0 }}
                >
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              width: "60%",
            }}
          >
            <Typography variant="subtitle2" mt={2}>
              Fecha de inicio:
            </Typography>
            <Typography variant="subtitle2" mt={2}>
              {fechaInicio}
            </Typography>
            <Typography variant="subtitle2">Fecha de fin:</Typography>
            <Typography variant="subtitle2">{fechaFin}</Typography>
          </Box>

          <Typography variant="body1" mt={2}>
            {descripcion}
          </Typography>
          <Box sx={{ width: "100%", textAlign: "right" }} mt={4}>
            <Button
              variant="contained"
              sx={{ boxShadow: "none" }}
              type="submit"
              onClick={handleClose}
            >
              OK
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default TareaDisplay;
