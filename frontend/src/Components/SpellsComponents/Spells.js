import React, { useState } from "react"
import { Button, Form, Container, Row, Col } from "react-bootstrap"
import "./Spells.css"

const SpellsMain = ({onSpellListChange}) => {
  //array of spells
  const [spells, setSpells] = useState([])

  //function to handle adding a new language
  const handleAddSpell = () => {
    setSpells((prevSpells) => [...prevSpells, { tier: 0, spell:"" }])
  }

  //function to handle changes in the language input fields
  const handleChange = (index, field, value) => {
    const updatedSpells = [...spells];
    updatedSpells[index][field] = value;
    setSpells(updatedSpells);
    onSpellListChange(updatedSpells)
  };
  //Function to handle deleting spells
  const handleDeleteSpells = (index) => {
    const updatedSpells = [...spells]
    updatedSpells.splice(index, 1)
    setSpells(updatedSpells)
    onSpellListChange(updatedSpells)
  }

  return (
    <div>
      <h5>Spells</h5>
      {/* Render the "Add spell" button using React-Bootstrap */}
      <p></p>
      <Button
        variant="dark"
        onClick={handleAddSpell}>
        Add Spell
      </Button>

      {/* Render the label row */}
      <Container>
        <Row className="form-label-custom-possesions no-gutter">
        <Col xs={6}>
        <strong>Tier</strong>
        </Col>
          <Col xs={6}>
            <strong>Spell</strong>
          </Col>
        </Row>
      </Container>

      {/* Render the form for the list of spells */}
      <Container>
        {spells.map((spell, index) => (
          <Row
            key={index}
            className="mt-1">
            <Col sm={1} xs={1} className="no-gutter">
                        {/* Tier selection dropdown */}
                        <Form.Select value={spell.tier} onChange={(e) => handleChange(index, "tier", parseInt(e.target.value))}>
                        <option value={0}>0</option>
                        <option value={1}>1st</option>
                        <option value={2}>2nd</option>
                        <option value={3}>3rd</option>
                        <option value={4}>4th</option>
                        <option value={5}>5th</option>
                        <option value={6}>6th</option>
                        <option value={7}>7th</option>
                        <option value={8}>8th</option>
                        <option value={9}>9th</option>
                        </Form.Select>
            </Col>
            <Col
              sm={10}
              xs={8}
              className="no-gutter">

              <Form.Control
              type="text"
              value={spell.spell}
              placeholder="Enter spell"
              onChange={(e) => handleChange(index, "spell", e.target.value)}
            />
            </Col>
            <Col
              sm={1}
              xs={2}
              className="no-gutter">
              {/* Delete button */}
              <Button
                variant="danger"
                style={{ width: "100%", whiteSpace: "none" }}
                className="no-gutter"
                onClick={() => handleDeleteSpells(index)}>
                Delete
              </Button>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  )
}
export default SpellsMain
