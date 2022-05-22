import axios from "axios";
const baseUrl = "https://localhost:44371/api";

const getToken = async (data) => {
  return await axios
    .post(`${baseUrl}/Authentication`, data)
    .then((response) => {
      console.log(response.data)
      return response.data;      
    })
    .catch((error) => {
      if (error.response) {
        return error.response.data;
      }
    });
};

export default { getToken };
