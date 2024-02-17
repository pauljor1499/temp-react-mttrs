import axios from "axios";
import { BaseURL } from "../BASE_URL2";

const STUDENT_ENDPOINT = BaseURL.prototype.usersEndpoint();
axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.getItem("token"));

export class StudentDataAPI {
    async studentGetData() {
        axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.getItem("token"));
        const request = await axios.get(STUDENT_ENDPOINT + "/user_data");
        return request;
    }

    // async update_user_details(updated_details) {
    //     const user = await axios.put(url + "/update/user_details", updated_details);
    //     return user;
    // }

    // async change_password(updated_data) {
    //     const user = await axios.patch(url + "/update/user_password", updated_data);
    //     return user;
    // }

    // async update_profile_photo(photo) {
    //     const user = await axios.patch(url + "/update/user_profile_picture", photo);
    //     return user;
    // }

    // async remove_profile_photo() {
    //     const user = await axios.delete(url + "/delete/user_profile_picture");
    //     return user;
    // }

    // async add_education(data) {
    //     const user = await axios.post(url + "/add/user_education", data);
    //     return user;
    // }

    // async update_education(new_data) {
    //     const user = await axios.patch(url + "/update/user_education", new_data);
    //     return user;
    // }

    // async delete_education(uuid) {
    //     const user = await axios.delete(url + "/delete/user_education/" + uuid);
    //     return user;
    // }
}
