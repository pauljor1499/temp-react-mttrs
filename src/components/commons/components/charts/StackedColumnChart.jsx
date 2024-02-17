/* eslint-disable react/prop-types */
import Chart from "react-apexcharts";

const StackedColumnChart = ({ data, title }) => {
    const options = {
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
        chart: {
            id: "stacked-column-chart",
            type: "bar",
            stacked: true,
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
        // colors: ["#008FFB", "#00E396", "#FEB019"],
        plotOptions: {
            bar: {
                horizontal: false,
            },
        },
        xaxis: {
            categories: ["Algebra", "Calculus", "Polynomials", "Trigonometry", "Geometry"],
        },
        fill: {
            opacity: 1,
        },
        legend: {
            position: "top",
        },
    };

    return <Chart options={options} series={data} type="bar" height={350} />;
};

export default StackedColumnChart;
