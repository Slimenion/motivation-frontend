import axios from "axios";

async function postOneStudent({
                                         fio,
                                         gender,
                                         faculty,
                                         subGroup,
                                         group,
                                         overall,
                                         overallDorm,
                                         overallTeaching,
                                         dreamDorm,
                                         realDorm,
                                         dreamTeaching,
                                         realTeaching,
                                         ep
                                     }) {
    const response = await axios.post('http://localhost:4444/motivation/students', {
        fullname: fio,
        gender,
        faculty,
        group,
        subGroup,
        emotionGroup: ep,
        motivationProfile: {
            overall,
            overallDorm,
            overallTeaching,
            dreamDorm,
            realDorm,
            dreamTeaching,
            realTeaching,
        }
    });

    console.log(response.data)
}

export default postOneStudent;
