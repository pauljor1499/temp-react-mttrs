import React from "react";
import { Stack, Typography, Divider } from "@mui/material";

import ColorModeSelection from "../../../../commons/components/themecolor/components/ColorModeSelection.jsx";
import SinglePresetSelection from "../../../../commons/components/themecolor/components/SinglePresetSelection.jsx";
import DoublePresetSelection from "../../../../commons/components/themecolor/components/DoublePresetSelection.jsx";

const ThemeSettings = () => {

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      spacing={2}
      sx={{ padding: "0 8%" }}
    >
      <Typography variant="h6">Color Mode</Typography>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        <ColorModeSelection />
      </Stack>
      <Divider orientation="horizontal" flexItem />
      <SinglePresetSelection/>
      <Divider orientation="horizontal" flexItem />
      <DoublePresetSelection/>
    </Stack>
  );
};

export default ThemeSettings;
