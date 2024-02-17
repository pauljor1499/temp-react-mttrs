import { useDispatch } from "react-redux";
import React from "react";
import { Box, useTheme, IconButton } from "@mui/material";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { useSchedContext } from "../context/Context";
import { useClassDetailsContext } from "../../view_class/context/Context";

const CreatedSchedItem = ({ props }) => {
  const theme = useTheme();
  const { index, day, timeStart, timeEnd, isInvalid } = props;

  let schedContext = useSchedContext();

  if (props.isEditMode) {
    schedContext = useClassDetailsContext()
  }

  return (
    <ListItem
      sx={{
        border: `1px solid ${
          isInvalid ? theme.palette.error.main : theme.palette.divider
        }`,
        borderRadius: 2,
        mb: 1,
      }}
      secondaryAction={
        <IconButton
          sx={{
            display: `${props.isEditMode ? (props.index === 0 && props.itemLength === 1 ? "none" : "block") : "block"}`,
          }}
          edge="end"
          aria-label="delete"
          title="Delete"
          onClick={() => schedContext.removeSchedItem(index)}
        >
          <HighlightOffRoundedIcon color="error" size="small" />
        </IconButton>
      }
    >
      <ListItemText
        primary={day}
        secondary={
          <React.Fragment>
            <Box
              component="span"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Box
                component="span"
                sx={{ display: "flex", flexDirection: "row" }}
              >
                <AccessTimeIcon
                  sx={{ color: "#747474", mr: 1 }}
                  fontSize="small"
                />
                {`${timeStart} - ${timeEnd}`}
              </Box>
            </Box>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default CreatedSchedItem;
