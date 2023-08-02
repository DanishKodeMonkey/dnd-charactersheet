import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import InvGear from "../../Components/InventoryComponents/Gear"
import InvWeapons from "../../Components/InventoryComponents/Weapons"

const InventoryGear = () => {
  return (
    <>
    <p></p>
    <h1><p>Character Gear</p></h1>
      <Container>
        <Row>
        <Col>
        <div className="border-component">
          <InvWeapons />
          </div>
        </Col>
        </Row>
        <Row>
          <Col>
          <div className="border-component">
            <InvGear />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default InventoryGear
