import express from "express";
import cors from "cors";
import yts from "yt-search";


const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/search", async (req, res) => {
  const query = req.query.q;
  try {
    const results = await yts(query);
    res.json(results.videos.slice(0, 50));
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while searching for videos." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;

