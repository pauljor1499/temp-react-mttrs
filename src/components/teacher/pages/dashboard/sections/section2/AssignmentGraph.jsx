import LineChart from "../../../../../commons/components/charts/LineChart";
import { Paper } from "@mui/material";

const AssignmentGraph = () => {
    const data = [
        { day: "Algebra", value: 10 },
        { day: "Calculus", value: 20 },
        { day: "Polynomials", value: 15 },
        { day: "Trigonometry", value: 25 },
        { day: "Geometry", value: 18 },
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
                title="Assignment Submissions"
                xAxisLabel="Subjects"
                yAxisLabel="Submissions"
            />
        </Paper>
    );
};

export default AssignmentGraph;
