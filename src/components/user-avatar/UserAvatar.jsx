import React, { useState } from "react";
import {
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import LogoutIcon from "@mui/icons-material/Logout";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SecurityIcon from "@mui/icons-material/Security";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FeedbackIcon from "@mui/icons-material/Feedback";

const UserAvatar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      {/* Avatar button */}
      <Avatar
        sx={{ cursor: "pointer", marginLeft: "20px" }}
        src="/avatar.png"
        onClick={handleOpen}
      />

      {/* Dropdown menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: 1,
            width: 300,
            bgcolor: "#212121",
            color: "white",
            borderRadius: "10px",
          },
        }}
      >
        {/* Header */}
        <MenuItem>
          <Avatar src="/avatar.png" />
          <Typography ml={1}>
            Nodir Kosimkhujayev
            <Typography variant="body2" color="gray">
              nodirkosimkhujayev@gmail.com
            </Typography>
          </Typography>
        </MenuItem>
        <Divider sx={{ bgcolor: "#383838" }} />

        {/* Account options */}
        <MenuItem>
          <ListItemIcon>
            <AccountCircleIcon sx={{ color: "white" }} />
          </ListItemIcon>
          Google Account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SwitchAccountIcon sx={{ color: "white" }} />
          </ListItemIcon>
          Switch account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LogoutIcon sx={{ color: "white" }} />
          </ListItemIcon>
          Sign out
        </MenuItem>
        <Divider sx={{ bgcolor: "#383838" }} />

        {/* Other sections */}
        <MenuItem>
          <ListItemIcon>
            <YouTubeIcon sx={{ color: "white" }} />
          </ListItemIcon>
          YouTube Studio
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ShoppingCartIcon sx={{ color: "white" }} />
          </ListItemIcon>
          Purchases and memberships
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SecurityIcon sx={{ color: "white" }} />
          </ListItemIcon>
          Your data in YouTube
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DarkModeIcon sx={{ color: "white" }} />
          </ListItemIcon>
          Appearance: Device theme
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LanguageIcon sx={{ color: "white" }} />
          </ListItemIcon>
          Language: English
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LocationOnIcon sx={{ color: "white" }} />
          </ListItemIcon>
          Location: United States
        </MenuItem>


        <Divider sx={{ bgcolor: "#383838" }} />
        <MenuItem>
          <ListItemIcon>
            <SettingsIcon sx={{ color: "white" }} />
          </ListItemIcon>
          Settings
        </MenuItem>
        <Divider sx={{ bgcolor: "#383838" }} />

        <MenuItem>
          <ListItemIcon>
            <HelpOutlineIcon sx={{ color: "white" }} />
          </ListItemIcon>
          Help
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FeedbackIcon sx={{ color: "white" }} />
          </ListItemIcon>
          Send feedback
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserAvatar;
