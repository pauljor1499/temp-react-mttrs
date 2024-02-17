/* eslint-disable react/prop-types */
import ReactApexChart from "react-apexcharts";

const LineChart = ({ data, xKey, yKey, title, xAxisLabel, yAxisLabel }) => {
    const options = {
        chart: {
            id: "line-chart",
            toolbar: {
                show: false,
                offsetX: 0,
                offsetY: 0,
                tools: {
                    download: true,
                    selection: true,
                    zoom: true,
                    zoomin: true,
                    zoomout: true,
                    pan: true,
                },
            },
        },
        title: {
            text: title,
            align: "left",
            style: {
                fontSize: "16px",
                fontWeight: "bold",
                color: "#333",
            },
        },
        grid: {
            row: {
                colors: ["#f3f3f3", "transparent"],
                opacity: 0.5,
            },
        },
        xaxis: {
            categories: data.map((item) => item[xKey]),
            title: {
                text: xAxisLabel,
            },
        },
        yaxis: {
            title: {
                text: yAxisLabel,
            },
        },
    };
    const series = [
        {
            name: yKey,
            data: data.map((item) => item[yKey]),
        },
    ];
    return <ReactApexChart options={options} series={series} type="line" height={350} />;
};

export default LineChart;
