import axios from "axios";
async function postTask({task, subTask, deadline}){
    const response = await axios.post('http://localhost:4444/motivation/set-task', {
        task,
        sub_task: subTask,
        deadline,
    });

    return response.data;
}

export default postTask;