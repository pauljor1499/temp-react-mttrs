import axios from "axios";
import { StudentURL } from "../BASE_URL";

const CLASS_ENDPOINT = StudentURL.prototype.classEndPoint();
axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.getItem("token"));

export class StudentClassAPI {
    async enrollClassByUUID(classUUID) {
        const response = await axios.patch(CLASS_ENDPOINT + "/join/" + classUUID);
        return response;
    }

    async fetchAllClasses() {
        axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.getItem("token"));
        const response = await axios.get(CLASS_ENDPOINT + "/student/fetch/all");
        return response;
    }

    async viewClassByUUID(classUUID) {
        const response = await axios.get(CLASS_ENDPOINT + "/student/fetch/" + classUUID);
        return response;
    }

    async searchClassByUUID(classUUID) {
        const response = await axios.get(CLASS_ENDPOINT + "/student/search/" + classUUID);
        return response;
    }
}
