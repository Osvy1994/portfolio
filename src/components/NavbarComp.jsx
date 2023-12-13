import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavbarComp.css";
import { useState, useCallback } from "react";
import { useMediaQuery } from "react-responsive";

export function NavbarComp() {
  const [expanded, setExpanded] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleNavClose = useCallback(() => {
    if (isMobile) {
      setExpanded(false);
    }
  }, [isMobile]);

  return (
    <Navbar
      expand="md"
      className="navbar fixed-top navbar-light fw-bold p-3"
      id="mainNavbar"
      //collapseOnSelect (variant)
      expanded={expanded}
    >
      <Container fluid>
        <Navbar.Brand href="#">Osvaldo.dev</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="nav-links bold-font ms-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link href="#home" onClick={handleNavClose}>
              Home
            </Nav.Link>
            <Nav.Link href="#about-me" onClick={handleNavClose}>
              About
            </Nav.Link>
            <Nav.Link href="#projects-list" onClick={handleNavClose}>
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" onClick={handleNavClose}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
