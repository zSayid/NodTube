import { Paper, IconButton } from "@mui/material";
import React, { useState } from "react";
import { colors } from "../../constantants/colors";
import {Search} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`/search/${value}`);
      setValue(''); // Clear the input after submission
    }
  }
  return (
    <Paper
    onSubmit={submitHandler}
      component={"form"}
      sx={{
        border: `1px solid ${colors.primary}`,
        paddingLeft: 2,
        pl: 2,
        boxShadow: "none",
      }}
    >
      <input type="text" placeholder="Search..." className="search-bar" onChange={(e) => setValue(e.target.value)} />
      <IconButton type="submit">
        <Search className="search-icon" />
      </IconButton>
      <IconButton>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
