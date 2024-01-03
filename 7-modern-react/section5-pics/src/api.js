import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 6oByi0eijf-sMnSmiDamAkjd3pY98WA8-T2G8u0tZ88",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
