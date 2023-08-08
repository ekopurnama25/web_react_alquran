import axios from "axios";

export default axios.create({
  baseURL: "https://open-api.my.id/api/quran",
  headers: {
    "Content-type": "application/json",
  },
});
