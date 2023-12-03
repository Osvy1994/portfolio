/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col } from "react-bootstrap";
import { Linkedin, Github } from "react-bootstrap-icons";
import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <Container className="pt-md-5">
        <Row>
          <Col className="footer-title">
            <h3>CONTACT</h3>
            <h1>Don't be shy! Hit me up! 👇</h1>
          </Col>
        </Row>
        <Row className="footer-contact-container">
          <Col md={6} className="footer-contact">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#147efb"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-map-search"
              >
                <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                <path d="M9 4v13"></path>
                <path d="M15 7v5"></path>
                <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M20.2 20.2l1.8 1.8"></path>
              </svg>
            </span>
            <div className="footer-contact-text">
              <h5>Location</h5>
              <a href="">
                <p>Italy</p>
              </a>
            </div>
          </Col>
          <Col md={6} className="footer-contact">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#147efb"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-mail"
              >
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                <path d="M3 7l9 6l9 -6"></path>
              </svg>
            </span>
            <div className="footer-contact-text">
              <h5>Mail</h5>
              <a href="">
                <p>example@gmail.com</p>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="copyright-container">
        <p>Copyright © 2023. All rights are reserved</p>
        <div className="copyright-icons">
          <a href="">
            <Linkedin size={30} color="white" />
          </a>
          <a href="">
            <Github size={30} color="white" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
