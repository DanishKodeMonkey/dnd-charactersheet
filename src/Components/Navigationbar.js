import React from "react"
import { Nav, Navbar, NavLink, NavItem, Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const Navigationbar = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#212529",
          color: "white",
          padding: 0,
          margin: 0,
          width: "100%",
          textAlign: "center",
        }}>
        <Container fluid>
          <Row>
            <Col>
              <h1>Dungeons and Dragons 3.5e</h1>
              <h2>Character Sheet</h2>
            </Col>
          </Row>
        </Container>
      </div>
      <Navbar
        collapseOnSelect
        expand="sm"
        bg="dark"
        variant="dark"
        >
              <Navbar.Toggle
                aria-controls="navbarScroll"
                data-bs-target="#navbarScroll"
              />
              <Navbar.Collapse id="navbarScroll">
                <Nav justify variant="tabs">
                  <NavItem>
                    <NavLink
                      eventKey="1"
                      as={Link}
                      to="/">
                      Character
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      eventKey="2"
                      as={Link}
                      to="/Inventory">
                      Inventory
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      eventKey="3"
                      as={Link}
                      to="/Skills">
                      Skills
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      eventKey="4"
                      as={Link}
                      to="/Spells">
                      Spells
                    </NavLink>
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigationbar
