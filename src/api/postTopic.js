import axios from "axios";
async function postTopic({topic_title}){
    const response = await axios.post('http://localhost:4444/motivation/set-topic', {
        topic_title
    });

    return response.data;
}

export default postTopic;