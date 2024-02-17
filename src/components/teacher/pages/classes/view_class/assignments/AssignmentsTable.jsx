import React, { useState } from "react";
import AssignmentCurrentTable from "./current/MainTable";
import AssignmentArchivedTable from "./archived/MainTable";
import AssignmentRequestsTable from "./requests/MainTable";
import AssignmentTrashTable from "./trash/MainTable";

const Assignments = () => {
    const [assignmentName, setAssignmentName] = useState("current");

    const assignmentTable = () => {
        switch (assignmentName) {
            case "current":
                return <AssignmentCurrentTable assignmentName={assignmentName} setAssignmentName={setAssignmentName} />;
            case "archived":
                return (
                    <AssignmentArchivedTable assignmentName={assignmentName} setAssignmentName={setAssignmentName} />
                );
            case "requests":
                return (
                    <AssignmentRequestsTable assignmentName={assignmentName} setAssignmentName={setAssignmentName} />
                );
            case "trashed":
                return <AssignmentTrashTable assignmentName={assignmentName} setAssignmentName={setAssignmentName} />;
            default:
                console.log("Invalid");
        }
    };

    return <React.Fragment>{assignmentTable()}</React.Fragment>;
};

export default Assignments;
