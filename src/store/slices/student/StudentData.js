import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StudentDataAPI } from "../../../api/student/StudentDataAPI";

export const _studentGetData = createAsyncThunk("auth/studentGetData", async () => {
    const request = await StudentDataAPI.prototype.studentGetData();
    return request;
});

const StudentData = createSlice({
    name: "StudentData",
    initialState: {
        studentData: null,
        hasErrors: null,
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            //student get account data
            .addCase(_studentGetData.pending, (state) => {
                state.studentData = null;
                state.isLoading = true;
                state.hasErrors = null;
            })
            .addCase(_studentGetData.fulfilled, (state, action) => {
                state.studentData = JSON.parse(JSON.stringify(action.payload.data.data));
                state.isLoading = false;
                state.hasErrors = null;
            })
            .addCase(_studentGetData.rejected, (state, action) => {
                state.studentData = null;
                state.isLoading = false;
                state.hasErrors = action.error.message;
            });
    },
});

export default StudentData;
