/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./Breadcrumbs.scss";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Divider } from "@mui/material";

const BreadcrumbsComponent = ({ homeName }) => {
    const location = useLocation();
    const excludePathnames = ["teacher", "student", "assignment", "new"];
    const pathnames = location.pathname.split("/").filter((name) => name);
    const capitalizeFirstLetter = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

    return (
        <React.Fragment>
            <Box className="breadcrumb-content">
                <Breadcrumbs
                    aria-label="breadcrumb"
                    maxItems={5}
                    itemsAfterCollapse={2}
                    separator={<NavigateNextIcon fontSize="small" />}
                >
                    {homeName && (
                        <Typography variant="body2" sx={{ textDecoration: "underline" }}>
                            {capitalizeFirstLetter(homeName)}
                        </Typography>
                    )}
                    {pathnames
                        .filter((item) => !excludePathnames.includes(item)) // to remove first path
                        .map((name, index) => {
                            const formatRoutePath = (str) => {
                                return str.replace(/%20/g, " ");
                            };
                            const routeTo = `/${pathnames.slice(0, index + 2).join("/")}`;
                            const isLast =
                                index === pathnames.filter((item) => !excludePathnames.includes(item)).length - 1;
                            return isLast ? (
                                <Typography variant="body2" key={name}>
                                    {capitalizeFirstLetter(formatRoutePath(name))}
                                </Typography>
                            ) : (
                                <Link key={name} to={routeTo}>
                                    <Typography variant="body2" sx={{ textDecoration: "underline" }}>
                                        {capitalizeFirstLetter(formatRoutePath(name))}
                                    </Typography>
                                </Link>
                            );
                        })}
                </Breadcrumbs>
            </Box>
            {(homeName || pathnames.length > 1) && <Divider />}
        </React.Fragment>
    );
};

export default BreadcrumbsComponent;

// HOW TO USE
// REMINDER: hide the first route path
// import BreadcrumbsComponent from "../../../commons/components/breadcrumbs/Breadcrumbs";
// <BreadcrumbsComponent homeName="Dashboard" /> <--- set homeName to show the first route name
// <BreadcrumbsComponent /> <-- for normal page
