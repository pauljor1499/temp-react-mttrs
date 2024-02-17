import React, { useState } from "react";
import ClassEnrolledTable from "./enrolled/ClassEnrolledTable";
import ClassPendingTable from "./pending/ClassPendingTable";

const ClassRoster = () => {
    const [classStatus, setClassStatus] = useState("pending");
    const classRosterTable = () => {
        switch (classStatus) {
            case "enrolled":
                return <ClassEnrolledTable classStatus={classStatus} setClassStatus={setClassStatus} />;
            case "pending":
                return <ClassPendingTable classStatus={classStatus} setClassStatus={setClassStatus} />;
            default:
                console.log("Invalid");
        }
    };
    return <React.Fragment>{classRosterTable()}</React.Fragment>;
};

export default ClassRoster;
