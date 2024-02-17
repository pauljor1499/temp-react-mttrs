/* eslint-disable react/prop-types */
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Typography } from "@mui/material";
import DefaultPhoto from "../../../../../../assets/default_image.png";
import { useState, useRef } from "react";

export default function ChangePhoto({ showDialog, setShowDialog }) {
    const inputRef = useRef(null);
    const [photo, setPhoto] = useState(null);

    const browseImage = () => {
        inputRef.current.click();
    };

    const handleChange = (event) => {
        try {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (event) => {
                setPhoto(event.target.result);
            };
        } catch (error) {
            console.log("");
        }
    };

    const photoActions = () => {
        if (photo !== null) {
            return (
                <React.Fragment>
                    <Button sx={{ width: "150px" }} variant="outlined" color="primary" onClick={browseImage}>
                        Change
                    </Button>
                    <Button sx={{ width: "150px" }} variant="contained" color="primary" onClick={clickSave}>
                        Save
                    </Button>
                </React.Fragment>
            );
        } else {
            return (
                <Button sx={{ width: "150px" }} variant="contained" color="primary" onClick={browseImage}>
                    Upload
                </Button>
            );
        }
    };

    const clickSave = () => {
        setPhoto(null);
        setShowDialog(false);
    };

    const clickCancel = () => {
        setPhoto(null);
        setShowDialog(false);
    };

    return (
        <React.Fragment>
            <input ref={inputRef} type="file" accept="image/*" hidden onChange={handleChange} />
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
                    <Typography variant="body1">Edit Photo</Typography>
                </DialogTitle>
                <DialogContent dividers>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", objectFit: "cover" }}>
                        <img
                            style={{ width: "8rem", height: "8rem", borderRadius: "50%" }}
                            src={photo !== null ? photo : DefaultPhoto}
                            alt="Default Photo"
                        />
                    </Box>
                </DialogContent>
                <DialogActions sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Button sx={{ width: "150px" }} variant="contained" color="inherit" onClick={clickCancel}>
                        Cancel
                    </Button>
                    {photoActions()}
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
