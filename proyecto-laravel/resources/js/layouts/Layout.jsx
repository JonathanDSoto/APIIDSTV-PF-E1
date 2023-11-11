import React from "react";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
    return (
        <>
            <div>
                <Sidebar />
            </div>
            <main>{children}</main>
        </>
    );
};

export default Layout;