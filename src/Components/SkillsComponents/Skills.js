import React, { useState } from "react"
import { Form, Container, Row, Col } from "react-bootstrap"
import SkillRow from "./SkillRow"
import SkillRowLabel from "./SkillRowLabel"
import SkillRowLabelMobile from "./SkillRowLabelMobile"

const SkillList = () => {
  const [data, setData] = useState([
    // Initial data for each skill row
    {
      skillName: "appraise",
      keyAbility: "INT",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "balance",
      keyAbility: "DEX*",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "bluff",
      keyAbility: "CHA",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "climb",
      keyAbility: "STR*",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "concentration",
      keyAbility: "CON",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "craft1",
      keyAbility: "INT",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "craft2",
      keyAbility: "INT",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "craft3",
      keyAbility: "INT",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "decipherscript",
      keyAbility: "INT",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "diplomacy",
      keyAbility: "CHA",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "disabledevice",
      keyAbility: "INT",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "disguise",
      keyAbility: "CHA",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "escapeartist",
      keyAbility: "DEX*",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "forgery",
      keyAbility: "INT",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "gatherinformation",
      keyAbility: "CHA",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "handleanimal",
      keyAbility: "CHA",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "heal",
      keyAbility: "WIS",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "hide",
      keyAbility: "DEX*",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "intimidate",
      keyAbility: "CHA",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "jump",
      keyAbility: "STR*",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "knowledge1",
      keyAbility: "INT",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "knowledge2",
      keyAbility: "INT",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "knowledge3",
      keyAbility: "INT",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "knowledge4",
      keyAbility: "INT",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "knowledge5",
      keyAbility: "INT",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "listen",
      keyAbility: "WIS",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "movesilently",
      keyAbility: "DEX*",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "openlock",
      keyAbility: "DEX",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "perform1",
      keyAbility: "CHA",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "perform2",
      keyAbility: "CHA",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "perform3",
      keyAbility: "CHA",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "profession1",
      keyAbility: "WIS",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "profession2",
      keyAbility: "WIS",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "ride",
      keyAbility: "DEX",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "search",
      keyAbility: "INT",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "sensemotive",
      keyAbility: "WIS",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "sleightofhand",
      keyAbility: "DEX*",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "spellcraft",
      keyAbility: "INT",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "spot",
      keyAbility: "WIS",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "survival",
      keyAbility: "WIS",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "sswim",
      keyAbility: "STR*",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "tumble",
      keyAbility: "DEX*",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "usemagicdevice",
      keyAbility: "CHA",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
    {
      skillName: "userope",
      keyAbility: "DEX",
      skillModifier: 0,
      abilityModifier: 0,
      ranks: 0,
      miscModifier: 0,
    },
  ])

  const handleInputChange = (index, field, value) => {
    const updatedData = [...data]
    updatedData[index][field] = value
    setData(updatedData)
  }

  return (
    <Container>
      <Form>
      <Row>

        <SkillRowLabel />

        {data.map((skill, index) => (
          <React.Fragment key={index}>
          <Col xs="4" className="sm-d-none"><SkillRowLabelMobile /></Col>
          <Col xs="8" sm="12" className="pt-2"><SkillRow
            key={index}
            skillName={skill.skillName}
            keyAbility={skill.keyAbility}
            skillModifier={skill.skillModifier}
            abilityModifier={skill.abilityModifier}
            ranks={skill.ranks}
            miscModifier={skill.miscModifier}
            handleInputChange={(field, value) =>
              handleInputChange(index, field, value)
            }
          /></Col>
          </React.Fragment>
        ))}
        
        </Row>
      </Form>
    </Container>
  )
}

export default SkillList
