import axios from "axios";
async function getRole(token){
    const response = await axios.get('http://localhost:4444/auth/user-role', {
        headers: {
            Authorization: `Beaver ${token.token}`,
        }
    });

    return response.data;
}

export default getRole;