import axios from "axios";
import { TeacherURL } from "../BASE_URL";

const CLASS_ENDPOINT = TeacherURL.prototype.classEndPoint();
axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.getItem("token"));

export class TeacherClassAPI {
    async fetchAllClasses() {
        axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.getItem("token"));
        const request = await axios.get(CLASS_ENDPOINT + "/teacher/fetch/all");
        return request;
    }

    async createNewClass(payload) {
        const response = await axios.post(CLASS_ENDPOINT + "/create", payload);
        return response;
    }

    async deleteClass(classUUID) {
        const response = await axios.delete(CLASS_ENDPOINT + "/delete/" + classUUID);
        return response;
    }

    async updateClass(classUUID, classDetails) {
        const response = await axios.put(CLASS_ENDPOINT + "/update/" + classUUID, classDetails);
        return response;
    }

    async fetchSpecificClass(classUUID) {
        const response = await axios.get(CLASS_ENDPOINT + "/teacher/fetch/" + classUUID);
        return response;
    }

    // async accept_student(class_uuid, student_id) {
    //     const response = await axios.patch(url + "/accept/student/" + class_uuid + "/" + student_id);
    //     return response;
    // }

    // async reject_student(class_uuid, student_id) {
    //     const response = await axios.delete(url + "/remove/student/" + class_uuid + "/" + student_id);
    //     return response;
    // }
}
