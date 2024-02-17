/* eslint-disable react/prop-types */
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import PinnedTable from "../../../../../../commons/components/tables/pinned_table/PinnedTable";
import { MRT_GlobalFilterTextField } from "material-react-table";

const MainTable = ({ assignmentName, setAssignmentName }) => {
    const columns = [
        { accessorKey: "title", header: "Title" },
        { accessorKey: "totalQuestions", header: "Total Questions" },
        { accessorKey: "sender", header: "Sender" },
        { accessorKey: "dateRequested", header: "Date Requested" },
    ];

    const rows = [
        {
            title: "Assignment 1",
            totalQuestions: "10",
            sender: "Jose Rizal",
            dateRequested: "Nov. 18, 2023",
        },
        {
            title: "Assignment 1",
            totalQuestions: "10",
            sender: "Manny Pacquiao",
            dateRequested: "Nov. 18, 2023",
        },
        {
            title: "Assignment 1",
            totalQuestions: "10",
            sender: "Lebron James",
            dateRequested: "Nov. 18, 2023",
        },
        {
            title: "Assignment 1",
            totalQuestions: "10",
            sender: "Lebron James",
            dateRequested: "Nov. 18, 2023",
        },
        {
            title: "Assignment 1",
            totalQuestions: "10",
            sender: "Lebron James",
            dateRequested: "Nov. 18, 2023",
        },
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
            </Box>
        );
    };

    const rowActions = ({ row }) => [
        <MenuItem key="viewAssignment" onClick={() => console.info("View " + row.original.title)}>
            View
        </MenuItem>,
        <MenuItem key="acceptRequest" onClick={() => console.info("Accept " + row.original.title)}>
            Accept
        </MenuItem>,
        <MenuItem key="rejectRequest" onClick={() => console.info("Reject " + row.original.title)}>
            Reject
        </MenuItem>,
    ];

    return (
        <PinnedTable
            columns={columns}
            data={rows}
            topToolbar={topToolbar}
            pinnedColumn={false}
            rowActions={rowActions}
        />
    );
};

export default MainTable;
