import React from "react"
import { Form, Col, Row, Container } from "react-bootstrap"
import "./Skills.css"


// Component for reusable rendered rows to be used in parent component SkillSkills.js
const SkillRow = (props) => {
  const {
    classSkill,
    skillName,
    keyAbility,
    skillModifier,
    abilityModifier,
    ranks,
    miscModifier,
    handleInputChange,
  } = props

  return (
    <Container>
      <Row>
        <Form.Group
          as={Col}
          sm={1}
          style={{ width: "auto" }}>
          <Form.Check
            type="checkbox"
            aria-label="classskill"
            checked={classSkill}
            onChange={(e) => handleInputChange("classSkill", e.target.checked)}
          />
        </Form.Group>
        <Form.Group
          as={Col}
          sm={4}
          className="no-gutter">
          <Form.Label>{skillName}</Form.Label>
        </Form.Group>
        <Form.Group
          as={Col}
          sm={3}
          className="no-gutter">
          {keyAbility}
        </Form.Group>
        <Form.Group
          as={Col}
          sm={1}
          className="no-gutter">
          <Form.Control
            type="number"
            value={skillModifier}
            onChange={(e) => handleInputChange("skillModifier", e.target.value)}
          />
        </Form.Group>
        <Form.Group
          as={Col}
          sm={1}
          className="no-gutter">
          <Form.Control
            type="number"
            value={abilityModifier}
            onChange={(e) =>
              handleInputChange("abilityModifier", e.target.value)
            }
          />
        </Form.Group>
        <Form.Group
          as={Col}
          sm={1}
          className="no-gutter">
          <Form.Control
            type="number"
            value={ranks}
            onChange={(e) => handleInputChange("ranks", e.target.value)}
          />
        </Form.Group>
        <Form.Group
          as={Col}
          sm={1}
          className="no-gutter">
          <Form.Control
            type="number"
            value={miscModifier}
            onChange={(e) => handleInputChange("miscModifier", e.target.value)}
          />
        </Form.Group>
      </Row>
    </Container>
  )
}

export default SkillRow
