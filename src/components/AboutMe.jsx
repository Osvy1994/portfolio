import { Container, Row, Col } from "react-bootstrap";
import "./AboutMe.css";

export function AboutMe() {
  return (
    <div className="about" id="about-me">
      <Container
        fluid="md"
        className="about-container pt-lg-5"
        style={{ maxWidth: "1000px"} }
      >
        <Row>
          <Col md={6}>
            <div className="image-container">
              <img
                className="laptop-image"
                src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp"
                alt="Laptop and coffee picture"
              />
              <div className="logo-container">
                <img
                  src="https://www.stefantopalovic.com/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg"
                  alt="Front-end developer text"
                />
              </div>
              <div className="logo-emoji-container">
                <img
                  src="https://www.stefantopalovic.com/static/media/working-emoji.c5325f52b5be329995a5.png"
                  alt="Laptop Emoji"
                  width={60}
                />
              </div>
            </div>
          </Col>
          <Col className="about-text-container" md={6}>
            <h5>ABOUT ME</h5>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
              tellus at leo iaculis aliquam. Pellentesque in nisi sit amet mi
              dignissim maximus. Suspendisse convallis imperdiet purus, quis
              interdum orci malesuada sed. Curabitur egestas dolor vitae libero
              dictum blandit. Nunc quis pellentesque neque, sed hendrerit magna.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
