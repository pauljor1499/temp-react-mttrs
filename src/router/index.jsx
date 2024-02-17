import { createBrowserRouter, RouterProvider } from "react-router-dom";

// landing page
import LandingPage from "../components/landing_page/LandingPage.jsx";
import HomePage from "../components/landing_page/pages/home/HomePage.jsx";
import Login from "../components/landing_page/pages/login/Login.jsx";
import Register from "../components/landing_page/pages/register/Register.jsx";
import AboutPage from "../components/landing_page/pages/about_page/AboutPage.jsx";
import FeaturesPage from "../components/landing_page/pages/features_page/Features.jsx";
import ForgotPassword from "../components/landing_page/pages/forgot_password/Main.jsx";
import PageError from "../components/commons/components/page_error/PageError.jsx";

// teacher page
import TeacherMainPage from "../components/teacher/Main.jsx";
import TeacherDashboard from "../components/teacher/pages/dashboard/Dashboard.jsx";
// teacher classes page
import TeacherClassesMainPage from "../components/teacher/pages/classes/Main.jsx";
import TeacherClassesPage from "../components/teacher/pages/classes/class_list/ClassesPage.jsx";
import TeacherViewClassMainPage from "../components/teacher/pages/classes/view_class/Main.jsx";
// teacher assignments
import TeacherViewAssignment from "../components/teacher/pages/classes/view_class/assignments/current/components/view_assignment/ViewAssignment.jsx";
import TeacherNewAssignment from "../components/teacher/pages/classes/view_class/assignments/current/components/new_assignment/NewAssignment.jsx";
import TeacherEditAssignment from "../components/teacher/pages/classes/view_class/assignments/current/components/edit_assignment/EditAssignment.jsx";
import TeacherResourcesPage from "../components/teacher/pages/resources/Resources.jsx";
import TeacherSettingsPage from "../components/teacher/pages/settings/Settings.jsx";

// student page
import StudentMainPage from "../components/student/Main.jsx";
import StudentDashboardPage from "../components/student/pages/dashboard/Dashboard.jsx";
// student classes
import StudentClassesMainPage from "../components/student/pages/classes/Main.jsx";
import StudentClassesPage from "../components/student/pages/classes/class_list/Main.jsx";
import StudentViewClassMainPage from "../components/student/pages/classes/view_class/MainClass.jsx";
import StudentViewTeacherPage from "../components/student/pages/classes/view_class/class_details/view_teacher/ViewTeacher.jsx";
// student assignments
import StudentViewAssignment from "../components/student/pages/classes/view_class/assignments/current/components/ViewAssignment.jsx";
import StudentResourcesPage from "../components/student/pages/resources/Resources.jsx";
import StudentSettingsPage from "../components/student/pages/settings/Settings.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "features",
                element: <FeaturesPage />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "forgot",
                element: <ForgotPassword />,
            },
            {
                path: "*",
                element: <PageError />,
            },
        ],
    },
    {
        path: "teacher",
        element: <TeacherMainPage />,
        children: [
            {
                path: "",
                element: <TeacherDashboard />,
            },
            {
                path: "classes",
                element: <TeacherClassesMainPage />,
                children: [
                    {
                        path: "",
                        element: <TeacherClassesPage />,
                    },
                    {
                        path: ":classTitle",
                        element: <TeacherViewClassMainPage />,
                    },
                    {
                        path: ":classTitle/assignment/:assignmentTitle",
                        element: <TeacherViewAssignment />,
                    },
                    {
                        path: ":classTitle/assignment/new/:newAssignmentName",
                        element: <TeacherNewAssignment />,
                    },
                    {
                        path: ":classTitle/edit-assignment",
                        element: <TeacherEditAssignment />,
                    },
                ],
            },
            {
                path: "resources",
                element: <TeacherResourcesPage />,
            },
            {
                path: "settings",
                element: <TeacherSettingsPage />,
            },
            // {
            //     path: "*",
            //     element: <PageError />,
            // },
        ],
    },
    {
        path: "student",
        element: <StudentMainPage />,
        children: [
            {
                path: "",
                element: <StudentDashboardPage />,
            },
            {
                path: "classes",
                element: <StudentClassesMainPage />,
                children: [
                    {
                        path: "",
                        element: <StudentClassesPage />,
                    },
                    {
                        path: ":classTitle",
                        element: <StudentViewClassMainPage />,
                    },
                    {
                        path: ":classTitle/teacher/:teacherID",
                        element: <StudentViewTeacherPage />,
                    },
                    {
                        path: ":classTitle/assignment/:assignmentTitle",
                        element: <StudentViewAssignment />,
                    },
                ],
            },
            {
                path: "resources",
                element: <StudentResourcesPage />,
            },
            {
                path: "settings",
                element: <StudentSettingsPage />,
            },
            // {
            //     path: "*",
            //     element: <PageError />,
            // },
        ],
    },
]);

export const RouteComponents = () => {
    return <RouterProvider router={routes} />;
};
