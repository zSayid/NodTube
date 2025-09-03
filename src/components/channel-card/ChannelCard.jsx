import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography, Avatar } from "@mui/material";

const ChannelCard = ({ video }) => {
  console.log(video);
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        height: "326px",
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <CardContent>
        <CardMedia
          image={video?.image}
          alt={video?.title}
          sx={{
            borderRadius: "50%",
            height: "180px",
            width: "180px",
            mb: 2,
            border: "1px solid #e3e3e3",
            mt: "20px",
          }}
        />
        <Typography variant={"h6"}>
          <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
        </Typography>

        <Avatar src={video?.thumbnail} sx={{ width: 28, height: 28 }} />
        <Typography variant="subtitle2" color="gray">
          {video?.avatar?.name}
        </Typography>
      </CardContent>
    </Box>
  );
};

export default ChannelCard;
