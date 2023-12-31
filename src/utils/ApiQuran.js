import axios from "./useAxios";

export const getSurah = async () => {
  try {
    const req = await axios.get("/surah");
    if (req) {
      const { data } = req;
      return data;
    }
    //return data;
  } catch (err) {
    console.log(err);
  }
};

export const SurahAlQuran = async (id) => {
  try {
    const req = await axios.get(`/surah/${id}`);
    if (req) {
      const { data } = req;
      return data;
    }
    //return data;
  } catch (err) {
    console.log(err);
  }
};
