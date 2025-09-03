import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import SensorsOutlinedIcon from "@mui/icons-material/SensorsOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import { useState } from "react";

const CreateButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleCreateClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <>
      <Button
        onClick={handleCreateClick}
        sx={{
          width: "110px",
          marginRight: "20px",
          backgroundColor: "#212121",
          color: "white",
          textTransform: "none",
          borderRadius: "20px",
        }}
      >
        <AddIcon  />
        Create
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
        <MenuItem>
          <ListItemIcon>
            <SlideshowIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Upload video" />
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <SensorsOutlinedIcon sx={{ color: "white" }}/>
          </ListItemIcon>
          <ListItemText primary="Go live" />
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <EditNoteOutlinedIcon sx={{ color: "white" }}/>
          </ListItemIcon>
          <ListItemText primary="Create post" />
        </MenuItem>
      </Menu>
    </>
  );
};

export default CreateButton;
