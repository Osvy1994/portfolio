import { Container, Row, Col } from "react-bootstrap";
import { Linkedin, Github } from "react-bootstrap-icons";
import "./HeroSection.css";

export function HeroSection() {
  return (
    <div className="hero">
      <Container className="pt-lg-5" fluid="md" style={{ maxWidth: "1000px" }}>
        <Row className="hero-main">
          <Col md={6} className="hero-text order-2 order-md-first">
            <h1>Front-End React Developer👋🏻</h1>
            <p className="gray-font">
              Hi. I'm Osvaldo Madrigal. A passionate Front-end React Developer
            </p>
            <div className="hero-icons">
              <a
                aria-label="linkedin"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com"
              >
                <Linkedin color="#2d2e32" size={32} />
              </a>
              <a
                aria-label="github"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.github.com"
              >
                <Github color="#2d2e32" size={32} />
              </a>
            </div>
          </Col>
          <Col md={6} className="hero-image order-1 order-md-last">
            <img
              className="img-fluid"
              src="https://pbs.twimg.com/profile_images/1605523773192552448/PDSA3e9o_400x400.jpg"
              alt="Profile Picture"
            />
          </Col>
        </Row>
        <Row>
          <Col className="tech-stack">
            <p>Tech Stack</p>
            <p className="tech-stack-separator">|</p>
            <div className="tech-stack-icons">
              <img
                src="https://skillicons.dev/icons?i=html,css"
                alt="HTML and CSS Icons"
              />
              <img
                src="https://skillicons.dev/icons?i=js,ts"
                alt="JavaScript and TypeScript Icons"
              />
              <img
                src="https://skillicons.dev/icons?i=react,next"
                alt="React and Next.js Icons"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
