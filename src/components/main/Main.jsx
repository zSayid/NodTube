// import { useEffect, useState } from "react";
// import { Stack, Box, Container, Typography } from "@mui/material";
// import { colors } from "../../constantants/colors";
// import { Category, Videos } from "../";
// import { ApiService } from "../../service/api.service";

// const Main = () => {
//   const categories = ["All", "Music", "Gaming", "News", "Sports", "Movies"];
//   const [selectedCategory, setSelectedCategory] = useState(categories[0]);
//   const [videos, setVideos] = useState([]);
//   const handleCategory = (category) => {
//     setSelectedCategory(category);
//   };
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await ApiService.fetching(
//           `search?part=snippet&q=${selectedCategory}&type=video&maxResults=50`
//         );
//         setVideos(response.items);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, [selectedCategory]);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const response = await ApiService.fetching(
//   //         `search?part=snippet&q=${selectedCategory}&type=video&maxResults=50`
//   //       );
//   //       console.log(response);
//   //       // setVideos(response.items);
//   //     } catch (error) {
//   //       console.error("Error fetching data:", error);
//   //     }
//   //   };
//   //   fetchData();
//   // })
//   return (
//     <Stack>
//       <Category
//         handleCategory={handleCategory}
//         selectedCategory={selectedCategory}
//       />
//       <Box
//         p={2}
//         sx={{
//           height: "95vh",
//           overflowY: "auto",
//         }}
//       >
//         <Container maxWidth={"90%"}>
//           <Typography variant="h5" fontWeight={"bold"}>
//             {selectedCategory}{" "}
//             <span style={{ color: colors.secondary }}>Videos</span>{" "}
//           </Typography>
//           <Videos videos={videos} />
//         </Container>
//       </Box>
//     </Stack>
//   );
// };

// export default Main;

import { useEffect, useState } from "react";
import { Stack, Box, Container } from "@mui/material";
import { Category, Videos } from "../";
// import { ApiService } from "../../service/api.service";
import { useCache } from "../../context/CacheContext";

const Main = () => {
  const categories = ["All", "Music", "Gaming", "News", "Sports", "Movies"];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [videos, setVideos] = useState([]);
  const { getCache, setCacheValue } = useCache();

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const fetchData = async () => {
      const cacheKey = `videos_${selectedCategory}`;
      const cached = getCache(cacheKey);

      if (cached && Date.now() - cached.timestamp < 5 * 60 * 1000) {
        setVideos(cached.value);
        return;
      }

      try {
        const response = await fetch(
          `https://nodtube-1.onrender.com/api/search?q=${selectedCategory}&type=video&maxResults=50`
        );
        // const response = await fetch(
        //   process.env.REACT_APP_API_URL +
        //     `search?q=${selectedCategory}&type=video&maxResults=50`
        // );


        console.log(response);
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
          likeCount: Math.floor(Math.random() * 1000000),
          channelTitle: item.author.name,
          author: item.author.name,
        }));
        setVideos(mappedData);
        setCacheValue(cacheKey, mappedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedCategory, getCache, setCacheValue]);

  return (
    <Stack>
      <Category
        handleCategory={handleCategory}
        selectedCategory={selectedCategory}
      />
      <Box
        p={2}
        sx={{
          height: "95vh",
          overflowY: "auto",
        }}
      >
        <Container maxWidth={"90%"}>
          {/* <Typography variant="h5" fontWeight={"bold"}>
            {selectedCategory}{" "}
            <span style={{ color: colors.secondary }}>Videos</span>
          </Typography> */}
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
