import "./theme.css";
import { createTheme, responsiveFontSizes } from "@mui/material";
import darkScrollbar from "@mui/material/darkScrollbar";

import defaultPalette from "./presets/single/_default.js";
import greenPalette from "./presets/single/_green.js";
import purplePalette from "./presets/single/_purple.js";
import redPalette from "./presets/single/_red.js";
import { grey } from "@mui/material/colors";
import greyGreenPalette from "./presets/mixed/_grey-green.js";
import blueVioletPalette from "./presets/mixed/_blue-violet.js";
import darkBlueGreenPalette from "./presets/mixed/_darkblue-green.js";

export const createMuiTheme = (mode, presetColor) => {
  let color = defaultPalette();

  switch (presetColor) {
    case "green":
      color = greenPalette();
      break;
    case "purple":
      color = purplePalette();
      break;
    case "red":
      color = redPalette();
      break;
    case "grey-green":
      color = greyGreenPalette();
      break;
    case "blue-violet":
      color = blueVioletPalette();
      break;
    case "darkblue-green":
      color = darkBlueGreenPalette();
      break;
    default:
      color = defaultPalette();
  }

  let theme = createTheme({
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
    primaryAppBar: {
      height: 100,
    },
    primaryDraw: {
      width: 240,
      closed: 70,
    },
    secondaryDraw: {
      width: 210,
    },
    palette: {
      primary: {
        light: color.primaryLight,
        main: color.primaryMain,
        dark: color.primaryDark,
        200: color.primary200,
        800: color.primary800,
      },
      secondary: {
        light: color.secondaryLight,
        main: color.secondaryMain,
        dark: color.secondaryDark,
        200: color.secondary200,
        800: color.secondary800,
      },
      error: {
        light: color.errorLight,
        main: color.errorMain,
        dark: color.errorDark,
      },
      orange: {
        light: color.orangeLight,
        main: color.orangeMain,
        dark: color.orangeDark,
      },
      warning: {
        light: color.warningLight,
        main: color.warningMain,
        dark: color.warningDark,
      },
      success: {
        light: color.successLight,
        200: color.success200,
        main: color.successMain,
        dark: color.successDark,
      },
      grey: {
        50: color.grey50,
        100: color.grey100,
        500: color.darkTextSecondary,
        600: color.heading,
        700: color.darkTextPrimary,
        900: color.textDark,
      },
      dark: {
        light: color?.darkTextPrimary,
        main: color?.darkLevel1,
        dark: color?.darkLevel2,
        800: color?.darkBackground,
        900: color?.darkPaper,
      },
      mode,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            ...darkScrollbar(
              mode === "light"
                ? {
                    track: grey[200],
                    thumb: grey[400],
                    active: grey[400],
                  }
                : undefined
            ),
            //scrollbarWidth for Firefox
            scrollbarWidth: "thin",
          },
        },
      },
      MuiAppBar: {
        defaultProps: {
          color: "default",
          elevation: 1,
        },
      },
    },
  });
  theme = responsiveFontSizes(theme);
  return theme;
};

export default createMuiTheme;
