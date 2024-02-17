import { useState } from "react";
import ClassCards from "./components/class_card/ClassCards";
import SearchField from "./components/SearchField";
import EnrollNewClass from "./components/EnrollNewClass";
import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BreadcrumbsComponent from "../../../../commons/components/breadcrumbs/Breadcrumbs";

const Main = () => {
    const [search, setSearch] = useState("");

    return (
        <Box>
            <AppBar position="relative" color="primary">
                <Toolbar>
                    <Typography variant="h6">2024-Spring</Typography>
                </Toolbar>
            </AppBar>
            <BreadcrumbsComponent />
            <Box sx={{ padding: "2%" }}>
                <Box sx={{ mb: 10 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 8 }}>
                        <SearchField search={search} setSearch={setSearch} />
                        <EnrollNewClass />
                    </Box>
                    <ClassCards search={search} />
                </Box>
            </Box>
        </Box>
    );
};

export default Main;
