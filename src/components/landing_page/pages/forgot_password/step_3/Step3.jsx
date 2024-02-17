/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
    Button,
    Card,
    CardContent,
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from "@mui/material";
import React, { useState } from "react";
import "./Step3.scss";
import Link from "@mui/material/Link";
import { Visibility, VisibilityOff } from "@mui/icons-material";

//validations
import { useFormik } from "formik";
import * as yup from "yup";
const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,25}$/;
//  1 uppercase letter, 1 lowercase letter, 1 numeric digit

const inputValidations = yup.object({
    password: yup
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
        .oneOf([yup.ref("password"), null], "Password doesn't match")
        .required("Confirm password is required"),
});

const ForgotPassword = ({ nextStep, previousStep }) => {
    const { values, touched, errors, handleChange, handleBlur, setFieldTouched } = useFormik({
        initialValues: {
            password: "",
            confirmPassword: "",
        },
        validationSchema: inputValidations,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleTouchAllFields = () => {
        Object.keys(values).forEach((fieldName) => {
            setFieldTouched(fieldName, true);
        });
    };

    const hasFieldErrors = () => {
        if (Boolean(errors.password) || Boolean(errors.confirmPassword)) {
            return true;
        }
        return false;
    };

    const handleNextStep = () => {
        handleTouchAllFields();
        if (!hasFieldErrors()) {
            nextStep();
        }
    };

    return (
        <div className="forgot-password-step3-content">
            <Card sx={{ width: 450 }}>
                <CardContent className="content-card">
                    <h3>Reset Password</h3>
                    <p>Please enter your new password.</p>
                    <FormControl fullWidth required error={touched.password && Boolean(errors.password)}>
                        <InputLabel>Password</InputLabel>
                        <OutlinedInput
                            id="password"
                            name="password"
                            label="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type={showPassword ? "text" : "password"}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        color={touched.password && Boolean(errors.password) ? "error" : ""}
                                        aria-label="toggle password visibility"
                                        onClick={() => {
                                            setShowPassword((show) => !show);
                                        }}
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                        }}
                                        onMouseUp={(e) => {
                                            e.preventDefault();
                                        }}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <FormHelperText>{touched.password && errors.password}</FormHelperText>
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
                    <Button variant="contained" color="primary" fullWidth onClick={handleNextStep}>
                        Reset Password
                    </Button>
                    <Link sx={{ cursor: "pointer" }} onClick={previousStep} variant="body2">
                        Back
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
};

export default ForgotPassword;
