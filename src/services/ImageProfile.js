import axios from "axios";
const baseUrl = "https://localhost:44371/api";

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
