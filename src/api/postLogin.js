import axios from "axios";
async function postLogin({username, password}){
    const response = await axios.post('http://localhost:4444/motivation/login', {
        login: username,
        password
    });

    return response.data;
}

export default postLogin;