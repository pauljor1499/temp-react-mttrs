/* eslint-disable react/prop-types */
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function ChangeName({ showDialog, setShowDialog }) {
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");

    const clickCancel = () => {
        resetAllFields();
        setShowDialog(false);
    };

    const clickSave = () => {
        resetAllFields();
        setShowDialog(false);
    };

    const resetAllFields = () => {
        setFirstName("");
        setMiddleName("");
        setLastName("");
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
                    <Typography variant="body1">Edit Name</Typography>
                </DialogTitle>
                <DialogContent dividers>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <TextField
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                            label="First name"
                            variant="outlined"
                            fullWidth
                            required
                        />
                        <TextField
                            value={middleName}
                            onChange={(e) => {
                                setMiddleName(e.target.value);
                            }}
                            label="Middle name"
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                            label="Last name"
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </Box>
                </DialogContent>
                <DialogActions sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Button sx={{ width: "150px" }} variant="contained" color="inherit" onClick={clickCancel}>
                        Cancel
                    </Button>
                    <Button
                        disabled={firstName === "" || lastName === ""}
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
