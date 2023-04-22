import axios from "axios";
async function getRole(token){
    const response = await axios.post('http://localhost:4444/motivation/user-role', {
        token,
    });

    return response.data;
}

export default getRole;