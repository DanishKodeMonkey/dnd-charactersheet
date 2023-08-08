import React from "react"
import { Form, Container, Row, Col} from "react-bootstrap"
import "./Inventory.css"


//Function to handle the collapseability of each weapon in main component
//Accept weaponName as prop and establish

const InvArmor = ({armor, setArmor}) => {

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setArmor((prevAttributes) => ({
      ...prevAttributes,
      [name]: value,
    }))
  }

  return (
    <>

      <div className="border-weapons">
          <Container>
            <Row>
              <Col>
                <Form>
                  {/* ==================== ROW 1 BELOW ==============*/}
                  <Row>
                    <Col sm="4">
                      <Form.Group
                        as={Row}
                        controlId="formArmor">
                        <Form.Label
                          column
                          sm="6"
                          className="form-label-custom">
                          Armor/Protective item
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="armorname"
                          value={armor.armorname}
                          onChange={handleInputChange}
                          placeholder="Name of armor"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm="3">
                      <Form.Group
                        as={Row}
                        controlId="formType">
                        <Form.Label
                          column
                          sm="6"
                          className="form-label-custom">
                          Type
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="armortype"
                          value={armor.armortype}
                          onChange={handleInputChange}
                          placeholder="ex. light/heavy"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm="3" xs="6">
                      <Form.Group
                        as={Row}
                        controlId="formAcBonus">
                        <Form.Label
                          column
                          sm="6"
                          className="form-label-custom">
                          AC Bonus
                        </Form.Label>
                        <Form.Control
                          type="number"
                          name="acbonus"
                          value={armor.acbonus}
                          onChange={handleInputChange}
                          placeholder="0"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm="2" xs="6">
                      <Form.Group
                        as={Row}
                        controlId="formMaxDex">
                        <Form.Label
                          column
                          sm="6"
                          className="form-label-custom">
                          Max Dex
                        </Form.Label>
                        <Form.Control
                          type="number"
                          name="maxdex"
                          value={armor.maxdex}
                          onChange={handleInputChange}
                          placeholder="0"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* ==================== ROW 2 BELOW ==============*/}
                  <Row>
                    <Col sm="3" xs="6">
                      <Form.Group
                        as={Row}
                        controlId="formCheckPenalty">
                        <Form.Label
                          column
                          sm="6"
                          className="form-label-custom">
                          Check Penalty
                        </Form.Label>
                        <Form.Control
                          type="number"
                          name="checkpenalty"
                          value={armor.checkpenalty}
                          onChange={handleInputChange}
                          placeholder="0"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm="3" xs="6">
                      <Form.Group
                        as={Row}
                        controlId="formSpellFailure">
                        <Form.Label
                          column
                          sm="6"
                          className="form-label-custom">
                          Spell Failure
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="spellfailure"
                          value={armor.spellfailure}
                          onChange={handleInputChange}
                          placeholder="I dunno vOv"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm="3" xs="6">
                      <Form.Group
                        as={Row}
                        controlId="formSpeed">
                        <Form.Label
                          column
                          sm="6"
                          className="form-label-custom">
                          Speed
                        </Form.Label>
                        <Form.Control
                          type="number"
                          name="speed"
                          value={armor.speed}
                          onChange={handleInputChange}
                          placeholder="0"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm="3" xs="6">
                    <Form.Group
                      as={Row}
                      controlId="formWeight">
                      <Form.Label
                        column
                        sm="6"
                        className="form-label-custom">
                        Weight
                      </Form.Label>
                        <Form.Control
                          type="number"
                          name="weight"
                          value={armor.weight}
                          onChange={handleInputChange}
                          placeholder="0"
                        />
                    </Form.Group>
                  </Col>
                  </Row>
                  {/* ================== ROW 3 BELOW ==============*/}
                  <Row>
                    <Col sm="12">
                      <Form.Group
                        as={Row}
                        controlId="formSpecialProperties">
                        <Form.Label
                          column
                          sm="12"
                          className="form-label-custom">
                          Special Properties
                        </Form.Label>
                          <Form.Control
                            type="text"
                            name="specialproperties"
                            value={armor.specialproperties}
                            onChange={handleInputChange}
                            placeholder=""
                          />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
      </div>
    </>
  )
}
export default InvArmor


