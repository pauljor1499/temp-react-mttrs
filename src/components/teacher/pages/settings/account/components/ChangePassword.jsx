/* eslint-disable react/prop-types */
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
    Divider,
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Typography,
} from "@mui/material";

//validations
import { useFormik } from "formik";
import * as yup from "yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,25}$/;
//  1 uppercase letter, 1 lowercase letter, 1 numeric digit

const inputValidations = yup.object({
    newPassword: yup
        .string()
        // .min(8, "Password must be at least 8 characters long")
        // .max(25, "Password must be no more than 25 characters long")
        .matches(
            passwordRules,
            "Must contains at least 1 uppercase letter, 1 lowercase, 1 numeric digit, and min of 8 and max of 25 in length"
        )
        .required("Password is required"),
    confirmPassword: yup
        .string()
        // .min(8, "Password must be at least 8 characters long")
        // .max(25, "Password must be no more than 25 characters long")
        .matches(
            passwordRules,
            "Must contains at least 1 uppercase letter, 1 lowercase, 1 numeric digit, and min of 8 and max of 25 in length"
        )
        .oneOf([yup.ref("newPassword"), null], "Password doesn't match")
        .required("Confirm password is required"),
    currentPassword: yup.string().required("Confirm password is required"),
});

export default function ChangePassword({ showDialog, setShowDialog }) {
    const { values, touched, errors, handleChange, handleBlur, setFieldTouched } = useFormik({
        initialValues: {
            newPassword: "",
            confirmPassword: "",
            currentPassword: "",
        },
        validationSchema: inputValidations,
    });

    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);

    const handleTouchAllFields = () => {
        Object.keys(values).forEach((fieldName) => {
            setFieldTouched(fieldName, true);
        });
    };

    const hasFieldErrors = () => {
        if (errors.newPassword || errors.confirmPassword || errors.currentPassword) {
            return true;
        }
        return false;
    };

    const clickCancel = () => {
        resetAllFields();
    };

    const clickSave = () => {
        handleTouchAllFields();
        if (!hasFieldErrors()) {
            resetAllFields();
        }
    };

    const resetAllFields = () => {
        values.newPassword = "";
        values.confirmPassword = "";
        values.currentPassword = "";
        errors.newPassword = false;
        errors.confirmPassword = false;
        errors.currentPassword = false;
        setShowDialog(false);
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
                    <Typography variant="body1">Edit Password</Typography>
                </DialogTitle>
                <DialogContent dividers sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <Typography variant="body2" color="primary">
                        Enter new password
                    </Typography>
                    <FormControl fullWidth required error={touched.newPassword && Boolean(errors.newPassword)}>
                        <InputLabel>New Password</InputLabel>
                        <OutlinedInput
                            id="newPassword"
                            name="newPassword"
                            label="newPassword"
                            value={values.newPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type={showNewPassword ? "text" : "password"}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        color={touched.newPassword && Boolean(errors.newPassword) ? "error" : ""}
                                        aria-label="toggle password visibility"
                                        onClick={() => {
                                            setShowNewPassword((show) => !show);
                                        }}
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                        }}
                                        onMouseUp={(e) => {
                                            e.preventDefault();
                                        }}
                                        edge="end"
                                    >
                                        {showNewPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <FormHelperText>{touched.newPassword && errors.newPassword}</FormHelperText>
                    </FormControl>
                    <FormControl fullWidth required error={touched.confirmPassword && Boolean(errors.confirmPassword)}>
                        <InputLabel>Confirm Password</InputLabel>
                        <OutlinedInput
                            id="confirmPassword"
                            name="confirmPassword"
                            label="Confirm Password"
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type={showConfirmPassword ? "text" : "password"}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        color={
                                            touched.confirmPassword && Boolean(errors.confirmPassword) ? "error" : ""
                                        }
                                        aria-label="toggle password visibility"
                                        onClick={() => {
                                            setShowConfirmPassword((show) => !show);
                                        }}
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                        }}
                                        onMouseUp={(e) => {
                                            e.preventDefault();
                                        }}
                                        edge="end"
                                    >
                                        {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <FormHelperText>{touched.confirmPassword && errors.confirmPassword}</FormHelperText>
                    </FormControl>
                    <Divider />
                    <Typography variant="body2" color="primary">
                        Enter current password for verification
                    </Typography>
                    <FormControl fullWidth required error={touched.currentPassword && Boolean(errors.currentPassword)}>
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
                                            touched.currentPassword && Boolean(errors.currentPassword) ? "error" : ""
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
                </DialogContent>
                <DialogActions sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Button sx={{ width: "150px" }} variant="contained" color="inherit" onClick={clickCancel}>
                        Cancel
                    </Button>
                    <Button
                        disabled={false}
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
