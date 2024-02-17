/* eslint-disable react/prop-types */
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
    Box,
    Divider,
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography,
} from "@mui/material";

//validations
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const inputValidations = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    currentPassword: yup.string().required("Confirm password is required"),
});

export default function ChangeEmail({ showDialog, setShowDialog }) {
    const { values, touched, errors, handleChange, handleBlur, setFieldTouched } = useFormik({
        initialValues: {
            email: "",
            currentPassword: "",
        },
        validationSchema: inputValidations,
    });

    const [showCurrentPassword, setShowCurrentPassword] = useState(false);

    const resetAllFields = () => {
        values.email = "";
        values.currentPassword = "";
        setShowDialog(false);
    };

    const clickCancel = () => {
        resetAllFields();
    };

    const clickSave = () => {
        validateFields(values.email);
    };

    const validateFields = (email) => {
        // touch all fields
        Object.keys(values).forEach((fieldName) => {
            setFieldTouched(fieldName, true);
        });
        // check if there are errors
        if (Object.keys(errors).length === 0 && email.length !== 0) {
            // if no errors
            resetAllFields();
        }
    };

    return (
        <React.Fragment>
            <Dialog
                open={showDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
            >
                <DialogTitle
                    id="alert-dialog-title"
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="body1">Edit Email</Typography>
                </DialogTitle>
                <DialogContent dividers>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <TextField
                            fullWidth
                            required
                            id="email"
                            name="email"
                            label="Email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                        />
                        <Divider />
                        <Typography variant="body2" color="primary">
                            Enter current password for verification
                        </Typography>
                        <FormControl
                            fullWidth
                            required
                            error={touched.currentPassword && Boolean(errors.currentPassword)}
                        >
                            <InputLabel>Current Password</InputLabel>
                            <OutlinedInput
                                id="currentPassword"
                                name="currentPassword"
                                label="Current Password"
                                value={values.currentPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type={showCurrentPassword ? "text" : "password"}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            color={
                                                touched.currentPassword && Boolean(errors.currentPassword)
                                                    ? "error"
                                                    : ""
                                            }
                                            aria-label="toggle password visibility"
                                            onClick={() => {
                                                setShowCurrentPassword((show) => !show);
                                            }}
                                            onMouseDown={(e) => {
                                                e.preventDefault();
                                            }}
                                            onMouseUp={(e) => {
                                                e.preventDefault();
                                            }}
                                            edge="end"
                                        >
                                            {showCurrentPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            <FormHelperText>{touched.currentPassword && errors.currentPassword}</FormHelperText>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Button sx={{ width: "150px" }} variant="contained" color="inherit" onClick={clickCancel}>
                        Cancel
                    </Button>
                    <Button
                        disabled={values.email === "" || values.currentPassword === ""}
                        sx={{ width: "150px" }}
                        variant="contained"
                        color="primary"
                        onClick={clickSave}
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
