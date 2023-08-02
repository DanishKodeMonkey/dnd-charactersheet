import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import InvMoney from "../../Components/InventoryComponents/Money"
import InvPossesions from "../../Components/InventoryComponents/Possesions"

const InventoryPossesions = () => {
  return (
    <>
    <p></p>
    <h1><p>Character Possesions</p></h1>
      <Container>
        <Row>
        <Col>
        <div className="border-component">
          <InvPossesions />
          </div>
        </Col>
        </Row>
        <Row>
          <Col>
          <div className="border-component">
            <InvMoney/>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default InventoryPossesions
