import axios from "axios";

export const getPlacesData = async (type,coordts) => {
  try {
    
const coords =coordts;
    console.log(coords);
    console.log("Hello ");
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: coords.lat,
          tr_latitude: coords.lat + 1,
          bl_longitude: coords.lng - 1,
          tr_longitude: coords.lng,
        },
        headers: {
          "X-RapidAPI-Key":
            "d14d1f6db9msha0a0902a5d38e33p12a810jsn0dc846cf8c78",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    

    console.log("before return");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

