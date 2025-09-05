import {
  Box,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";

const ChannelCard = ({ video }) => {
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
        <Stack direction="row" py={1} px={2}>
          <Link
            to={video?.avatar?.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Stack
              direction={"row"}
              gap={"5px"}
              marginTop={"5px"}
              alignItems="center"
            >
              <Avatar src={video?.image} />
              <Box>
                <Typography fontWeight="bold">{video?.avatar?.name}</Typography>
              </Box>
            </Stack>
          </Link>
        </Stack>
      </CardContent>
    </Box>
  );
};

export default ChannelCard;
