import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import SkillFeats from "../../Components/SkillsComponents/Feats"
import SkillSpecialAbility from "../../Components/SkillsComponents/SpecialAbilities"
import SkillLanguages from "../../Components/SkillsComponents/Languages"

const SkillAbilities = () => {
  return (
    <>
    <p></p>
    <h1><p>Character Abilities, Feats, and Languages</p></h1>
      <Container>
        <Row>
        <Col>
        <div className="border-component">
          <SkillFeats />
          </div>
        </Col>
        </Row>
        <Row>
          <Col>
          <div className="border-component">
            <SkillSpecialAbility/>
            </div>
          </Col>
        </Row>
        <Row>
        <Col>
        <div className="border-component">
          <SkillLanguages/>
          </div>
        </Col>
      </Row>
      </Container>
    </>
  )
}

export default SkillAbilities
