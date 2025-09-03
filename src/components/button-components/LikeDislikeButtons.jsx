import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";

const LikeDislikeButtons = ({ likes }) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setLiked(true);
      setLikeCount(likeCount + 1);
      if (disliked) setDisliked(false);
    }
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: "#383838",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      {/* Like */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          px: 2,
          cursor: "pointer",
          borderRight: "1px solid #555",
          color: "white",
        }}
        onClick={handleLike}
      >
        <IconButton sx={{ color: liked ? "#3ea6ff" : "white" }}>
          <ThumbUpOutlinedIcon />
        </IconButton>
        <Typography>{likeCount}</Typography>
      </Box>

      {/* Dislike */}
      <Box
        sx={{ display: "flex", alignItems: "center", px: 2, cursor: "pointer" }}
        onClick={handleDislike}
      >
        <IconButton sx={{ color: disliked ? "#3ea6ff" : "white" }}>
          <ThumbDownOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default LikeDislikeButtons;
