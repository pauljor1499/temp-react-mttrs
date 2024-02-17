import { Avatar, Button, Divider, Typography } from "@mui/material";
import "./AccountSettings.scss";
import { useSelector } from "react-redux";
import { blue } from "@mui/material/colors";
import { useState } from "react";
import ChangePhoto from "./components/ChangePhoto";
import ChangePassword from "./components/ChangePassword";
import ChangeName from "./components/ChangeName";
import ChangePhoneNumber from "./components/ChangePhoneNumber";

const AccountSettings = () => {
    //teacher data
    const { teacherData } = useSelector((state) => state.TeacherData);

    const [photoDialog, setPhotoDialog] = useState(false);
    const [passwordDialog, setPasswordDialog] = useState(false);
    const [nameDialog, setNameDialog] = useState(false);
    const [phoneNumberDialog, setPhoneNumberDialog] = useState(false);

    return (
        <div>
            {teacherData !== null && (
                <div className="teacher-account-settings">
                    <ChangePhoto showDialog={photoDialog} setShowDialog={setPhotoDialog} />
                    <ChangePassword showDialog={passwordDialog} setShowDialog={setPasswordDialog} />
                    <ChangeName showDialog={nameDialog} setShowDialog={setNameDialog} />
                    <ChangePhoneNumber showDialog={phoneNumberDialog} setShowDialog={setPhoneNumberDialog} />
                    <div className="settings-item">
                        <div className="item-content">
                            <div className="content-title"></div>
                            <div className="content-text">
                                {teacherData.profile_picture !== null ? (
                                    <img
                                        src={teacherData.profile_picture}
                                        alt=""
                                        style={{
                                            width: "8em",
                                            height: "8em",
                                            objectFit: "cover",
                                            borderRadius: "50%",
                                        }}
                                    />
                                ) : (
                                    <Avatar sx={{ width: 85, height: 85, bgcolor: blue[600] }}>
                                        {teacherData.first_name.charAt(0) + teacherData.last_name.charAt(0)}
                                    </Avatar>
                                )}
                            </div>
                        </div>
                        <div className="item-actions">
                            <Button variant="outlined" color="primary" onClick={() => setPhotoDialog(true)}>
                                Change photo
                            </Button>
                        </div>
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
                            <Typography variant="subtitle1">
                                {teacherData.first_name + " " + teacherData.middle_name + " " + teacherData.last_name}
                            </Typography>
                        </div>
                        <div className="item-actions">
                            <Button variant="outlined" color="primary" onClick={() => setNameDialog(true)}>
                                Change name
                            </Button>
                        </div>
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
                            <Typography variant="subtitle1">{teacherData.school}</Typography>
                        </div>
                        <div className="item-actions"></div>
                    </div>
                    <Divider />
                    <div className="settings-item">
                        <div className="item-content">
                            <Typography variant="subtitle2">Email:</Typography>
                            <Typography variant="subtitle1">{teacherData.email}</Typography>
                        </div>
                        <div className="item-actions"></div>
                    </div>
                    <Divider />
                    <div className="settings-item">
                        <div className="item-content">
                            <Typography variant="subtitle2">Password:</Typography>
                            <Typography variant="subtitle1">******</Typography>
                        </div>
                        <div className="item-actions">
                            <Button variant="outlined" color="primary" onClick={() => setPasswordDialog(true)}>
                                Change Password
                            </Button>
                        </div>
                    </div>
                    <Divider />
                    <div className="settings-item">
                        <div className="item-content">
                            <Typography variant="subtitle2">Phone number:</Typography>
                            <Typography variant="subtitle1">No details</Typography>
                        </div>
                        <div className="item-actions">
                            <Button variant="outlined" color="primary" onClick={() => setPhoneNumberDialog(true)}>
                                Change phone number
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccountSettings;
