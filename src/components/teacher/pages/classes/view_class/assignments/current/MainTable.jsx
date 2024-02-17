/* eslint-disable react/prop-types */
import { MRT_GlobalFilterTextField } from "material-react-table";
import PinnedTable from "../../../../../../commons/components/tables/pinned_table/PinnedTable";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import NewAssignmentButton from "./components/NewAssignmentButton";

const MainTable = ({ assignmentName, setAssignmentName }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const viewAssignment = (row) => {
        navigate(`${location.pathname}/assignment/${row.original.title}`);
    };

    const columns = [
        { accessorKey: "title", header: "Title" },
        { accessorKey: "totalQuestions", header: "Total Questions" },
        { accessorKey: "dateOpen", header: "Date open" },
        { accessorKey: "dateClose", header: "Date close" },
        { accessorKey: "totalSubmissions", header: "Submissions" },
        { accessorKey: "status", header: "Status" },
    ];

    const rows = [
        {
            title: "Assignment 1",
            totalQuestions: "10",
            dateOpen: "Nov. 17, 2023",
            dateClose: "Nov. 18, 2023",
            totalSubmissions: "20/20",
            status: "Assigned",
        },
        {
            title: "Assignment 2",
            totalQuestions: "10",
            dateOpen: "Nov. 17, 2023",
            dateClose: "Nov. 18, 2023",
            totalSubmissions: "20/20",
            status: "Assigned",
        },
        {
            title: "Assignment 3",
            totalQuestions: "10",
            dateOpen: "Nov. 17, 2023",
            dateClose: "Nov. 18, 2023",
            totalSubmissions: "20/20",
            status: "Assigned",
        },
        {
            title: "Assignment 4",
            totalQuestions: "10",
            dateOpen: "Nov. 17, 2023",
            dateClose: "Nov. 18, 2023",
            totalSubmissions: "20/20",
            status: "Assigned",
        },
        {
            title: "Assignment 5",
            totalQuestions: "10",
            dateOpen: "Nov. 17, 2023",
            dateClose: "Nov. 18, 2023",
            totalSubmissions: "20/20",
            status: "Assigned",
        },
    ];

    const rowActions = ({ row }) => [
        <MenuItem key="viewAssignment" onClick={() => viewAssignment(row)}>
            View
        </MenuItem>,
        <MenuItem key="shareAssignment" onClick={() => console.info("Share " + row.original.title)}>
            Share
        </MenuItem>,
        <MenuItem key="analyticsAssignment" onClick={() => console.info("Analytics " + row.original.title)}>
            Analytics
        </MenuItem>,
    ];

    const topToolbar = ({ table }) => {
        return (
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    gap: "1rem",
                    p: "10px",
                    marginBottom: "1rem",
                }}
            >
                <MRT_GlobalFilterTextField table={table} />
                <FormControl>
                    <Select
                        value={assignmentName}
                        onChange={(e) => {
                            setAssignmentName(e.target.value);
                        }}
                        size="small"
                        fullWidth
                    >
                        <MenuItem value="current">Current</MenuItem>
                        <MenuItem value="archived">Archived</MenuItem>
                        <MenuItem value="requests">Requests</MenuItem>
                        <MenuItem value="trashed">Trashed</MenuItem>
                    </Select>
                </FormControl>
                <NewAssignmentButton />
            </Box>
        );
    };

    return (
        <div style={{ width: "100%", position: "relative" }}>
            <div style={{ width: "inherit", position: "absolute" }}>
                <Box sx={{ mt: -5, mb: 10 }}>
                    <PinnedTable
                        columns={columns}
                        data={rows}
                        topToolbar={topToolbar}
                        pinnedColumn={false}
                        rowActions={rowActions}
                    />
                </Box>
            </div>
        </div>
    );
};

export default MainTable;
