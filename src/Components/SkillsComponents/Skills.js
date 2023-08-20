import React, { useState } from "react"
import { Form, Container, Row, Col } from "react-bootstrap"
import SkillRow from "./SkillRow"
import SkillRowLabel from "./SkillRowLabel"
import SkillRowLabelMobile from "./SkillRowLabelMobile"

const SkillList = ({ onDataChange }) => {
  const [data, setData] = useState([
    // Initial data for each skill row
    {
      classSkill: false,
      skillName: "appraise",
      keyAbility: "INT",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "balance",
      keyAbility: "DEX*",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "bluff",
      keyAbility: "CHA",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "climb",
      keyAbility: "STR*",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "concentration",
      keyAbility: "CON",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "craft1",
      keyAbility: "INT",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "craft2",
      keyAbility: "INT",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "craft3",
      keyAbility: "INT",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "decipherscript",
      keyAbility: "INT",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "diplomacy",
      keyAbility: "CHA",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "disabledevice",
      keyAbility: "INT",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "disguise",
      keyAbility: "CHA",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "escapeartist",
      keyAbility: "DEX*",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "forgery",
      keyAbility: "INT",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "gatherinformation",
      keyAbility: "CHA",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "handleanimal",
      keyAbility: "CHA",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "heal",
      keyAbility: "WIS",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "hide",
      keyAbility: "DEX*",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "intimidate",
      keyAbility: "CHA",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "jump",
      keyAbility: "STR*",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "knowledge1",
      keyAbility: "INT",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "knowledge2",
      keyAbility: "INT",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "knowledge3",
      keyAbility: "INT",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "knowledge4",
      keyAbility: "INT",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "knowledge5",
      keyAbility: "INT",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "listen",
      keyAbility: "WIS",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "movesilently",
      keyAbility: "DEX*",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "openlock",
      keyAbility: "DEX",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "perform1",
      keyAbility: "CHA",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "perform2",
      keyAbility: "CHA",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "perform3",
      keyAbility: "CHA",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "profession1",
      keyAbility: "WIS",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "profession2",
      keyAbility: "WIS",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "ride",
      keyAbility: "DEX",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "search",
      keyAbility: "INT",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "sensemotive",
      keyAbility: "WIS",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "sleightofhand",
      keyAbility: "DEX*",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "spellcraft",
      keyAbility: "INT",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "spot",
      keyAbility: "WIS",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "survival",
      keyAbility: "WIS",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "sswim",
      keyAbility: "STR*",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "tumble",
      keyAbility: "DEX*",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "usemagicdevice",
      keyAbility: "CHA",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      classSkill: false,
      skillName: "userope",
      keyAbility: "DEX",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
  ])

  //Funciton handling input change for a skill
  const handleInputChange = (index, field, value) => {
    const updatedData = [...data]
    updatedData[index][field] = value
    setData(updatedData)
    //Call the parents callback function with the update
    onDataChange(updatedData)
  }

  return (
    <Container>
      <Form>
        <Row>
          <SkillRowLabel />

          {data.map((skill, index) => (
            <React.Fragment key={index}>
              <Col
                xs="4"
                className="sm-d-none">
                <SkillRowLabelMobile />
              </Col>
              <Col
                xs="8"
                sm="12"
                className="pt-2">
                <SkillRow
                  key={index}
                  classSkill={skill.classSkill}
                  skillName={skill.skillName}
                  keyAbility={skill.keyAbility}
                  skillModifier={skill.skillModifier}
                  abilityModifier={skill.abilityModifier}
                  ranks={skill.ranks}
                  miscModifier={skill.miscModifier}
                  handleInputChange={(field, value) =>
                    handleInputChange(index, field, value)
                  }
                />
              </Col>
            </React.Fragment>
          ))}
        </Row>
      </Form>
    </Container>
  )
}

export default SkillList
