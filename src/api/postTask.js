import axios from "axios";
async function postTask({task, subTask, deadline, id_topic_task}){
    const response = await axios.post('http://localhost:4444/motivation/set-task', {
        task,
        sub_task: subTask,
        deadline,
        id_topic_task,
    });

    return response.data;
}

export default postTask;