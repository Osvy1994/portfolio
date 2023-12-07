import { Container, Row, Col } from "react-bootstrap";
import { Linkedin, Github } from "react-bootstrap-icons";
import "./HeroSection.css";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <div className="hero" id="home">
      <Container fluid="md" className="pt-lg-5" style={{ maxWidth: "1000px" }}>
        <Row className="hero-main">
          <Col md={6} className="hero-text">
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
          <Col md={6} className="hero-image">
            <img
              className="img-fluid"
              src="./my-picture.jpg"
              alt="Profile Picture"
            />
          </Col>
        </Row>
        <Row>
          <Col className="tech-stack">
            <p>Tech Stack</p>
            {screenWidth < 768 ? (
              <div className="tech-stack-separator-mobile"></div>
            ) : (
              <p className="tech-stack-separator">|</p>
            )}

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
