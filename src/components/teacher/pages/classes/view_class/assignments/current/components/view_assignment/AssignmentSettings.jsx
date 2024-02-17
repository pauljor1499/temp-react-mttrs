import { Box, Button, Divider, List, ListItem, Typography } from "@mui/material";

const AssignmentDetails = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Divider orientation="vertical" />
            <Typography variant="body1" align="center" gutterBottom>
                Settings
            </Typography>
            <List>
                <ListItem>
                    <Button variant="outlined" color="success" fullWidth>
                        Edit
                    </Button>
                </ListItem>
                <ListItem>
                    <Button variant="outlined" color="primary" fullWidth>
                        Deploy Now
                    </Button>
                </ListItem>
                <ListItem>
                    <Button variant="outlined" color="primary" fullWidth>
                        Show Data
                    </Button>
                </ListItem>
                <ListItem>
                    <Button variant="outlined" color="primary" fullWidth>
                        Print
                    </Button>
                </ListItem>
                <ListItem>
                    <Button variant="outlined" color="error" fullWidth>
                        Delete
                    </Button>
                </ListItem>
            </List>
        </Box>
    );
};

export default AssignmentDetails;
