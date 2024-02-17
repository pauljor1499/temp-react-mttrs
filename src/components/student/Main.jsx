import React, { useEffect } from "react";
import SimpleLoading from "../commons/components/loading/SimpleLoading";
import { Outlet } from "react-router-dom";
import SideDrawer from "./pages/side_drawer/SideDrawer";
import { useDispatch, useSelector } from "react-redux";
import { _studentGetData } from "../../store/slices/student/StudentData";
import ToggleColorMode from "../commons/components/themecolor/ToggleColorMode";

const Main = () => {
    const { isLoading } = useSelector((state) => state.StudentData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(_studentGetData());
    }, [dispatch]);

    const mainContent = () => {
        return <SideDrawer studentComponents={<Outlet />}></SideDrawer>;
    };

    return (
        <React.Fragment>
            <ToggleColorMode>
                <React.Fragment>{isLoading ? <SimpleLoading showLoading={isLoading} /> : mainContent()}</React.Fragment>
            </ToggleColorMode>
        </React.Fragment>
    );
};

export default Main;
