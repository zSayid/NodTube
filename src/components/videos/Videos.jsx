import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "../";
import {Loader} from "../";


const Videos = ({videos} ) => {
  // console.log('data from video', {videos});
  if (!videos.length) return <Loader />;
  return (
    <Stack
      direction="row"
      width={"100%"}
      flexWrap="wrap"
      gap={2}
      justifyContent="center"
      alignItems={"start"}
    >
      {videos.map((item) => (
        <Box key={item.videoId}>
          {item.videoId && <VideoCard video={item} />}
          {item.channelId && <ChannelCard video={item} />}          
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
