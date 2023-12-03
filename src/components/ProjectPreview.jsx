import { Container, Row, Col } from "react-bootstrap";

export function ProjectPreview(props) {
  return (
    <div className="project-preview">
      <Container>
        <Row>
          <Col>
            <img src={props.projectImage} alt="Web page Preview" />
          </Col>
          <Col>
            <h3>
              {props.projectName} ({props.projectDate})
            </h3>
            <p>{props.projectDetails}</p>
            <div>
              <span>{props.jsFramework}</span>
              <span>{props.cssFramework}</span>
            </div>
            <div>
              <span>
                <a href="">
                  Code
                </a>
              </span><span>
                <a href="">
                  Live Demo
                </a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
