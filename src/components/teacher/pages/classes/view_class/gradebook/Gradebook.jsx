import PinnedTable from "../../../../../../components/commons/components/tables/pinned_table/PinnedTable";
import { Box, lighten } from "@mui/material";
import { MRT_GlobalFilterTextField } from "material-react-table";

const Gradebook = () => {
    const columns = [
        {
            accessorKey: "name.firstName",
            header: "First Name",
        },
        {
            accessorKey: "name.lastName",
            header: "Last Name",
        },
        {
            accessorKey: "name.middleName",
            header: "Middle Name",
        },
        {
            accessorKey: "test1",
            header: "Test 1",
        },
        {
            accessorKey: "test2",
            header: "Test 2",
        },
        {
            accessorKey: "test3",
            header: "Test 3",
        },
        {
            accessorKey: "test4",
            header: "Test 4",
        },
        {
            accessorKey: "test5",
            header: "Test 5",
        },
        {
            accessorKey: "average",
            header: "Average",
        },
    ];

    const rows = [
        {
            name: {
                firstName: "John",
                middleName: "Snow",
                lastName: "Doe",
            },
            test1: "89",
            test2: "81",
            test3: "92",
            test4: "89",
            test5: "95",
            average: 100,
        },
        {
            name: {
                firstName: "Jane",
                middleName: "William",
                lastName: "Doe",
            },
            test1: "89",
            test2: "81",
            test3: "92",
            test4: "89",
            test5: "95",
            average: 100,
        },
        {
            name: {
                firstName: "Joe",
                middleName: "Peter",
                lastName: "Doe",
            },
            test1: "89",
            test2: "81",
            test3: "92",
            test4: "89",
            test5: "95",
            average: 100,
        },
        {
            name: {
                firstName: "Kevin",
                middleName: "Samson",
                lastName: "Vandy",
            },
            test1: "89",
            test2: "81",
            test3: "92",
            test4: "89",
            test5: "95",
            average: 100,
        },
        {
            name: {
                firstName: "Joshua",
                middleName: "James",
                lastName: "Rolluffs",
            },
            test1: "89",
            test2: "81",
            test3: "92",
            test4: "89",
            test5: "95",
            average: 100,
        },
    ];

    const pinnedColumn = { left: ["name.lastName"], right: ["average"] };

    const topToolbar = ({ table }) => {
        return (
            <Box
                sx={(theme) => ({
                    backgroundColor: lighten(theme.palette.background.default, 0.05),
                    display: "flex",
                    gap: "0.5rem",
                    p: "10px",
                    marginBottom: "1rem",
                    justifyContent: "space-between",
                })}
            >
                <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                    <MRT_GlobalFilterTextField table={table} />
                </Box>
                <Box>
                    <Box sx={{ display: "flex", gap: "0.5rem" }}></Box>
                </Box>
            </Box>
        );
    };

    return (
        <div style={{ width: "100%", position: "relative" }}>
            <div style={{ width: "inherit", position: "absolute" }}>
                <Box sx={{ mt: -5, mb: 10 }}>
                    <PinnedTable columns={columns} data={rows} topToolbar={topToolbar} pinnedColumn={pinnedColumn} />
                </Box>
            </div>
        </div>
    );
};

export default Gradebook;
