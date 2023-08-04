import React, { useState } from "react"
import { Form, Container, Row, Col} from "react-bootstrap"
import './Character.css'
const Attributes = () => {
  const [attributes, setAttributes] = useState({
    strength: "",
    dexterity: "",
    constitution: "",
    intelligence: "",
    wisdom: "",
    charisma: "",
  })
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setAttributes((prevAttributes) => ({
      ...prevAttributes,
      [name]: value,
    }))
  }
  return (
    <>
    <p></p>
    <h3><p>Attributes</p></h3>
    <hr />
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group
              as={Row}
              controlId="formStrength">
              <Form.Label
                column
                sm="6"
                className="label-text">
                Strength
              </Form.Label>
              <Col sm="5">
                <Form.Control
                  type="number"
                  name="strength"
                  value={attributes.strength}
                  onChange={handleInputChange}
                  placeholder="0"
                  className="bigger-input"
                  min="0"
                  max="20"
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              controlId="formDexterity">
              <Form.Label
                column
                sm="6"
                className="label-text">
                Dexterity
              </Form.Label>
              <Col sm="5">
                <Form.Control
                  type="number"
                  name="dexterity"
                  value={attributes.dexterity}
                  onChange={handleInputChange}
                  placeholder="0"
                  className="bigger-input"
                  min="0"
                  max="20"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formConstitution">
              <Form.Label
                column
                sm="6"
                className="label-text">
                Constitution
              </Form.Label>
              <Col sm="5">
                <Form.Control
                  type="number"
                  name="constitution"
                  value={attributes.constitution}
                  onChange={handleInputChange}
                  placeholder="0"
                  className="bigger-input"
                  min="0"
                  max="20"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formIntelligence">
              <Form.Label
                column
                sm="6"
                className="label-text">
                Inteligence
              </Form.Label>
              <Col sm="5">
                <Form.Control
                  type="number"
                  name="intelligence"
                  value={attributes.intelligence}
                  onChange={handleInputChange}
                  placeholder="0"
                  className="bigger-input"
                  min="0"
                  max="20"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formWisdom">
              <Form.Label
                column
                sm="6"
                size="lg"
                className="label-text">
                Wisdom
              </Form.Label>
              <Col sm="5">
                <Form.Control
                  type="number"
                  name="wisdom"
                  value={attributes.wisdom}
                  onChange={handleInputChange}
                  placeholder="0"
                  className="bigger-input"
                  min="0"
                  max="20"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formCharisma">
              <Form.Label
                column
                sm="6"
                className="label-text">
                Charisma
              </Form.Label>
              <Col sm="5">
                <Form.Control
                  type="number"
                  name="charisma"
                  value={attributes.charisma}
                  onChange={handleInputChange}
                  placeholder="0"
                  className="bigger-input"
                  min="0"
                  max="20"
                />
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
    </>
  )
}
export default Attributes
