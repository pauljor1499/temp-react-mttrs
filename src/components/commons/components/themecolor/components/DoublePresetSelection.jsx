import React, { useContext } from "react";
import { Stack, Typography, IconButton } from "@mui/material";

import { ColorModeContext } from "../context/ThemeModeContext.jsx";

import CheckIcon from "@mui/icons-material/Check";

import Fade from '@mui/material/Fade';

const DoublePresetSelection = () => {
  const themeContext = useContext(ColorModeContext);

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
    >
      <Typography variant="h6">Mixed Color</Typography>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        <IconButton
          sx={{
            background: 'linear-gradient(to right bottom, blue, violet)',
            color: "#fff",
            borderRadius: "50%",
            padding: "10px",
            "&.MuiButtonBase-root:hover": {
              backgroundColor: 'linear-gradient(to right bottom, blue, violet)',
            },
          }}
          onClick={() => { themeContext.presetMode.togglePresetColor("blue-violet") }}
          variant="contained"
        >
          <Fade in={themeContext.presetColor === "blue-violet"}>
            <CheckIcon />
          </Fade>
        </IconButton>

        <IconButton
          sx={{
            background: 'linear-gradient(to right bottom, #546e7a,  #00897b)',
            color: "#fff",
            borderRadius: "50%",
            padding: "10px",
            "&.MuiButtonBase-root:hover": {
              backgroundColor: 'linear-gradient(to right bottom, #546e7a, #00897b)',
            },
          }}
          onClick={() => { themeContext.presetMode.togglePresetColor("grey-green") }}
          variant="contained"
        >
          <Fade in={themeContext.presetColor === "grey-green"}>
            <CheckIcon />
          </Fade>
        </IconButton>

        <IconButton
          sx={{
            background: 'linear-gradient(to right bottom, #091f3c,  #00897b)',
            color: "#fff",
            borderRadius: "50%",
            padding: "10px",
            "&.MuiButtonBase-root:hover": {
              backgroundColor: 'linear-gradient(to right bottom, #091f3c, #00897b)',
            },
          }}
          onClick={() => { themeContext.presetMode.togglePresetColor("darkblue-green") }}
          variant="contained"
        >
          <Fade in={themeContext.presetColor === "darkblue-green"}>
            <CheckIcon />
          </Fade>
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default DoublePresetSelection;
