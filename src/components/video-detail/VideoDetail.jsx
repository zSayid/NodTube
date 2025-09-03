import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Typography, Avatar, Stack } from "@mui/material";
import SubscribeButton from "../button-components/SubscribeButton";
import MoreOptionsMenu from "../button-components/MoreOptionsMenu";
import LikeDislikeButtons from "../button-components/LikeDislikeButtons";
import ShareButton from "../button-components/ShareButton";
import Loader from "../loader/Loader";
import SuggestionVideos from "../suggestion-videos/SuggestionVideos";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);


  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/search?q=${id}&type=video`
        );

        const data = await response.json();
        const mappedData = data.map(item => (
          {
            videoId: item.videoId,
            title: item.title,
            description: item.description,
            thumbnail: item.thumbnail,
            publishedTime: item.ago,
            image: item.image,
            views: item.views,
            avatar: item.author,
            channelId: item.author.url,
            likeCount: Math.floor(Math.random() * 1000000), // Simulating like count
            channelTitle: item.author.name,
            author: item.author.name,
          }
       ))
        console.log("Video Details from youtube api:", mappedData);
        setVideoDetail(mappedData[0]);
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };
    fetchVideoDetails();
  }, [id]);
  

  if (!videoDetail) return <Loader />;

  return (
    <Box minHeight={"90vh"} mb={10} pl={{ xs: 0, md: 20 }}>
      <Box display={"flex"} sx={{ flexDirection: { xs: "column", md: "row" } }}>
        {/* Left Side (Main Video) */}
        <Box width={{ xs: "100%", md: "75%" }}>
          <ReactPlayer
            width={"100%"}
            height={600}
            src={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />

          <Box mt={2}>
            {/* Title */}
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {videoDetail?.title}
            </Typography>

            {/* Channel Info */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 2,
              }}
            >
              <Stack direction="row" py={1} px={2}>
                <Link 
                  to={videoDetail?.author?.url} 
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
                    <Avatar
                      src={videoDetail?.image}
                    />
                    <Box>
                      <Typography fontWeight="bold">
                        {videoDetail?.avatar?.name}
                      </Typography>
                    </Box>
                  </Stack>
                </Link>
              </Stack>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  flexWrap: { xs: "wrap", md: "nowrap" }, // Adjust layout for smaller screens
                  justifyContent: { xs: "center", md: "flex-start" }, // Center items on small screens
                  marginLeft: { xs: 0, md: "650px" }, // Remove margin on small screens
                  mt: { xs: 2, md: 0 },
                }}
              >
                {/* Subscribe Button */}
                <SubscribeButton />
                {/* Like/Dislike */}
                <LikeDislikeButtons likes={videoDetail?.likeCount} />

                {/* Share */}
                <ShareButton />

                {/* More (3 dots) */}
                <MoreOptionsMenu />
              </Box>
            </Box>
            <Box
              sx={{
                mt: 2,
                display: "flex",
                flexDirection: "column",
                gap: 1,
                p: 2,
                borderRadius: 2,
                bgcolor: "#f9f9f9",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="caption" color="text.secondary">
                  {typeof videoDetail?.views === "number" ? videoDetail?.views.toLocaleString() : "N/A"} views
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {videoDetail?.ago}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  {videoDetail?.description}
                </Typography>
              </Box>
            </Box>
            <Box />
          </Box>
        </Box>
        {/* Right Side (Suggested Videos) */}{" "}
        <Box width={{ xs: "100%", md: "25%" }} pl={2}>
          {" "}
          <Box sx={{ height: "95vh", overflowY: "auto" }}>
            <SuggestionVideos />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoDetail;
