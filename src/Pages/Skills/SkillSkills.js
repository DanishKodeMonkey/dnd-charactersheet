import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import SkillSkills from "../../Components/SkillsComponents/Skills"

const SkillsMain = () => {
  return (
    <>
    <p></p>
    <h1><p>Character Skills</p></h1>
      <Container>
        <Row>
        <Col>
        <div className="border-component">
          <SkillSkills />
          </div>
        </Col>
        </Row>
      </Container>
    </>
  )
}

export default SkillsMain
