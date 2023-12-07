/* eslint-disable react/prop-types */
import { Container, Row, Col } from "react-bootstrap";
import "./ProjectPreview.css";
import { useState, useEffect } from "react";

export function ProjectPreview({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const image = document.getElementById("scrollingImage");
    if (isHovered) {
      image.style.transform = `translateY(-76%)`;
      image.style.transitionDuration = "10s";
    } else {
      image.style.transform = `translateY(0%)`;
      image.style.transitionDuration = "10s";
    }
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="project-preview">
      <Container className="project-preview-container">
        <Row className={project.reversed ? "project-row-reversed" : ""}>
          <Col lg={8} className="project-image-container">
            <img
              className={`projectImg ${isHovered ? "hovered" : ""}`}
              id="scrollingImage"
              src={project.projectImage}
              alt="Web page Preview"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </Col>
          <Col lg={4} className="project-text-container">
            <div>
              <strong>{project.projectName}</strong>{" "}
              <span>{project.projectDate}</span>
            </div>
            <p>{project.projectDetails}</p>
            <div className="skills-container">
              <span>{project.jsFramework}</span>
              <span>{project.cssFramework}</span>
            </div>
            <div className="projects-links-container">
              <span>
                <a href="">
                  {`Code `}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-github"
                  >
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </a>
              </span>
              <span>
                <a href="">
                  {`Live Demo `}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-external-link"
                  >
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                </a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
