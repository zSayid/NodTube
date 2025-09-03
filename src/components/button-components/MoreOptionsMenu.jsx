import { useState } from "react";
import { Button, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DownloadIcon from "@mui/icons-material/Download";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";

const MoreOptionsMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Button
        onClick={handleClick}
        sx={{
          borderRadius: "50%",
          minWidth: "40px",
          height: "40px",
          padding: 0,
        }}
      >
        <MoreHorizIcon />
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: "8px",
            mt: 1,
          },
        }}
      >
        <MenuItem>
          <ListItemIcon><DownloadIcon /></ListItemIcon>
          <ListItemText primary="Download" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon><ContentCutIcon /></ListItemIcon>
          <ListItemText primary="Clip" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon><BookmarkBorderIcon /></ListItemIcon>
          <ListItemText primary="Save to Watch Later" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon><OutlinedFlagIcon /></ListItemIcon>
          <ListItemText primary="Report" />
        </MenuItem>
      </Menu>
    </>
  );
};

export default MoreOptionsMenu;
