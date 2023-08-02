import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Attributes from "../../Components/CharacterComponents/Attributes"
import Status from "../../Components/CharacterComponents/Status"
import SavingThrows from "../../Components/CharacterComponents/SavingThrows"
const CharacterStats = () => {
  return (
    <>
    <p></p>
    <h1><p>Character Statistics</p></h1>
      <Container>
        <Row>
        <Col>
        <div className="border-component">
          <Status />
          </div>
        </Col>
          <Col>
          <div className="border-component">
            <Attributes />
            </div>
          </Col>
        </Row>
        <Row>
        <Col>
        <div className="border-component">
        <SavingThrows />
        </div>
        </Col>
        </Row>
      </Container>
    </>
  )
}

export default CharacterStats
