import { Container, Row } from "react-bootstrap";
import "./HeroSection.css";
import { Linkedin, Github } from "react-bootstrap-icons";

export function HeroSection() {
  return (
    <div className="hero">
      <Row className="info-row">
        <Container id="my-greeting" className="hero-container col-md-6 order-2 order-md-first">
          <h1>Front-End React Developer👋🏻</h1>
          <p>
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
        </Container>
        <Container id="profile-pic" className="hero-container col-md-6 order-1 order-md-last">
          <img
            className="profile-pic img-fluid"
            src="https://pbs.twimg.com/profile_images/1605523773192552448/PDSA3e9o_400x400.jpg"
            alt="Profile Picture"
          />
        </Container>
      </Row>
    </div>
  );
}
