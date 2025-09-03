import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Avatar,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { colors } from "../../constantants/colors";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: "12px",
        overflow: "hidden",
        backgroundColor: colors.primary,
      }}
    >
      {/* Thumbnail */}
      <Link to={`/video/${video?.videoId}`}>
        <CardMedia
          component="img"
          image={video?.image}
          alt={video?.title}
          sx={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
        />
      </Link>

      {/* Content */}
      {/* <Link to={`/video/${video?.videoId}`}>
      </Link> */}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          padding: "12px",
          minHeight: "160px",
          "&:hover": {
            backgroundColor: "#1976d2",
            color: "white",
            transition: "0.3s",
          },
        }}
      >
        {/* Title */}
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          sx={{ lineHeight: 1.3 }}
        >
          {video?.title?.slice(0, 90) || "No Title"}
        </Typography>

        {/* Description */}
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          {video?.description?.slice(0, 80) || ""}
        </Typography>

        {/* Views + Time */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ opacity: 0.7, fontSize: "13px" }}
        >
          <Typography variant="caption">
            {video?.ago || video?.publishedTime}
          </Typography>
          <VisibilityIcon sx={{ fontSize: 16 }} />
          <Typography variant="caption">
            {video?.views?.toLocaleString()} views
          </Typography>
        </Stack>

        {/* Channel Info */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ marginTop: "auto" }}
        >
          <Avatar src={video?.thumbnail} sx={{ width: 28, height: 28 }} />
          <Link to={video?.author?.url} style={{textDecoration: 'none', color: 'inherit'}}>
          <Typography variant="subtitle2" color="gray">
            {video?.avatar?.name}
          </Typography>
          </Link>
          <CheckCircle sx={{ fontSize: 16, color: "gray" }} />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
