import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BreadcrumbsComponent from "../../../../../../../../commons/components/breadcrumbs/Breadcrumbs";
import QuestionsList from "./QuestionsList";
import AssignmentDetails from "./AssignmentDetails";
import AssignmentSettings from "./AssignmentSettings";
import { Divider } from "@mui/material";

const ViewAssignment = () => {
    return (
        <React.Fragment>
            <Box>
                <AppBar position="relative" color="primary">
                    <Toolbar>
                        <Typography variant="h6">View Assignment</Typography>
                    </Toolbar>
                </AppBar>
                <BreadcrumbsComponent />
                <Box sx={{ p: "2%", display: "flex" }}>
                    <Box sx={{ flex: "1" }}>
                        <AssignmentDetails />
                    </Box>
                    <Box sx={{ flex: "2" }}>
                        <QuestionsList />
                    </Box>
                    <Divider orientation="vertical" />
                    <Box sx={{ flex: ".5" }}>
                        <AssignmentSettings />
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    );
};

export default ViewAssignment;
