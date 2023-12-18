import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import "./Skills.css"

//Seperate Row for labeling the skill list on smaller and bigger screens.
const SkillRowLabel = () => {
  return (
    <Container>
        <Row className="form-label-custom-possesions" sm={12} style={{ alignItems: "flex-start"}}>
          <Row><h1><center>SKILLS</center></h1></Row>
          <Row className="d-none d-sm-flex"> 
          <Col sm="1" style={{ writingMode: "vertical-lr", width:"2.5rem"}}>Class Skill</Col>
            <Col sm="4" style={{alignSelf:"flex-end"}}>Skill Name</Col>
            <Col sm="3" style={{alignSelf:"flex-end"}}>Ability</Col>
            <Col sm="1" style={{alignSelf:"flex-end"}}>Skill Modifier</Col>
            <Col sm="1" style={{alignSelf:"flex-end"}}>Ability Modifier</Col>
            <Col sm="1" style={{alignSelf:"flex-end"}}>Ranks</Col>
            <Col sm="1" style={{alignSelf:"flex-end"}} className="p-0 m-0">Misc Modifier</Col>
          </Row>
        </Row>
        </Container>
  )
}

export default SkillRowLabel
