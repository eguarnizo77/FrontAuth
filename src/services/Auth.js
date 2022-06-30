import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_BASE_URL;

const getToken = async (data) => {
  return await axios
    .post(`${baseUrl}/Authentication`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        return error.response.data;
      }
    });
};

const getPasswordReset = async (data) => {
  return await axios
    .post(`${baseUrl}/Authentication/PasswordReset`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        return error.response.data;
      }
    });
};

const updatePasswordUser = async (data) => {
  return await axios
    .post(`${baseUrl}/Authentication/UpdatePassword`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        return error.response.data;
      }
    });
};

export default { getToken, getPasswordReset, updatePasswordUser };
