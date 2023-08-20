import React, { useState } from "react"
import { Container, Button } from "react-bootstrap"
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
    <h1><p>Character Spells</p></h1>
 <Button variant="primary" onClick={handleSaveSpellData}>Save Spell List</Button>
        <div className="border-component">
          <SpellsMain onSpellListChange={handleSpellListChange}/>
          </div>
</Container>
  )
}

export default SpellsSpells
