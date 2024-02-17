import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TeacherAssignmentAPI } from "../../../api/teacher/TeacherAssignmentAPI.js";

export const _fetchAllAssignments = createAsyncThunk("fetch/allAssignments", async () => {
    const response = await TeacherAssignmentAPI.prototype.fetchAllAssignments();
    return response;
});

const TeacherAssignments = createSlice({
    name: "TeacherAssignments",
    initialState: {
        assignmentData: null,
        hasErrors: null,
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetch all assignments
            .addCase(_fetchAllAssignments.pending, (state) => {
                state.assignmentData = null;
                state.hasErrors = null;
                state.isLoading = true;
            })
            .addCase(_fetchAllAssignments.fulfilled, (state, action) => {
                state.assignmentData = JSON.parse(
                    JSON.stringify(
                        action.payload.data.data.sort((a, b) => {
                            return a.title.localeCompare(b.title);
                        })
                    )
                );
                state.hasErrors = null;
                state.isLoading = false;
            })
            .addCase(_fetchAllAssignments.rejected, (state, action) => {
                state.assignmentData = null;
                state.hasErrors = action.error.message;
                state.isLoading = false;
            });
    },
});

export default TeacherAssignments;
