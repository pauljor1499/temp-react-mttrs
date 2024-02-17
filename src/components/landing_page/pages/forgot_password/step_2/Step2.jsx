/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button, Card, CardContent, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Step2.scss";
import Link from "@mui/material/Link";

const ForgotPassword = ({ setEmail, nextStep, previousStep }) => {
    const [code1, setCode1] = useState("");
    const [code2, setCode2] = useState("");
    const [code3, setCode3] = useState("");
    const [code4, setCode4] = useState("");
    const [code5, setCode5] = useState("");
    const [code6, setCode6] = useState("");
    const [hasErrors, setErrors] = useState(false);
    const [totalSeconds, setTotalSeconds] = useState(300); // 5 mins in seconds

    const generateNewCode = () => {
        setTotalSeconds(300);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            // Decrease the total seconds by 1 only if it's greater than 0
            if (totalSeconds > 0) {
                setTotalSeconds((prevTotalSeconds) => prevTotalSeconds - 1);
            }
        }, 1000);
        // Cleanup the interval when the component unmounts
        return () => clearInterval(interval);
    }, [totalSeconds]); // Re-run the effect when totalSeconds changes

    // Calculate minutes and seconds
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // Format minutes and seconds as mm:ss
    const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    const handleSubmitCode = () => {
        if (code1 === "1" && code2 === "2" && code3 === "3" && code4 === "4" && code5 === "5" && code6 === "6") {
            nextStep();
        } else {
            setErrors(true);
        }
    };

    return (
        <div className="forgot-password-step2-content">
            <Card sx={{ width: 450 }}>
                <CardContent className="content-card">
                    <h3>Reset code</h3>
                    <p>
                        Please enter the 4-digit verification code from your email <b>{setEmail}</b>
                    </p>

                    {totalSeconds === 0 ? (
                        <Button
                            variant="outlined"
                            size="small"
                            color="info"
                            sx={{ width: 150 }}
                            onClick={generateNewCode}
                        >
                            Get another code
                        </Button>
                    ) : (
                        <>
                            <div className="otp-page">
                                {hasErrors && <div style={{ color: "#e74c3c" }}>Invalid Code</div>}
                                <div className="otp-container">
                                    <input
                                        value={code1}
                                        onChange={(e) => {
                                            setCode1(e.target.value);
                                        }}
                                        type="text"
                                        className={hasErrors ? "otp-input-error" : "otp-input"}
                                        maxLength="1"
                                    />
                                    <input
                                        value={code2}
                                        onChange={(e) => {
                                            setCode2(e.target.value);
                                        }}
                                        type="text"
                                        className={hasErrors ? "otp-input-error" : "otp-input"}
                                        maxLength="1"
                                    />
                                    <input
                                        value={code3}
                                        onChange={(e) => {
                                            setCode3(e.target.value);
                                        }}
                                        type="text"
                                        className={hasErrors ? "otp-input-error" : "otp-input"}
                                        maxLength="1"
                                    />
                                    <input
                                        value={code4}
                                        onChange={(e) => {
                                            setCode4(e.target.value);
                                        }}
                                        type="text"
                                        className={hasErrors ? "otp-input-error" : "otp-input"}
                                        maxLength="1"
                                    />
                                    <input
                                        value={code5}
                                        onChange={(e) => {
                                            setCode5(e.target.value);
                                        }}
                                        type="text"
                                        className={hasErrors ? "otp-input-error" : "otp-input"}
                                        maxLength="1"
                                    />
                                    <input
                                        value={code6}
                                        onChange={(e) => {
                                            setCode6(e.target.value);
                                        }}
                                        type="text"
                                        className={hasErrors ? "otp-input-error" : "otp-input"}
                                        maxLength="1"
                                    />
                                </div>
                            </div>
                            <span> {`Code will expire after: ${formattedTime}`}</span>
                        </>
                    )}
                    <Button variant="contained" color="primary" fullWidth onClick={handleSubmitCode}>
                        Submit Code
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
