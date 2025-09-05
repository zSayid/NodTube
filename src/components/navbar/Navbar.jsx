import React, { useEffect, useState } from "react";
import { Stack, Box } from "@mui/material";
import { SearchBar } from "../";
import logo from "./put play button inst.png";
import { colors } from "../../constantants/colors";
import { Link } from "react-router-dom";
import CreateButton from "../button-components/CreateButton";
import NotificationsButton from "../button-components/NotificationButton";
import UserAvatar from "../user-avatar/UserAvatar";
import NavbarMenu from "../navbar-menu/NavbarMenu";

const Navbar = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://nodtube-1.onrender.com/api/search?q=All&type=video&maxResults=50`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        const mappedData = data.map((item) => ({
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
        }));
        setVideos(mappedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      p={1}
      justifyContent={"space-between"}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: colors.primary,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <NavbarMenu videos={videos} />
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            height={90}
            style={{ paddingLeft: "1px", marginTop: "5px" }}
          />
        </Link>
      </Box>

      <SearchBar />

      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <CreateButton />
        <Box>
          <NotificationsButton />
        </Box>
        <Box>
          <UserAvatar />
        </Box>
      </Box>
    </Stack>
  );
};

export default Navbar;
