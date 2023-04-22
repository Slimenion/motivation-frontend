import axios from "axios";
async function fetchingTasks (login){
    const response = await axios.post('http://localhost:4444/motivation/get-tasks', {
        login
    });
    console.log(response);
    return response.data.map((el) => {
        return {
            id: Math.random(),
            task: el.task,
            subTask: el.sub_task,
            deadline: el.deadline,
            topic_title: el.topic_title,
        }
    });
}

export default fetchingTasks;