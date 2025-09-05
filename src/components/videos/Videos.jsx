import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "../";
import { Loader } from "../";
import HomeMenu from "../home-menu/HomeMenu";
import { colors } from "../../constantants/colors";

const Videos = ({ videos }) => {
  if (!videos.length) return <Loader />;

  return (
    <Stack direction="row" width="100%" justifyContent="start">
      <Box
        width="80px"
        sx={{
          position: "fixed",
          top: "80px",
          left: 5,
          zIndex: 1000,
          height: "calc(100vh - 80px)",
          overflowY: "auto",
          background: colors.primary,
          padding: "10px 0",
        }}
      >
        <HomeMenu />
      </Box>

      <Stack
        direction="row"
        flexWrap="wrap"
        gap={2}
        justifyContent="center"
        alignItems="start"
        sx={{ marginLeft: "70px", width: "calc(100% - 70px)" }}
      >
        {videos.map((item) => (
          <Box key={item.videoId}>
            {item.videoId && <VideoCard video={item} />}
            {item.channelId && <ChannelCard video={item} />}
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default Videos;
