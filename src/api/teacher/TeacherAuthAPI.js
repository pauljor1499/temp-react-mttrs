import axios from "axios";
import { BaseURL } from "../BASE_URL2";

const TEACHER_ENDPOINT = BaseURL.prototype.usersEndpoint();
axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.getItem("token"));

export class TeacherAuthAPI {
    async teacherLogin(payload) {
        const request = await axios.post(TEACHER_ENDPOINT + "/login", payload);
        return request;
    }

    async teacherRegister(payload) {
        const request = await axios.post(TEACHER_ENDPOINT + "/register", payload);
        return request;
    }
}
