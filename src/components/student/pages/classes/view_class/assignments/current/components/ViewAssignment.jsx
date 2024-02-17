/* eslint-disable react/no-unescaped-entities */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BreadcrumbsComponent from "../../../../../../../commons/components/breadcrumbs/Breadcrumbs";
import QuestionsList from "./QuestionsList";
import AssignmentDetails from "./AssignmentDetails";
import Calculator from "./Calculator";
import { Button, Divider } from "@mui/material";
import { useState } from "react";

const ViewAssignment = () => {
    const [showQuestions, setShowQuestions] = useState(false);

    const questionContent = () => {
        if (showQuestions) {
            return <QuestionsList setShowQuestions={setShowQuestions} />;
        } else {
            return (
                <Box
                    sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        src="https://img.freepik.com/free-vector/hand-drawn-business-planning_52683-76248.jpg?w=740&t=st=1707657259~exp=1707657859~hmac=3a1c479bd9b2ae64f5cc0b803be749718df7458481cb125cc56c949ec54bb769"
                        alt=""
                        style={{ width: "15rem" }}
                    />
                    <Typography variant="h6" sx={{ width: "50%", textAlign: "center" }}>
                        If you're now ready to answer, just click the button and start answering.
                    </Typography>
                    <Button
                        variant="outlined"
                        color="primary"
                        size="large"
                        onClick={() => {
                            setShowQuestions(!showQuestions);
                        }}
                    >
                        Start Now
                    </Button>
                </Box>
            );
        }
    };

    return (
        <>
            <Box>
                <AppBar position="relative" color="primary">
                    <Toolbar>{/* <Typography variant="h6">Assignment</Typography> */}</Toolbar>
                </AppBar>
                <BreadcrumbsComponent />
                <Box sx={{ p: "0 2%", display: "flex" }}>
                    <Box sx={{ flex: "0.7", mb: 10 }}>
                        <AssignmentDetails />
                        <Divider sx={{ mb: 5 }}>
                            <Button variant="outlined" size="small">
                                Hide Details
                            </Button>
                        </Divider>
                        <Box sx={{ mb: 5 }}>
                            <Calculator />
                        </Box>
                        <Divider>
                            <Button variant="outlined" size="small">
                                Hide Calculator
                            </Button>
                        </Divider>
                    </Box>
                    <Box sx={{ p: "0 2%" }}>
                        <Divider orientation="vertical" />
                    </Box>
                    <Box sx={{ flex: "2", mb: 10 }}>{questionContent()}</Box>
                </Box>
            </Box>
        </>
    );
};

export default ViewAssignment;
