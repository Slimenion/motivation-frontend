import axios from "axios";
async function getMotivationProfileById(login){
    const response = await axios.post('http://localhost:4444/motivation/get-motivation-profile-by-login', {
        login,
    });

    return response.data[0].id_motivation_profile;
}

export default getMotivationProfileById;