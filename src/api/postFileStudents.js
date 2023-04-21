import axios from "axios";

async function postFileStudents(file){
    const {data} = await axios.post('http://localhost:4444/motivation/students/txt',{
        students:file
    });
    console.log(file)
    console.log(data);
}

export default postFileStudents;
