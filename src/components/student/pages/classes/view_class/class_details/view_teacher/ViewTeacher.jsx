import "./ViewTeacher.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BreadcrumbsComponent from "../../../../../../commons/components/breadcrumbs/Breadcrumbs";
import { Avatar, Divider } from "@mui/material";
import { blue } from "@mui/material/colors";

const ViewTeacher = () => {
    return (
        <>
            <Box>
                <AppBar position="relative" color="primary">
                    <Toolbar>
                        <Typography variant="h6">My Teacher</Typography>
                    </Toolbar>
                </AppBar>
                <BreadcrumbsComponent />
                <div className="student-view-teacher">
                    <div className="settings-item">
                        <div className="item-content">
                            <div className="content-title"></div>
                            <div className="content-text">
                                <Avatar sx={{ width: 85, height: 85, bgcolor: blue[600] }}>
                                    {"Michael".charAt(0) + "Johnson".charAt(0)}
                                </Avatar>
                            </div>
                        </div>
                        <div className="item-actions"></div>
                    </div>
                    <Divider />
                    <div className="settings-item">
                        <div className="item-content">
                            <Typography variant="subtitle2">Office Hours:</Typography>
                            <Typography variant="subtitle1">
                                Location: School Area 1
                                <br />
                                Conference Time: 12:00 NN - 1:00 PM
                            </Typography>
                        </div>
                        <div className="item-actions"></div>
                    </div>
                    <Divider />
                    <div className="settings-item">
                        <div className="item-content">
                            <Typography variant="subtitle2">Name:</Typography>
                            <Typography variant="subtitle1">Michael Howard Johnson</Typography>
                        </div>
                        <div className="item-actions"></div>
                    </div>
                    <Divider />
                    <div className="settings-item">
                        <div className="item-content">
                            <Typography variant="subtitle2">Role:</Typography>
                            <Typography variant="subtitle1">Teacher</Typography>
                        </div>
                        <div className="item-actions"></div>
                    </div>
                    <Divider />
                    <div className="settings-item">
                        <div className="item-content">
                            <Typography variant="subtitle2">School:</Typography>
                            <Typography variant="subtitle1">Harvard University</Typography>
                        </div>
                        <div className="item-actions"></div>
                    </div>
                    <Divider />
                    <div className="settings-item">
                        <div className="item-content">
                            <Typography variant="subtitle2">Email:</Typography>
                            <Typography variant="subtitle1">teacher@gmail.com</Typography>
                        </div>
                        <div className="item-actions"></div>
                    </div>
                    <Divider />
                    <div className="settings-item">
                        <div className="item-content">
                            <Typography variant="subtitle2">Phone number:</Typography>
                            <Typography variant="subtitle1">No details</Typography>
                        </div>
                        <div className="item-actions"></div>
                    </div>
                </div>
            </Box>
        </>
    );
};

export default ViewTeacher;
