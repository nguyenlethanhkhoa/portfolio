import React, { ReactNode } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import NavBar from "../../component/navbar.component";
import CategoryList from "./category-list.component";

const BlogLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <NavBar />
            <Container style={{
                marginTop: '95px'
            }}>
                <Row>
                    <Col md={4} style={{
                        position: 'sticky',
                        top: 95,
                        alignSelf: 'flex-start',
                        width: 300
                    }}>
                        <CategoryList />
                    </Col>
                    <Col md={8}>{children}</Col>
                </Row>
            </Container >
        </>
    );
}

export default BlogLayout;
