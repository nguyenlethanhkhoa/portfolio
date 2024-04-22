import { Container } from "react-bootstrap";
import Techstack from "./tech-stack.component";

const SkillSet: React.FC = () => {
    return (
        <Container fluid className="about-section">
            <h1 className="project-heading" style={{ fontSize: "2.6em" }}>
                PROFESSIONAL <span className="purple">SKILLSET </span>
            </h1>
            <Techstack />
        </Container>
    )
}

export default SkillSet;