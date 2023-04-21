import axios from "axios";
async function fetchingStudents (){
    const response = await axios.get('http://localhost:4444/motivation/students');
    return response.data.map((el) => {
        return {
            id:el.id,
            login: el.login,
            fullname:el.fullname,
            gender:el.gender,
            faculty:el.faculty,
            groupFaculty:el.group_faculty,
            subGroupFaculty:el.sub_group_faculty,
            emotionalGroup:el.id_emotional_group,
            motivationGroup:el.id_motivation_group,
            motivationProfile:el.id_motivation_profile,
        }
    });
}

export default fetchingStudents;