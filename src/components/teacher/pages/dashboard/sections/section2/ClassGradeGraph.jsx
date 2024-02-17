import { Paper } from "@mui/material";
import StackedColumnChart from "../../../../../commons/components/charts/StackedColumnChart";

const ClassGradeGraph = () => {
    const series = [
        {
            name: "A",
            data: [44, 55, 41, 67, 22],
        },
        {
            name: "B",
            data: [13, 23, 20, 8, 13],
        },
        {
            name: "C",
            data: [11, 17, 15, 15, 21],
        },
        {
            name: "D",
            data: [21, 26, 31, 28, 32],
        },
        {
            name: "F",
            data: [8, 7, 2, 4, 10],
        },
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
            <StackedColumnChart title="Class Grade Distribution" data={series} />
        </Paper>
    );
};

export default ClassGradeGraph;
