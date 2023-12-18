import React, { useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import SpellsMain from "../../Components/SpellsComponents/Spells"

const SpellsSpells = () => {
  const [spellList, setSpellList] = useState([])

  const handleSpellListChange = (updatedSpells) => {
    setSpellList(updatedSpells)
  }

  const handleSaveSpellData = () => {
    console.log("Spell List:", spellList)
  }
  return (
    <Container>
      <h1>
        <p>Character Spells</p>
      </h1>
      <Row>
        <Button
          xs="12"
          variant="primary"
          onClick={handleSaveSpellData}>
          Save Spell List
        </Button>
        <p></p>
      </Row>
      <Row>
        <Col>
          <div className="border-component">
            <SpellsMain onSpellListChange={handleSpellListChange} />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default SpellsSpells
