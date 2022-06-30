import axios from "axios";
const baseUrl = import.meta.env.VITE_APP_BASE_URL;

const getAllImages = async (data) => {
  return await axios
    .get(`${baseUrl}/ImageProfile`, {
      headers: { Authorization: `Bearer ${data.token}` },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        return error.response.data;
      }
    });
};

const getImagesById = async (data, id) => {
    return await axios
      .get(`${baseUrl}/ImageProfile/${id}`, {
        headers: { Authorization: `Bearer ${data.token}` },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        if (error.response) {
          return error.response.data;
        }
      });
  };

export default { getAllImages, getImagesById };
