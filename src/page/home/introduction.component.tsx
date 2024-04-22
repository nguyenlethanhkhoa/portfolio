import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CONFIG } from "../../config";

const Introduction: React.FC = () => {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I fell in love with programming and I have at least learnt
                            something, I think… 🤷‍♂️
                            <br />
                            <br />I am fluent in
                            <i>
                                <b className="purple"> Python, TypeScript and C#. </b>
                            </i>
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
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href={CONFIG.GITHUB}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href={CONFIG.LINKEDIN}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Introduction;
