import { Box, List, ListItem, ListItemText } from "@mui/material";

const AssignmentDetails = () => {
    return (
        <Box>
            <List>
                <ListItem>
                    <ListItemText primary={"Title"} secondary={"Assignment Title"} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={"Description"} secondary={"Assignment Description"} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={"Date open"} secondary={"January 01, 2024"} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={"Date close"} secondary={"January 05, 2024"} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={"Shuffle Questions"} secondary={"Yes"} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={"Allow Calculator"} secondary={"Yes"} />
                </ListItem>
            </List>
        </Box>
    );
};

export default AssignmentDetails;
