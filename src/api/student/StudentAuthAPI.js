import axios from "axios";
import { BaseURL } from "../BASE_URL2";

const STUDENT_ENDPOINT = BaseURL.prototype.usersEndpoint();
axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.getItem("token"));

export class StudentAuthAPI {
    async studentLogin(payload) {
        const request = await axios.post(STUDENT_ENDPOINT + "/login", payload);
        return request;
    }

    async studentRegister(payload) {
        const request = await axios.post(STUDENT_ENDPOINT + "/register", payload);
        return request;
    }
}
