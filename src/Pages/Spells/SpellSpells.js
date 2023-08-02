import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import SpellSpells from "../../Components/SpellsComponents/Spells"


const SpellsMain = () => {
  return (
    <>
    <p></p>
    <h1><p>Character Spells</p></h1>
      <Container>
        <Row>
        <Col>
        <div className="border-component">
          <SpellSpells />
          </div>
        </Col>
        </Row>
      </Container>
    </>
  )
}

export default SpellsMain
