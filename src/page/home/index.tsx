import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Introduction from "./introduction.component";
import TypingAnimation from "../../component/TypingAnimation.component";
import Particle from "./particle.component";
import SkillSet from "./skillset.component";
import { CONFIG } from "../../config";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Home: React.FC = () => {
	return (
		<section>
			<Container fluid className="home-section" id="home">
				<Particle />
				<Container className="home-content">
					<Row>
						<Col md={7} className="home-header">
							<h1 style={{ paddingBottom: 15 }} className="heading">
								Hi There!{" "}
								<span className="wave" role="img" aria-labelledby="wave">
									👋🏻
								</span>
							</h1>

							<h1 className="heading-name">
								I'M
								<strong className="main-name"> KHOA NGUYỄN</strong>
							</h1>

							<div style={{ padding: 50, textAlign: "left" }}>
								<TypingAnimation />
							</div>

							<blockquote className="blockquote mb-0 text-center">
								"Automation makes your days better!"{" "}
							</blockquote>
						</Col>

						<Col md={5} style={{ paddingBottom: 20 }}>
							<img
								src={homeLogo}
								alt="home pic"
								className="img-fluid"
								style={{
									maxHeight: "400px", 
									borderRadius: 500,
									border: '5px solid var(--icon-color)'
								}}
							/>
						</Col>
					</Row>
				</Container>
			</Container>
			<Introduction />
			<SkillSet />
			<Container>
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
		</section>
	);
}

export default Home;
