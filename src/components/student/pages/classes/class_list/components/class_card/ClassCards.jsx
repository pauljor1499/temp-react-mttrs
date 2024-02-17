/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Button, Paper, Typography } from "@mui/material";
import "./ClassCard.scss";
import DefaultClassImage from "../../../../../../../assets/sample1.jpg";
import NoResultsFound from "../../../../../../../assets/class/no_results.jpg";
import { useNavigate } from "react-router-dom";

const Cards = ({ search }) => {
    const navigate = useNavigate();
    const values = [
        {
            title: "Algebra",
            section: "Section 1",
            code: "MMTRS-XYZ",
            teacher: "Harold Cruz",
        },
        {
            title: "Calculus",
            section: "Section 1",
            code: "MMTRS-XYZ",
            teacher: "William Samson",
        },
        {
            title: "Decimals",
            section: "Section 1",
            code: "MMTRS-XYZ",
            teacher: "Lily Williams",
        },
        {
            title: "Polynomials",
            section: "Section 1",
            code: "MMTRS-XYZ",
            teacher: "Jerald Blake",
        },
        {
            title: "Trigonometry",
            section: "Section 1",
            code: "MMTRS-XYZ",
            teacher: "George Fury",
        },
    ];

    const filterList = (entries, searchValue) => {
        if (searchValue === "" || searchValue === null) {
            return entries;
        } else {
            return entries.filter((entry) => {
                return (
                    entry.title.toLowerCase().includes(searchValue.toLowerCase()) ||
                    entry.code.toLowerCase().includes(searchValue.toLowerCase()) ||
                    entry.teacher.toLowerCase().includes(searchValue.toLowerCase())
                );
            });
        }
    };

    const noResultsFound = () => {
        return (
            <Box
                sx={{
                    pt: 5,
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <img height={250} width="auto" src={NoResultsFound} alt="No Results Found" />
                <Typography sx={{ mx: "auto" }} variant="h6">
                    No results found
                </Typography>
            </Box>
        );
    };

    const viewSelectedClass = (classTitle, classSection, classCode) => {
        navigate(`/student/classes/${classTitle}`, {
            state: { classTitle: classTitle, classCode: classCode, classSection: classSection },
        });
    };

    return (
        <>
            {filterList(values, search).length > 0 ? (
                <div className="student-class-list">
                    {filterList(values, search).map((entry, index) => (
                        <Paper elevation={0} variant="outlined" className="student-class-list-card" key={index}>
                            <Box className="student-class-image">
                                <img src={DefaultClassImage} alt="Class Image" />
                            </Box>
                            <Box sx={{ p: 2 }}>
                                <Box>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {entry.title + ` (${entry.section})`}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            fontWeight: 400,
                                        }}
                                    >
                                        {entry.code}
                                    </Typography>
                                    <Box sx={{ display: "flex", gap: ".5rem" }}>
                                        <img
                                            src="https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
                                            alt=""
                                            style={{ width: "25px", height: "25px" }}
                                        />
                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                                fontWeight: 400,
                                                color: "gray",
                                            }}
                                        >
                                            {entry.teacher}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ p: 1 }}>
                                <Button
                                    color="primary"
                                    variant="outlined"
                                    size="medium"
                                    fullWidth
                                    onClick={() => {
                                        viewSelectedClass(entry.title, entry.section, entry.code);
                                    }}
                                >
                                    View
                                </Button>
                            </Box>
                        </Paper>
                    ))}
                </div>
            ) : (
                noResultsFound()
            )}
        </>
    );
};

export default Cards;
