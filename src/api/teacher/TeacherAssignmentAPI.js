import axios from "axios";
import { TeacherURL } from "../BASE_URL";

const ASSIGNMENT_ENDPOINT = TeacherURL.prototype.assignmentEndPoint();
axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.getItem("token"));

export class TeacherAssignmentAPI {
    async fetchAllAssignments(classUUID) {
        const request = await axios.get(ASSIGNMENT_ENDPOINT + "/class/" + classUUID + "/all_assignments");
        return request;
    }

    async createAssignment(payload) {
        const request = await axios.post(ASSIGNMENT_ENDPOINT + "/create", payload);
        return request;
    }

    // async getSpecificAssignment(assignmentUUID) {
    //     const request = await axios.get(ASSIGNMENT_ENDPOINT + "/specific/" + assignmentUUID);
    //     return request;
    // }

    // async deleteAssignment(assignmentUUID) {
    //     const request = await axios.delete(ASSIGNMENT_ENDPOINT + "/delete/" + assignmentUUID);
    //     return request;
    // }

    // async updateAssignment(assignmentUUID) {
    //     const request = await axios.put(ASSIGNMENT_ENDPOINT + "/update/" + assignmentUUID);
    //     return request;
    // }
}
