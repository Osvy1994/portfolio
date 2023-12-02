import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavbarComp.css"

export function NavbarComp() {
  return (
    <Navbar expand="md" className="navbar navbar-light fw-bold p-3">
      <Container fluid>
        <Navbar.Brand href="#">Osvaldo.dev</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="bold-font ms-auto my-2 my-lg-0"
            style={{ maxHeight: "220px" }}
            navbarScroll
          >
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
