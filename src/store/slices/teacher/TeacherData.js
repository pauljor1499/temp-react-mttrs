import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TeacherDataAPI } from "../../../api/teacher/TeacherDataAPI";

export const _teacherGetData = createAsyncThunk("auth/teacherGetData", async () => {
    const request = await TeacherDataAPI.prototype.teacherGetData();
    return request;
});

// export const _updateTeacherData = createAsyncThunk("update/teacherData", async () => {
//     const response = await teacherDataAPI.prototype.updateTeacherData();
//     return response;
// });

const TeacherData = createSlice({
    name: "TeacherData",
    initialState: {
        teacherData: null,
        hasErrors: null,
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            //teacher get account data
            .addCase(_teacherGetData.pending, (state) => {
                state.teacherData = null;
                state.isLoading = true;
                state.hasErrors = null;
            })
            .addCase(_teacherGetData.fulfilled, (state, action) => {
                state.teacherData = JSON.parse(JSON.stringify(action.payload.data.data));
                state.isLoading = false;
                state.hasErrors = null;
            })
            .addCase(_teacherGetData.rejected, (state, action) => {
                state.teacherData = null;
                state.isLoading = false;
                state.hasErrors = action.error.message;
            });

        // .addCase(_teacherGetData.pending, (state) => {
        //     state.teacherData = null;
        //     state.hasErrors = null;
        //     state.isLoading = true;
        // })
        // .addCase(_teacherGetData.fulfilled, (state, action) => {
        //     state.teacherData = JSON.parse(
        //         JSON.stringify(
        //             action.payload.data.data.sort((a, b) => {
        //                 return a.title.localeCompare(b.title);
        //             })
        //         )
        //     );
        //     state.hasErrors = null;
        //     state.isLoading = false;
        // })
        // .addCase(_teacherGetData.rejected, (state, action) => {
        //     state.teacherData = null;
        //     state.hasErrors = action.error.message;
        //     state.isLoading = false;
        // });
    },
});

export default TeacherData;
