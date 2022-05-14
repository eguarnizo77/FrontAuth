import axios from 'axios';
const baseUrl = "https://localhost:44371/api";

const getToken = async (data) => {    
    return await axios.post(`${baseUrl}/Authentication`, data)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log(error);
    });      
}

export default { getToken }