import { useTheme } from "@mui/material/styles";
import { useContext } from "react";
import { ColorModeContext } from "../context/ThemeModeContext";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import { IconButton, Stack, Typography } from "@mui/material";

const ColorModeSelection = () => {
  const theme = useTheme();
  const themeContext = useContext(ColorModeContext);

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
      <IconButton
        sx={{
          border: `3px solid ${
            theme.palette.mode === "light"
              ? theme.palette.primary.dark
              : theme.palette.divider
          }`,
          borderRadius: "8px",
          width: "auto",
          px: 10,
          height: 50,
        }}
        onClick={() => {
          if (theme.palette.mode !== "light")
            themeContext.colorMode.toggleColorMode("light");
        }}
      >
        <LightModeOutlinedIcon sx={{ fill: "#FFC107", mr: 1 }} />
        <Typography>Light</Typography>
      </IconButton>
      <IconButton
        sx={{
          border: `3px solid ${
            theme.palette.mode === "dark"
              ? theme.palette.primary.main
              : theme.palette.divider
          }`,
          borderRadius: "8px",
          height: 50,
          width: "auto",
          px: 10,
          bgcolor: "#121212",
          "&&.MuiIconButton-root:hover": {
            backgroundColor: "#121212",
          },
        }}
        onClick={() => {
          if (theme.palette.mode === "light")
            themeContext.colorMode.toggleColorMode("dark");
        }}
      >
        <DarkModeOutlinedIcon
          sx={{
            color: theme.palette.mode === "dark" ? "inherit" : "white",
            mr: 1,
          }}
        />
        <Typography
          sx={{ color: theme.palette.mode === "dark" ? "inherit" : "white" }}
        >
          Dark
        </Typography>
      </IconButton>
      
      {/* <IconButton
        sx={{
          border: `3px solid ${
            theme.palette.mode === "system"
              ? theme.palette.primary.dark
              : theme.palette.divider
          }`,
          borderRadius: "8px",
          width: "auto",
          px: 10,
          height: 50,
        }}
        onClick={() => {
          if (theme.palette.mode !== "system")
            themeContext.colorMode.toggleColorMode("system");
        }}
      >
        <LaptopChromebookOutlinedIcon sx={{ mr: 1 }} />
        <Typography>System</Typography>
      </IconButton> */}
    </Stack>
  );
};

export default ColorModeSelection;
