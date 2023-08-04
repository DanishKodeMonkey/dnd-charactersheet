import React from "react"
import { Row } from "react-bootstrap"
import "./Skills.css"
const SkillRowLabelMobile = () => {
  return (
          <Row className="d-xs-flex d-sm-none form-label-custom-possesions" style={{width:"8.54rem", paddingLeft:"1rem"}}>
          <Row sm="2" className="mt-0 ps-1">Class Skill</Row>
            <Row sm="2" className="mt-0 ps-1">Skill Name</Row>
            <Row sm="2" className="mt-1 ps-1">Key Ability</Row>
            <Row sm="2" className="mt-2 ps-1">Skill Mod</Row>
            <Row sm="2" className="mt-3 ps-1">Ability Mod</Row>
            <Row sm="2" className="mt-3 ps-1">Ranks</Row>
            <Row sm="2" className="mt-3 pb-2 ps-1">Misc Mod</Row>
          </Row>
  )
}

export default SkillRowLabelMobile
