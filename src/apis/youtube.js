import axios from "axios";

const KEY = "AIzaSyDxWQvXhJxNdq3SiabKzbEifRvH4oGfT_U";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY,
  },
});
