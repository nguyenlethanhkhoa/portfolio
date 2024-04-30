import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { SiBlogger } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaLaptopCode } from "react-icons/fa";

const Introduction: React.FC = () => {

    const navigate = useNavigate();

    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row style={{ justifyContent: "center" }}>
                    <Col md={12} lg={8} className="home-about-description">
                        <h1 className="title" style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I fell in love with programming, automation and I have at least learnt
                            something, I think… 🤷‍♂️
                            <br />
                            <br />
                            My journey has led me gained a versatile skill set of &nbsp;
                            <i>
                                <b className="purple">Web Technologies </b> and
                                also in areas related to{" "}
                                <b className="purple">
                                    Blockchain.
                                </b>
                            </i>
                            <br />
                            <br />
                            I am perpetually enthralled by the realm of <b className="purple">Finance</b> and the
                            <i>
                                <b className="purple">
                                    {" "}
                                    innovative application of technology
                                </b>
                            </i>
                            &nbsp; to
                            <i>
                                <b className="purple"> automatically unearth financial data</b>
                            </i>
                        </p>
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center" }}>
                    <Col 
                        xs={12} md={5} lg={4} 
                        className="home-about-social tech-icons pointer"
                        onClick={() => navigate('/project')}
                    >
                        <FaLaptopCode />
                        <h1 style={{ fontSize: "20px", lineHeight: '200%' }}>
                            Explore my journey through <span style={{ fontSize: "25px" }} className="purple"> Projects </span>
                        </h1>
                    </Col>
                    <Col 
                        xs={12} md={5} lg={4} 
                        className="home-about-social tech-icons pointer"
                        onClick={() => window.location.href = 'https://blog.nguyenlethanhkhoa.com'}
                    >
                        <FaBookOpen />
                        <h1 style={{ fontSize: "20px", lineHeight: '200%' }}>
                            Unlock more about me on my <span style={{ fontSize: "25px" }} className="purple"> Blog </span>
                        </h1>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Introduction;
