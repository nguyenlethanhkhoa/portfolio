import { Col, Container, Row } from "react-bootstrap";
import Techstack from "./tech-stack.component";

const SkillSet: React.FC = () => {
    return (
        <Container fluid className="about-section">
            <Row>
                <Col md={12} className="home-about-description">
                    <h1 style={{ fontSize: "2.6em" }}>
                        PROFESSIONAL <span className="purple"> SKILLSET </span>
                    </h1>
                </Col>
            </Row>
            <Techstack />
        </Container>
    )
}

export default SkillSet;