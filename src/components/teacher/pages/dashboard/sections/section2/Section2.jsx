import { Box } from "@mui/material";
import ClassGradeGraph from "./ClassGradeGraph";
import AssignmentGraph from "./AssignmentGraph";

const Section2 = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <AssignmentGraph />
            <ClassGradeGraph />
        </Box>
    );
};

export default Section2;
