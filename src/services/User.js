import axios from "axios";
const baseUrl = "https://localhost:44371/api";

const getUserByEmail = async (data) => {
  return await axios
    .post(
      `${baseUrl}/User/GetUserByEmail`,
      { email: data.email },
      {
        headers: { Authorization: `Bearer ${data.token}` },
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        return error.response.data;
      }
    });
};

const createUser = async (data) => {
  return await axios
    .post(`${baseUrl}/Authentication/CreateUser`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        return error.response.data;
      }
    });
};

const UpdateUser = async (dataUser, dataConfig) => {
  return await axios
    .put(`${baseUrl}/User`, dataUser, {
      headers: { Authorization: `Bearer ${dataConfig.token}` },
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

export default { getUserByEmail, createUser, UpdateUser };
