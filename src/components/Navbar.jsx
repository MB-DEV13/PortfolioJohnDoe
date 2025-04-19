import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "../css/MyNavbar.css";

function MyNavbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const getLinkClass = (path) =>
    currentPath === path ? "active-link nav-link" : "nav-link";

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid className="px-3 px-md-4">
        <Navbar.Brand as={Link} to="/">
          JOHN DOE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={getLinkClass("/")}>
              HOME
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Services"
              className={getLinkClass("/Services")}
            >
              SERVICES
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Portfolio"
              className={getLinkClass("/Portfolio")}
            >
              PORTFOLIO
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Contact"
              className={getLinkClass("/Contact")}
            >
              CONTACT
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/LegalNotice"
              className={getLinkClass("/LegalNotice")}
            >
              MENTIONS LEGALES
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
