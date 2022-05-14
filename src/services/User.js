import axios from "axios";
const baseUrl = "https://localhost:44371/api";

const create = async (data) => {
  return await axios
    .post(`${baseUrl}/User`, data, {
      headers: { Authorization: `Bearer ${data.token}` },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default { create };
