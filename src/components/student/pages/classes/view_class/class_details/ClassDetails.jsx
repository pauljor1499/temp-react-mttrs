import "./ClassDetails.scss";
import classImage from "../../../../../../assets/sample1.jpg";
import { Box, Button, Divider, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const ClassDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const clickViewTeacher = () => {
        navigate(`${location.pathname}/teacher/1`);
    };

    return (
        <Box className="student-class-details-content">
            <Box className="class-content">
                <Box className="class-header">
                    <Box className="class-image">
                        <img src={classImage} alt="classImage" />
                    </Box>
                    <Box className="class-text">
                        <Box className="text-item">
                            <Typography variant="subtitle2">Title</Typography>
                            <Typography variant="subtitle1">Class Title</Typography>
                        </Box>
                        <Divider orientation="horizontal" />
                        <Box className="text-item">
                            <Typography variant="subtitle2">Section</Typography>
                            <Typography variant="subtitle1">Section 1</Typography>
                        </Box>
                        <Divider orientation="horizontal" />
                        <Box className="text-item">
                            <Typography variant="subtitle2">Code</Typography>
                            <Typography variant="subtitle1">MMTRS-XYZ</Typography>
                        </Box>
                        <Divider orientation="horizontal" />
                        <Box className="text-item">
                            <Typography variant="subtitle2">Description</Typography>
                            <Typography variant="subtitle1" className="class-description">
                                Class Description
                            </Typography>
                        </Box>
                        <Divider orientation="horizontal" />
                        <Box className="text-item">
                            <Typography variant="subtitle2">Date created</Typography>
                            <Typography variant="subtitle1">January 03, 2024</Typography>
                        </Box>
                        <Divider orientation="horizontal" />
                        <Box className="text-item">
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Box>
                                    <Typography variant="subtitle2">Teacher</Typography>
                                    <Typography variant="subtitle1">Teacher Name</Typography>
                                </Box>
                                <Button variant="outlined" color="primary" onClick={clickViewTeacher}>
                                    View Teacher
                                </Button>
                            </Box>
                        </Box>
                        <Divider orientation="horizontal" />
                        <Box className="class-schedules">
                            <Typography variant="subtitle2">Schedules</Typography>
                            Sched 1
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className="class-widgets">
                <Box className="class-settings"></Box>
            </Box>
        </Box>
    );
};

export default ClassDetails;
