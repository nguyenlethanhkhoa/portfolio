import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CgCPlusPlus, CgCircleci } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
    DiFsharp,
    DiDjango,
    DiSpark,
    DiDocker,
} from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import {
    SiRedis,
    SiFirebase,
    SiNextdotjs,
    SiSolidity,
    SiPostgresql,
    SiAngular,
    SiFastapi,
    SiFlask,
    SiApachecassandra,
    SiRabbitmq,
    SiApachekafka,
    SiApachemaven,
    SiApacheairflow,
    SiKubernetes,
} from "react-icons/si";

const Techstack: React.FC = () => {
    return (
        <Container>
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                <Col xs={4} md={2} className="tech-icons">
                    <DiPython />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiJavascript1 />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <TbBrandCSharp />
                </Col>
                {/* <Col xs={4} md={2} className="tech-icons">
                <TbBrandGolang />
            </Col> */}
                <Col xs={4} md={2} className="tech-icons">
                    <DiNodejs />
                </Col>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                <Col xs={4} md={2} className="tech-icons">
                    <DiReact />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiNextdotjs />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiAngular />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiDjango />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiFastapi />
                </Col>
                {/* <Col xs={4} md={2} className="tech-icons">
                    <SiSolidity />
                </Col> */}
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                <Col xs={4} md={2} className="tech-icons">
                    <DiMongodb />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiFirebase />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiPostgresql />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiApachecassandra />
                </Col>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                <Col xs={4} md={2} className="tech-icons">
                    <SiRabbitmq />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiApachekafka />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiRedis />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiSpark />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiApacheairflow />
                </Col> 
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                <Col xs={4} md={2} className="tech-icons">
                    <CgCircleci />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiApachemaven />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiDocker />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiKubernetes />
                </Col>
            </Row>
        </Container>
    );
}

export default Techstack;
