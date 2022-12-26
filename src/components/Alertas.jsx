import { Alert, Snackbar } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const Alertas = ({ alerta }) => {
  const [open, setOpen] = React.useState(false);
  const { setAlerta } = useContext(UserContext);

  useEffect(() => {
    handleClick();
  }, [alerta]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setAlerta(0);
  };

  if (alerta === 1) {
    return (
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Tarea creada correctamente
          </Alert>
        </Snackbar>
      </Stack>
    );
  } else if (alerta === 2) {
    return (
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: "100%" }}
          >
            El nombre de la tarea ya existe
          </Alert>
        </Snackbar>
      </Stack>
    );
  } else if (alerta === 3) {
    return (
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Debes completar todos los campos
          </Alert>
        </Snackbar>
      </Stack>
    );
  } else if (alerta === 4) {
    return (
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: "100%" }}
          >
            Error en las fechas
          </Alert>
        </Snackbar>
      </Stack>
    );
  }
};

export default Alertas;
