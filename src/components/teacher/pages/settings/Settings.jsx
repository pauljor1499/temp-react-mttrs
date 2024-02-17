import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TabsComponent from "../../../commons/components/tabs/TabsComponent";
import AccountSettings from "./account/AccountSettings";
import ThemeSettings from "./theme/ThemeSettings";

const tabContents = [
    {
        label: "Account",
        component: (
            <Box sx={{ mt: 5, mb: 10 }}>
                <AccountSettings />
            </Box>
        ),
    },
    {
        label: "Theme",
        component: (
            <Box sx={{ mt: 5, mb: 10 }}>
                <ThemeSettings />
            </Box>
        ),
    },
];

const Settings = () => {
    return (
        <React.Fragment>
            <Box>
                <AppBar position="relative" color="primary">
                    <Toolbar>
                        <Typography variant="h6">Settings</Typography>
                    </Toolbar>
                </AppBar>
                <Box sx={{ padding: "0 2%" }}>
                    <TabsComponent tabContents={tabContents} />
                </Box>
            </Box>
        </React.Fragment>
    );
};

export default Settings;
