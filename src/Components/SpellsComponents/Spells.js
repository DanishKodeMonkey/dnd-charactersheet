import React, { useState } from "react"
import { Button, Form, Container, Row, Col } from "react-bootstrap"
import "./Spells.css"

const SpellsMain = ({tier}) => {
  //array of spells
  const [spells, setSpells] = useState([])

  //function to handle adding a new language
  const handleAddSpell = () => {
    setSpells((prevSpells) => [...prevSpells, { spell:"" }])
  }

  //function to handle changes in the language input fields
  const handleChange = (index, field, value) => {
    const updatedSpells = [...spells];
    updatedSpells[index][field] = value;
    setSpells(updatedSpells);
  };
  //Function to handle deleting spells
  const handleDeleteSpells = (index) => {
    const updatedSpells = [...spells]
    updatedSpells.splice(index, 1)
    setSpells(updatedSpells)
  }

  return (
    <div>
      <h5>Tier {tier} Spells</h5>
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
          <Col xs={12}>
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
            <Col
              sm={11}
              xs={10}
              className="no-gutter">
              {/* Main language description input field */}
              <Form.Control
              type="text"
              value={spell.spell} // Change 'spells.spell' to 'spell.spell'
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
