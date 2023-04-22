import axios from "axios";
async function getTopics(){
    const response = await axios.get('http://localhost:4444/motivation/get-topics');
    return response.data.topics;
}

export default getTopics;