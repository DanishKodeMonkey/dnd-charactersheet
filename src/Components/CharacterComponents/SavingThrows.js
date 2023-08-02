import React, { useState } from "react"
import { Form, Container, Row, Col} from "react-bootstrap"
import './Character.css'

const SavingThrows = () => {
  const [savingThrows, setsavingThrows] = useState({
    fortitude: "",
    reflex: "",
    willpower: "",
  })
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setsavingThrows((prevAttributes) => ({
      ...prevAttributes,
      [name]: value,
    }))
  }
  return (
    <>
    <p></p>
    <h3><p>Saving Throws</p></h3>
    <hr />
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group
              as={Row}
              controlId="formFortitude">
              <Form.Label
                column
                sm="6"
                className="label-text">
                Fortitude
                (Constitution)
              </Form.Label>
              <Col sm="5">
                <Form.Control
                  type="number"
                  name="fortitude"
                  value={savingThrows.fortitude}
                  onChange={handleInputChange}
                  placeholder="0"
                  className="bigger-input"
                  min="-5"
                  max="20"
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              controlId="formReflex">
              <Form.Label
                column
                sm="6"
                className="label-text">
                Reflex
                (Dexterity)
              </Form.Label>
              <Col sm="5">
                <Form.Control
                  type="number"
                  name="reflex"
                  value={savingThrows.reflex}
                  onChange={handleInputChange}
                  placeholder="0"
                  className="bigger-input"
                  min="-5"
                  max="20"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formWillpower">
              <Form.Label
                column
                sm="6"
                className="label-text">
                Willpower
                (Wisdom)
              </Form.Label>
              <Col sm="5">
                <Form.Control
                  type="number"
                  name="willpower"
                  value={savingThrows.willpower}
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
export default SavingThrows
