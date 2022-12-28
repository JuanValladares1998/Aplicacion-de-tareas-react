import { Card } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ColumnaTareas = ({ placeHolder, children, icon }) => {
  return (
    <Card sx={{ height: { xs: "auto", md: "36rem" } }}>
      <Card
        sx={{
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {placeHolder}
        {icon}
      </Card>
      <Box
        sx={{
          margin: "1rem .3rem",
          overflow: "auto",
          height: { xs: "auto", md: "30rem" },
          maxHeight: "30rem",
        }}
      >
        {children}
      </Box>
    </Card>
  );
};

export default ColumnaTareas;
