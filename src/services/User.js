import axios from "axios";
const baseUrl = "https://localhost:44371/api";

const create = async (data) => {
    return await axios.post(`${baseUrl}/Authentication/CreateUser`, data)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {        
        if (error.response) {
            return error.response.data;
        }
    });     
};

export default { create };
