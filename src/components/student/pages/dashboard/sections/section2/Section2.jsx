import { Box } from "@mui/material";
import AssignmentGraph from "./AssignmentGraph";

const Section2 = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <AssignmentGraph />
        </Box>
    );
};

export default Section2;
