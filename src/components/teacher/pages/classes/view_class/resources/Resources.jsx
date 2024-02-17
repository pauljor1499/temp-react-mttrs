import { Description, GitHub, Web } from "@mui/icons-material";
import { Box, Button, Icon, ListItem, ListItemButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Resources = () => {
    const resources = [
        {
            name: "React Documentation",
            description: "Official documentation for React",
            url: "https://reactjs.org/",
            dateCreated: "January 01, 2024",
            icon: <Description />,
        },
        {
            name: "Material-UI Documentation",
            description: "Official documentation for Material-UI",
            url: "https://mui.com/",
            dateCreated: "January 01, 2024",
            icon: <Web />,
        },
        {
            name: "GitHub Repository",
            description: "View source code on GitHub",
            url: "https://github.com/yourusername/yourrepository",
            dateCreated: "January 01, 2024",
            icon: <GitHub />,
        },
    ];

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <Box>
                <Button startIcon={<AddIcon />} variant="contained" color="primary">
                    Add New Source
                </Button>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {resources.map((resource, index) => (
                    <ListItem dense key={index} disablePadding>
                        <ListItemButton
                            sx={{ display: "flex", gap: "1rem" }}
                            component="a"
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon>{resource.icon}</Icon>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                <Typography variant="subtitle2">{resource.name}</Typography>
                                <Typography variant="subtitle1">{resource.description}</Typography>
                                <Typography variant="caption">{resource.dateCreated}</Typography>
                            </Box>
                        </ListItemButton>
                    </ListItem>
                ))}
            </Box>
        </Box>
    );
};

export default Resources;
