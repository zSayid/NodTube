import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { ApiService } from "../../service/api.service";
import { Box, Container, Typography } from "@mui/material";
import { colors } from "../../constantants/colors";
import Videos from "../videos/Videos";

const Search = () => {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://nodtube-1.onrender.com/api/search?q=${id}&type=video&maxResults=50`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <Box>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ mb: 2 }}>
          Search Results for{" "}
          <span style={{ color: colors.secondary }}>{id}</span>
        </Typography>
        <Videos videos={videos} />
      </Container>
    </Box>
  );
};

export default Search;
