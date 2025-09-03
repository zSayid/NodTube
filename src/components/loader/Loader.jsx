import React from "react";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";

const Loader = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%", height: "100vh" }}
      >
        <CircularProgress color={"primary"} size={60} thickness={4} />
      </Stack>
    </Box>
  );
};

export default Loader;
