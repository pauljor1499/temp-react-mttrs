/* eslint-disable react/prop-types */
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function ChangePhoneNumber({ showDialog, setShowDialog }) {
    const [phoneNumber, setPhoneNumber] = useState("");

    const clickCancel = () => {
        setPhoneNumber("");
        setShowDialog(false);
    };

    const clickSave = () => {
        setPhoneNumber("");
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
                    <Typography variant="body1">Edit Phone Number</Typography>
                </DialogTitle>
                <DialogContent dividers>
                    <Box>
                        <TextField
                            label="New phone number"
                            variant="outlined"
                            fullWidth
                            required
                            value={phoneNumber}
                            onChange={(e) => {
                                setPhoneNumber(e.target.value);
                            }}
                        ></TextField>
                    </Box>
                </DialogContent>
                <DialogActions sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Button sx={{ width: "150px" }} variant="contained" color="inherit" onClick={clickCancel}>
                        Cancel
                    </Button>
                    <Button
                        disabled={phoneNumber === ""}
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
