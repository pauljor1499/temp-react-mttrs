import React from "react";
import {
    Avatar,
    Badge,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListSubheader,
    Menu,
    Typography,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useTheme } from "@mui/material/styles";

const Notifications = () => {
    const messages = [
        {
            id: 1,
            primary: "New assignment created",
            secondary: "You successfully created a new assignment on June 04, 2023.",
            person: "MathMatters",
        },
        {
            id: 2,
            primary: "Assignment deleted",
            secondary: "You successfully deleted a new assignment on June 04, 2023.",
            person: "MathMatters",
        },
        {
            id: 3,
            primary: "Assignment updated",
            secondary: "You successfully updated a new assignment on June 04, 2023.",
            person: "MathMatters",
        },
        {
            id: 4,
            primary: "Mentioned you",
            secondary: "Roger has mentioned you from his comming in Algebra.",
            person: "MathMatters",
        },
        {
            id: 5,
            primary: "Class' name updated",
            secondary: "You successfully updated a class' name on June 04, 2023.",
            person: "MathMatters",
        },
    ];

    const theme = useTheme();
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <React.Fragment>
            <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={handleOpenUserMenu}
            >
                <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <Menu
                sx={{ mt: "45px", p: 2 }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <Typography variant="h6" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
                    Notifications
                </Typography>
                <List sx={{ mb: 2 }}>
                    {messages.map(({ id, primary, secondary, person }) => (
                        <React.Fragment key={id}>
                            {id === 1 && <ListSubheader sx={{ bgcolor: "background.paper" }}>Today</ListSubheader>}
                            {id === 3 && <ListSubheader sx={{ bgcolor: "background.paper" }}>Yesterday</ListSubheader>}
                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar
                                        alt="Profile Picture"
                                        style={{
                                            backgroundColor: theme.palette.primary.main,
                                            color: theme.palette.primary.contrastText,
                                        }}
                                    >
                                        {person[0]}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText sx={{ width: 200 }}>
                                    <Typography
                                        variant="subtitle2"
                                        noWrap
                                        sx={{
                                            display: { fontWeight: 700 },
                                            margin: "auto",
                                        }}
                                    >
                                        {primary}
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        noWrap
                                        sx={{
                                            margin: "auto",
                                        }}
                                    >
                                        {secondary}
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </React.Fragment>
                    ))}
                </List>
            </Menu>
        </React.Fragment>
    );
};

export default Notifications;
