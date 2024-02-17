/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button, Card, CardContent, TextField } from "@mui/material";
import React, { useState } from "react";
import "./Step1.scss";
import { Link as ReactRouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

//validations
import { useFormik } from "formik";
import * as yup from "yup";

const inputValidations = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
});

const ForgotPassword = ({ nextStep }) => {
    const { values, touched, errors, handleChange, handleBlur, setFieldTouched } = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: inputValidations,
    });

    const clickNext = () => {
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
            nextStep(email);
        }
    };

    return (
        <div className="forgot-password-step1-content">
            <Card sx={{ width: 450 }}>
                <CardContent className="content-card">
                    <h3>Forgot Password?</h3>
                    <p>Please enter the school email you use to login in MathMatters.</p>
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
                    <Button variant="contained" color="primary" fullWidth onClick={clickNext}>
                        Request Password Reset
                    </Button>
                    <Link component={ReactRouterLink} to="/login" variant="body2">
                        Back to Sign in
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
};

export default ForgotPassword;
