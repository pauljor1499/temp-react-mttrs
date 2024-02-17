import { configureStore } from "@reduxjs/toolkit";
import UserAuth from "./slices/auth/UserAuth";
import TeacherData from "./slices/teacher/TeacherData";
import TeacherClasses from "./slices/teacher/TeacherClasses";
import TeacherAssignments from "./slices/teacher/TeacherAssignments";
import TeacherSpecificClass from "./slices/teacher/TeacherSpecificClass";
import StudentData from "./slices/student/StudentData";

export const Store = configureStore({
    reducer: {
        UserAuth: UserAuth.reducer,
        TeacherData: TeacherData.reducer,
        TeacherClasses: TeacherClasses.reducer,
        TeacherSpecificClass: TeacherSpecificClass.reducer,
        TeacherAssignments: TeacherAssignments.reducer,
        StudentData: StudentData.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
