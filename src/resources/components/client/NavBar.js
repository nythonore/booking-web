import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Image } from "react-bootstrap";

import Logo from "../../../assets/images/logo.jpeg";

const NavBar = () => {
  return (
    <Navbar bg="white" expand="lg" sticky="top" className="client-navbar shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="font-wg-500 color-dark">
          <Image src={Logo} alt="GoDiscoverAfrica" className="img-fluid" width="15%" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar" />

        <Navbar.Collapse id="basic-navbar">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/">Hotels</Nav.Link>
            <Nav.Link as={Link} to="/">Spaces</Nav.Link>
            <Nav.Link as={Link} to="/">Tours</Nav.Link>
            <Nav.Link as={Link} to="/">Cars</Nav.Link>
            <Nav.Link as={Link} to="/">Events</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
