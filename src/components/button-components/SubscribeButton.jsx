import { useState } from "react";
import { Button, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import PersonOffIcon from "@mui/icons-material/PersonOff";

const SubscribeButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState("Personalized");

  const open = Boolean(anchorEl);

  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleSelect = (option) => {
    setSelected(option);
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        variant="contained"
        sx={{
          width: "170px",
          backgroundColor: "#212121",
          textTransform: "none",
          borderRadius: "20px",
          justifyContent: "space-between",
          "&:hover": { backgroundColor: "#383838" },
        }}
      >
        {selected === "All" && <NotificationsIcon />}
        {selected === "Personalized" && <NotificationsNoneIcon />}
        {selected === "None" && <NotificationsOffIcon />}
        {selected === "Unsubscribe" && <PersonOffIcon />}
        {selected} ▼
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            bgcolor: "#212121",
            color: "white",
            borderRadius: "8px",
            mt: 1,
          },
        }}
      >
        <MenuItem onClick={() => handleSelect("All")}>
          <ListItemIcon><NotificationsIcon sx={{ color: "white" }} /></ListItemIcon>
          <ListItemText primary="All" />
        </MenuItem>
        <MenuItem onClick={() => handleSelect("Personalized")}>
          <ListItemIcon><NotificationsNoneIcon sx={{ color: "white" }} /></ListItemIcon>
          <ListItemText primary="Personalized" />
        </MenuItem>
        <MenuItem onClick={() => handleSelect("None")}>
          <ListItemIcon><NotificationsOffIcon sx={{ color: "white" }} /></ListItemIcon>
          <ListItemText primary="None" />
        </MenuItem>
        <MenuItem onClick={() => handleSelect("Unsubscribe")}>
          <ListItemIcon><PersonOffIcon sx={{ color: "white" }} /></ListItemIcon>
          <ListItemText primary="Unsubscribe" />
        </MenuItem>
      </Menu>
    </>
  );
};

export default SubscribeButton;
