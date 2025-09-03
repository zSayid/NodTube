import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main, Navbar, VideoDetail } from "../";
import { Box } from "@mui/material";
import { Search } from "../";


const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:id" element={<Search />} />
      </Routes>
    </Box>
  );
};

export default App;
