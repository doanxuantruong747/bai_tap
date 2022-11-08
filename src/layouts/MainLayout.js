import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import React from "react";
import '../css/MainLayout.css';


function MainLayout() {
    return (
        <div className="mainLayout">
            <MainHeader />

            <Outlet />

            <MainFooter />
        </div>
    )
}

export default MainLayout