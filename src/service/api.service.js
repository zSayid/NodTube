// import axios from "axios";

// import {google} from "googleapis"


// const BASE_URI = "https://youtube-v31.p.rapidapi.com";

// const options = {
// 	method: 'GET',
// 	hostname: 'youtube-v31.p.rapidapi.com',
// 	port: null,
// 	path: '/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50',
// 	headers: {
// 		'x-rapidapi-key': 'AIzaSyCceWqSjsUV6xylu12MytElZ6yxh8wZlhA',
// 		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
// 	}
// };

// export const ApiService = {
//   fetching: async (endpoint) => {
//     try {
//       const response = await axios.get(`${BASE_URI}/${endpoint}`, {
//         headers: {
//           'x-rapidapi-key': options.headers['x-rapidapi-key'],
//           'x-rapidapi-host': options.headers['x-rapidapi-host']
//         }
//       });
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching data from API:", error);
//       throw error;
//     }
//   }
// }


// const apiKey = 'AIzaSyBM7hhB84HkmDtOrczBJDQYUEFChH2Qp0s'

// const youtube = google.youtube({
//   version: 'v3',
//   auth: apiKey
// })



// service/api.service.js
// import { google } from "googleapis";

// const API_KEY = "AIzaSyBM7hhB84HkmDtOrczBJDQYUEFChH2Qp0s"; // Google Cloud’dan olgan kalit

// // YouTube client yaratamiz
// const youtube = google.youtube({
//   version: "v3",
//   auth: API_KEY,
// });

// export const ApiService = {
//   fetching: async (query) => {
//     try {
//       // `query` deganda masalan: { q: "Music", part: "snippet", maxResults: 50 }
//       const res = await youtube.search.list(query);
//       return res.data;
//     } catch (error) {
//       console.error("YouTube API error:", error);
//       throw error;
//     }
//   },
// };

// import yts from "yt-search";

// export const ApiService = {
//   fetching: async (query) => {
//     try {
//       // YT-Search orqali qidirish
//       const res = await yts(query);

//       // Faqat videolarni qaytaramiz
//       return res.videos.slice(0, 5); // top 5 ta video
//     } catch (error) {
//       console.error("YouTube API error:", error);
//       throw error;
//     }
//   },
// };
