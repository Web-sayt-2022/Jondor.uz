import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import HeaderAdmin from "../components/headerAdmin/HeaderAdmin";
import LeftPanel from "../components/leftPanel/LeftPanel";
import SidebarAdmin from "../components/sidebarAdmin/SidebarAdmin";

const LayoutAdmin = ({ children }) => {
    return (
        <>
            <HeaderAdmin />
            <div className="page-content">
                <SidebarAdmin />
                {children}
            </div>
        </>
    );
};

export default LayoutAdmin;
