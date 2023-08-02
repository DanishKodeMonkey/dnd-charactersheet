import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Details from "../../Components/CharacterComponents/Details"

const CharacterDetails = () => {
  return (
    <>
    <p></p>
    <h1><p>Character Statistics</p></h1>
      <Container>
        <Row>
        <Col>
        <div className="border-component">
          <Details />
          </div>
        </Col>
        </Row>
      </Container>
    </>
  )
}

export default CharacterDetails
