import React, { ReactNode, useState } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import NavBar from "../../component/navbar.component";
import Sidebar from "./sidebar.component";
import { Outlet } from "react-router-dom";

const DashboardLayout: React.FC = () => {

    const [isExpanded, setIsExpanded] = useState<boolean>(true);

    return (
        <>
            <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
            <div style={{
                transition: 'all 0.4s ease 0s',
                marginTop: 85,
                marginLeft: isExpanded ? 270 : 75,
                marginRight: 10
            }}>
                <Outlet />
            </div>
        </>
    );
}

export default DashboardLayout;
