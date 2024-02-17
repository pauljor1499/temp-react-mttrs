/* eslint-disable react/prop-types */
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import PinnedTable from "../../../../../../commons/components/tables/pinned_table/PinnedTable";
import { MRT_GlobalFilterTextField } from "material-react-table";

const Enrolled = ({ classStatus, setClassStatus }) => {
    const columns = [
        { accessorKey: "status", header: "Status" },
        { accessorKey: "lastName", header: "Last name" },
        { accessorKey: "firstName", header: "First name" },
        { accessorKey: "middleName", header: "Middle Name" },
        { accessorKey: "email", header: "Email" },
    ];

    const rows = [
        {
            status: "Enrolled",
            lastName: "Snow",
            firstName: "Jon",
            middleName: "Jon",
            email: "sample@gmail.com",
        },
        {
            status: "Enrolled",
            lastName: "Lannister",
            firstName: "Cersei",
            middleName: "Jon",
            email: "sample@gmail.com",
        },
        {
            status: "Enrolled",
            lastName: "Lannister",
            firstName: "Jaime",
            middleName: "Jon",
            email: "sample@gmail.com",
        },
        {
            status: "Enrolled",
            lastName: "Stark",
            firstName: "Arya",
            middleName: "Jon",
            email: "sample@gmail.com",
        },
        {
            status: "Enrolled",
            lastName: "Stark",
            firstName: "Arya",
            middleName: "Jon",
            email: "sample@gmail.com",
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
                        value={classStatus}
                        onChange={(e) => {
                            setClassStatus(e.target.value);
                        }}
                        size="small"
                        fullWidth
                    >
                        <MenuItem value="pending">Pending</MenuItem>
                        <MenuItem value="enrolled">Enrolled</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        );
    };

    const rowActions = ({ row }) => [
        <MenuItem key="acceptClassRoster" onClick={() => console.info("Remove " + row.original.title)}>
            Remove
        </MenuItem>,
        <MenuItem key="rejectClassRoster" onClick={() => console.info("Email " + row.original.title)}>
            Email
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

export default Enrolled;
