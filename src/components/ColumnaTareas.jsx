import { Card } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ColumnaTareas = ({ placeHolder, children }) => {
  return (
    <Card sx={{ height: { xs: "auto", md: "36rem" } }}>
      <Card sx={{ padding: "1rem" }}>{placeHolder}</Card>
      <Box
        sx={{
          margin: "1rem .3rem",
          overflow: "auto",
          height: "30rem",
        }}
      >
        {children}
      </Box>
    </Card>
  );
};

export default ColumnaTareas;
