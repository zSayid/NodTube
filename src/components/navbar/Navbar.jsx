import React from "react";
import { Stack, Box } from "@mui/material";
import { SearchBar } from "../";
import logo from "./put play button inst.png";
import { colors } from "../../constantants/colors";
import { Link } from "react-router-dom";
import CreateButton from "../button-components/CreateButton";
import NotificationsButton from "../button-components/NotificationButton";
import UserAvatar from "../user-avatar/UserAvatar";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      p={2}
      justifyContent={"space-between"}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: colors.primary,
      }}
    >
      <Link to={"/"}>
        <img src={logo} alt="logo" height={100} />
      </Link>
      <SearchBar />
      <Box />
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <CreateButton />
        <Box>
          <NotificationsButton />
        </Box>
        <Box>
          <UserAvatar />
        </Box>
      </Box>
    </Stack>
  );
};

export default Navbar;
