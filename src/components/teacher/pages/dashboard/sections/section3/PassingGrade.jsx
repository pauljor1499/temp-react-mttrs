import BasicPieChart from "../../../../../commons/components/charts/BasicPieChart";

const PassingGrade = () => {
    const passingRate = 66;
    const failingRate = 34;
    return <BasicPieChart passingRate={passingRate} failingRate={failingRate} />;
};

export default PassingGrade;
