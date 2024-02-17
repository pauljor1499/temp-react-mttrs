import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TeacherAuthAPI } from "../../../api/teacher/TeacherAuthAPI";
import { StudentAuthAPI } from "../../../api/student/StudentAuthAPI";

export const _teacherLogin = createAsyncThunk("auth/teacherLogin", async (userCredentials) => {
    const request = await TeacherAuthAPI.prototype.teacherLogin(userCredentials);
    return request;
});

export const _teacherRegister = createAsyncThunk("auth/teacherRegister", async (userCredentials) => {
    const request = await TeacherAuthAPI.prototype.teacherRegister(userCredentials);
    return request;
});

export const _studentLogin = createAsyncThunk("auth/studentLogin", async (userCredentials) => {
    const request = await StudentAuthAPI.prototype.studentLogin(userCredentials);
    return request;
});

export const _studentRegister = createAsyncThunk("auth/studentRegister", async (userCredentials) => {
    const request = await StudentAuthAPI.prototype.studentRegister(userCredentials);
    return request;
});

const UserAuth = createSlice({
    name: "UserAuth",
    initialState: {
        userData: null,
        hasErrors: null,
        isLoading: false,
    },
    reducers: {
        _userLogout: (state) => {
            state.userData = null;
            localStorage.removeItem("token");
        },
        _removeErrors: (state) => {
            state.hasErrors = null;
        },
    },
    extraReducers: (builder) => {
        builder
            //teacher
            //teacher login
            .addCase(_teacherLogin.pending, (state) => {
                state.isLoading = true;
                state.hasErrors = null;
            })
            .addCase(_teacherLogin.fulfilled, (state, action) => {
                state.isLoading = false;
                localStorage.setItem("token", JSON.stringify(action.payload.data.access_token));
                state.hasErrors = null;
            })
            .addCase(_teacherLogin.rejected, (state, action) => {
                state.isLoading = false;
                if (
                    action.error.message === "Request failed with status code 422" ||
                    action.error.message === "Request failed with status code 401"
                ) {
                    state.hasErrors = "Invalid email or password.";
                } else {
                    state.hasErrors = action.error.message;
                }
            })

            //teacher register
            .addCase(_teacherRegister.pending, (state) => {
                state.isLoading = true;
                state.hasErrors = null;
            })
            .addCase(_teacherRegister.fulfilled, (state) => {
                state.isLoading = false;
                state.hasErrors = null;
            })
            .addCase(_teacherRegister.rejected, (state, action) => {
                state.isLoading = false;
                console.log(action);
                state.hasErrors = action.error.message;

                // if (
                //     action.error.message === "Request failed with status code 422" ||
                //     action.error.message === "Request failed with status code 401"
                // ) {
                //     state.hasErrors = "Invalid credentials.";
                // } else if (action.error.message === "Request failed with status code 400") {
                //     state.hasErrors = "Email is already registered.";
                // } else {
                //     state.hasErrors = action.error.message;
                // }
            })

            //student
            //student login
            .addCase(_studentLogin.pending, (state) => {
                state.isLoading = true;
                state.hasErrors = null;
            })
            .addCase(_studentLogin.fulfilled, (state, action) => {
                state.isLoading = false;
                localStorage.setItem("token", JSON.stringify(action.payload.data.access_token));
                state.hasErrors = null;
            })
            .addCase(_studentLogin.rejected, (state, action) => {
                state.isLoading = false;
                if (
                    action.error.message === "Request failed with status code 422" ||
                    action.error.message === "Request failed with status code 401"
                ) {
                    state.hasErrors = "Invalid email or password.";
                } else {
                    state.hasErrors = action.error.message;
                }
            })

            //student register
            .addCase(_studentRegister.pending, (state) => {
                state.isLoading = true;
                state.hasErrors = null;
            })
            .addCase(_studentRegister.fulfilled, (state) => {
                state.isLoading = false;
                state.hasErrors = null;
            })
            .addCase(_studentRegister.rejected, (state, action) => {
                state.isLoading = false;
                state.hasErrors = action.error.message;

                // if (
                //     action.error.message === "Request failed with status code 422" ||
                //     action.error.message === "Request failed with status code 401"
                // ) {
                //     state.hasErrors = "Invalid credentials.";
                // } else if (action.error.message === "Request failed with status code 400") {
                //     state.hasErrors = "Email is already registered.";
                // } else {
                //     state.hasErrors = action.error.message;
                // }
            });
    },
});

export const { _userLogout, _removeErrors } = UserAuth.actions;
export default UserAuth;
