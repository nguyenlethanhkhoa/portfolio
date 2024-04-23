import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Particle from "../home/particle.component";
import ProjectCard, { ProjectCardProps } from "./project-card.component";

const PROJECTS: ProjectCardProps[] = [
    {
        imgPath: chatify,
        isBlog: false,
        title: "Chatify",
        description: "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
        ghLink: "",
        demoLink: ""
    },
    {
        imgPath: chatify,
        isBlog: false,
        title: "Chatify",
        description: "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
        ghLink: "",
        demoLink: ""
    },
    {
        imgPath: chatify,
        isBlog: false,
        title: "Chatify",
        description: "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
        ghLink: "",
        demoLink: ""
    }
]

const Projects: React.FC = () => {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {
                        PROJECTS.map(project => (
                            <Col xs={12} md={6} lg={4} className="project-card">
                                <ProjectCard {...project}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
