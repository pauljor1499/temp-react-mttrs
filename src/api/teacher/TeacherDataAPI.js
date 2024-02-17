import axios from "axios";
import { BaseURL } from "../BASE_URL2";

const TEACHER_ENDPOINT = BaseURL.prototype.usersEndpoint();
axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.getItem("token"));

export class TeacherDataAPI {
    async teacherGetData() {
        axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.getItem("token"));
        const user = await axios.get(TEACHER_ENDPOINT + "/user_data");
        return user;
    }

    // async updateTeacherData(payload) {
    //     axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.getItem("token"));
    //     const request = await axios.get(TEACHER_URL + "/update/user_details", payload);
    //     return request;
    // }
}
