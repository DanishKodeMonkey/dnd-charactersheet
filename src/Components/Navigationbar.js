import React from "react"
import {
  Nav,
  Navbar,
  NavLink,
  NavItem,
  Container,
  Row,
  Col,
  NavDropdown,
} from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Custom.css"

const Navigationbar = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#212529",
          color: "white",
          padding: 0,
          margin: 0,
          width: "100%",
          textAlign: "center",
        }}>
        <Container>
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
        variant="dark">
        <Navbar.Toggle
          aria-controls="navbarScroll"
          data-bs-target="#navbarScroll"
          style={{ width: "100%" }}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            style={{ width: "100%", fontSize: "20px" }}
            justify
            variant="tabs"
            defaultActiveKey="/character/details">
            <NavDropdown
              title="Character"
              id="character-dropdown">
              <NavDropdown.Item
                eventKey="11"
                as={Link}
                to="/character/details">
                Details
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey="12"
                as={Link}
                to="/character/stats">
                Stats
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Inventory"
              id="inventory-dropdown">
              <NavDropdown.Item
                eventKey="21"
                as={Link}
                to="/inventory/gear">
                Gear
              </NavDropdown.Item>
              <NavDropdown.Item
              eventKey="22"
              as={Link}
              to="/inventory/possesions">
              Possesions
            </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Skills"
              id="skills-dropdown">
              <NavDropdown.Item
                eventKey="31"
                as={Link}
                to="/skills/abilities">
                Abilities
              </NavDropdown.Item>
              <NavDropdown.Item
              eventKey="32"
              as={Link}
              to="/skills/skills">
              Skills
            </NavDropdown.Item>
            </NavDropdown>
            <NavItem>
              <NavLink
                eventKey="41"
                as={Link}
                to="/spells">
                Spells
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Navigationbar
