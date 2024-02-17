import LineChart from "../../../../../commons/components/charts/LineChart";
import { Paper } from "@mui/material";

const AssignmentGraph = () => {
    const data = [
        { day: "Algebra", value: 82 },
        { day: "Calculus", value: 84 },
        { day: "Polynomials", value: 81 },
        { day: "Trigonometry", value: 82 },
        { day: "Geometry", value: 83 },
    ];

    return (
        <Paper
            elevation={2}
            sx={{
                width: "100%",
                padding: "2%",
                backgroundColor: "#ffff",
            }}
        >
            <LineChart
                data={data}
                xKey="day"
                yKey="value"
                title="My Grades"
                xAxisLabel="Subjects"
                yAxisLabel="Grade (%)"
            />
        </Paper>
    );
};

export default AssignmentGraph;
