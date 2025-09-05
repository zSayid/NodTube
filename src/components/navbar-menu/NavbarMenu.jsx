import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Avatar,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PlayCircleOutlineTwoToneIcon from "@mui/icons-material/PlayCircleOutlineTwoTone";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import RestoreSharpIcon from "@mui/icons-material/RestoreSharp";
import PlaylistAddCheckSharpIcon from "@mui/icons-material/PlaylistAddCheckSharp";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavbarMenu = ({ videos }) => {
  const [randomVideos, setRandomVideos] = useState([]);

  useEffect(() => {
    // Shuffle videos and pick 5 random ones
    const shuffledVideos = [...videos].sort(() => 0.5 - Math.random());
    setRandomVideos(shuffledVideos.slice(0, 5));
  }, [videos]);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton onClick={handleOpen}>
        <MenuRoundedIcon style={{ fontSize: "30px" }} />
      </IconButton>

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
          <ListItemIcon>
            <HomeRoundedIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PlayCircleOutlineTwoToneIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Shorts" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SubscriptionsOutlinedIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Subscriptions" />
        </MenuItem>

        <Divider sx={{ bgcolor: "#383838" }} />

        <Typography
          variant="body2"
          color="white"
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "8px 16px",
            cursor: "pointer",
          }}
        >
          You
          <KeyboardArrowRightOutlinedIcon fontSize="small" sx={{ ml: 1 }} />
        </Typography>

        <MenuItem>
          <ListItemIcon>
            <RestoreSharpIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="History" />
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <PlaylistAddCheckSharpIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Playlists" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <OndemandVideoOutlinedIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Your videos" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <WatchLaterOutlinedIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Watch later" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ThumbUpOutlinedIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Liked videos" />
        </MenuItem>

        <Divider sx={{ bgcolor: "#383838" }} />

        <Typography
          variant="body2"
          color="white"
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "8px 16px",
            cursor: "pointer",
          }}
        >
          Subscribers
          <KeyboardArrowRightOutlinedIcon fontSize="small" sx={{ ml: 1 }} />
        </Typography>

        {/* Render random video avatars dynamically */}
        {randomVideos.map((video) => (
          <MenuItem key={video.videoId} sx={{ display: "flex", alignItems: "center" }}>
            <Avatar src={video.image} alt={video.title} sx={{ width: 40, height: 40, mr: 2 }} />
            <Typography
              variant="body2"
              color="white"
              component={Link}
              to={video?.avatar?.url}
              sx={{
                textDecoration: "none",
              }}
            >
              {video.avatar.name}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default NavbarMenu;
