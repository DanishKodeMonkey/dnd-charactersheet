import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import SkillFeatsAbilities from "../../Components/SkillsComponents/FeatsAbilities"
import SkiLanguage from "../../Components/SkillsComponents/Languages"

const SkillAbilities = () => {
  return (
    <>
      <p></p>
      <h1>
        <p>Character Abilities, Feats, and Languages</p>
      </h1>
      <Container>
        <Row>
          <Col
            sm="6"
            xs="12">
            <div className="border-component">
              <SkillFeatsAbilities
                title={"Feats"}
                type={"Feat"}
              />
            </div>
          </Col>
          <Col
            sm="6"
            xs="12">
            <div className="border-component">
              <SkillFeatsAbilities
                title={"Special Abilities"}
                type={"Ability"}
              />
            </div>
          </Col>
          <p></p>
          <Col>
            <div className="border-component">
              <SkiLanguage />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SkillAbilities
