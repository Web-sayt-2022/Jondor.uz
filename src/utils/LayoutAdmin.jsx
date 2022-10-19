import React from "react";
import HeaderAdmin from "../components/headerAdmin/HeaderAdmin";
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
