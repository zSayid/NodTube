import { Box, Stack, Container, Typography, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import VideoCard from '../video-card/VideoCard'; // Adjust the path as needed



const SuggestionVideos = () => {
    const [suggestionVideos, setSuggestionVideos] = useState([])
    useEffect(() => {
        const fetchSuggestionVideos = async () => {
          try {
            const response = await fetch(`http://localhost:5000/api/search?q=All&type=video&maxResults=50`)
            const data = await response.json()
            setSuggestionVideos(data)
          } catch (error) {
            console.error("Error fetching suggestion videos:", error);
          }
        }
        fetchSuggestionVideos();
    } , [])
  return (
    <>
    <Stack>
      <Box p={2} sx={{ height: "95vh", overflowY: "auto" }}>
        <Container maxWidth={"90%"}>
          <Typography variant="h5" fontWeight={"bold"}>
            Suggestion Videos
          </Typography>
          {/* Here you can map through suggestionVideos and render them */}
          {suggestionVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </Container>
      </Box>
    </Stack>


    </>
  )
}

export default SuggestionVideos
