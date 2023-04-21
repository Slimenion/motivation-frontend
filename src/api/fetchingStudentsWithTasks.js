import axios from "axios";
async function fetchingStudentsWithTasks () {
    const response = await axios.get('http://localhost:4444/motivation/get-students-with-tasks');
    return response.data;
}

export default fetchingStudentsWithTasks;