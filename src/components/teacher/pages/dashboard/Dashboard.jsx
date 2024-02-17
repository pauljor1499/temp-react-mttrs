import "./Dashboard.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Section1 from "./sections/section1/Section1";
import Section2 from "./sections/section2/Section2";
import Section3 from "./sections/section3/Section3";
import Section4 from "./sections/section4/StudentPending";
import WidgetPage from "./sections/widgets/WidgetPage";
import Notifications from "./components/Notifications";
import SimpleLoading from "../../../commons/components/loading/SimpleLoading";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 300);
        return () => clearTimeout(timer); // Clear the timer if the component unmounts
    }, []);

    return (
        <Box className="teacher-dashboard-content">
            {/* loading, snackbars and etc. */}
            <SimpleLoading showLoading={isLoading} />
            <AppBar position="relative" color="primary">
                <Toolbar>
                    <Typography variant="h6">Dashboard</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                        <Notifications />
                    </Box>
                </Toolbar>
            </AppBar>
            {!isLoading && (
                <div className="content-body">
                    <Section1 />
                    <div className="content-items">
                        <div className="item-sections">
                            <Section2 />
                            <Section3 />
                            <Section4 />
                        </div>
                        <div className="item-widgets">
                            <WidgetPage />
                        </div>
                    </div>
                </div>
            )}
        </Box>
    );
};

export default Dashboard;
