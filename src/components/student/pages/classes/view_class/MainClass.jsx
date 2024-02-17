import React from "react";

//components
import BreadcrumbsComponent from "../../../../commons/components/breadcrumbs/Breadcrumbs";
import TabsComponent from "../../../../commons/components/tabs/TabsComponent";
import AssignmentsTable from "./assignments/AssignmentsTable";
import ClassDetails from "./class_details/ClassDetails";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import getCurrentSemester from "../../../../../hooks/getCurrentSemester";

const tabContents = [
    {
        label: "Assignments",
        component: (
            <Box sx={{ mt: 5, mb: 10 }}>
                <AssignmentsTable />
            </Box>
        ),
    },
    {
        label: "Class Details",
        component: (
            <Box sx={{ mt: 5, mb: 10 }}>
                <ClassDetails />
            </Box>
        ),
    },
];

const Main = () => {
    const { classTitle } = useParams(); //params

    return (
        <React.Fragment>
            <AppBar position="relative" color="primary">
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    {/* <Typography variant="h6">2023-Fall: MATH-2BUXIjMh-MathWorld Test</Typography> */}
                    <Typography variant="h6">
                        {getCurrentSemester()}: {classTitle + ` (Section 1)`}
                    </Typography>
                    <Typography variant="h6">Class code: MMTRS-XYZ</Typography>
                </Toolbar>
            </AppBar>
            <BreadcrumbsComponent />
            <Box sx={{ padding: "0 2%", mt: 2 }}>
                <TabsComponent tabContents={tabContents} />
            </Box>
        </React.Fragment>
    );
};

export default Main;
