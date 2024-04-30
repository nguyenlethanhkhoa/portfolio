import React, { ReactNode, useState } from "react";
import { Container, Row, Col, Stack, Nav, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import { AiFillGithub } from "react-icons/ai";
import { FaChevronRight, FaLinkedinIn } from "react-icons/fa";
import NavBar from "../../component/navbar.component";
import { Link } from "react-router-dom";
import { TbCategoryPlus } from "react-icons/tb";
import { BsFilePostFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { FaChevronLeft } from "react-icons/fa";

const Sidebar: React.FC<{
    isExpanded: boolean,
    setIsExpanded: (value: boolean) => void
}> = ({ isExpanded, setIsExpanded }) => {

    return (
        <Nav className="d-none d-md-block sidebar bordered px-2"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            style={{
                position: 'fixed',
                top: 85,
                left: 2,
                bottom: 10,
                width: isExpanded ? 250 : 55,
                overflowX: "hidden"
            }}
        >
            <div>
                <Nav.Item className="my-2">
                    <Stack direction="horizontal">
                        <div className="me-auto"></div>
                        <Button
                            className="bordered px-2 py-1"
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {isExpanded ? <FaChevronLeft /> : <FaChevronRight />}
                        </Button>
                    </Stack>
                </Nav.Item>
                <Nav.Item className="mb-3 pointer">
                    <Nav.Link className="p-0">
                        <Stack direction="horizontal">
                            <div className="p-2"><TbCategoryPlus /></div>
                            <div className="vr m-1" />
                            <div className="p-2 me-auto">Category</div>
                        </Stack>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 pointer">
                    <Nav.Link className="p-0" as={Link} to="/dashboard/post">
                        <Stack direction="horizontal">
                            <div className="p-2"><BsFilePostFill /></div>
                            <div className="vr m-1" />
                            <div className="p-2 me-auto">Post</div>
                        </Stack>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 pointer">
                    <Nav.Link className="p-0">
                        <Stack direction="horizontal">
                            <div className="p-2"><FiLogOut /></div>
                            <div className="vr m-1" />
                            <div className="p-2 me-auto">Logout</div>
                        </Stack>
                    </Nav.Link>
                </Nav.Item>
            </div>

        </Nav>
    );
};

export default Sidebar;
