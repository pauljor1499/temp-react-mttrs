/* eslint-disable react/prop-types */
import ReactApexChart from "react-apexcharts";

const BasicPieChart = ({ passingRate, failingRate }) => {
    const series = [passingRate, failingRate];
    const options = {
        labels: ["Passing Rate", "Failing Rate"],
        title: {
            text: "Passing vs Failing Rates",
            align: "left",
            style: {
                fontSize: "16px",
                fontWeight: "bold",
                color: "#333",
            },
        },
    };
    return <ReactApexChart options={options} series={series} type="pie" width="350" />;
};

export default BasicPieChart;
