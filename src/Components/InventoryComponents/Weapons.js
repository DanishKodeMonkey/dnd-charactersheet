import React, { useState } from "react"
import { Form, Container, Row, Col, Collapse } from "react-bootstrap"
import "./Inventory.css"


//Function to handle the collapseability of each weapon in main component
//Accept weaponName as prop and establish

const InvWeapons = ({weaponName, weapons, setWeapons}) => {
    //Collapse function!
  const [open, setOpen] = useState(false)
  const handleCollapse = () => {
    setOpen((prevOpen) => !prevOpen)
  }
  
    //Handle changes to input fields to pass to parent component.
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setWeapons((prevWeapons) => ({
      ...prevWeapons,
      [weaponName]: {
        ...prevWeapons[weaponName],
        [name]: value,
      },
    }));
  };
  return (
    <>
      <div className="border-weapons">
        <h5 onClick={handleCollapse}>
          <p>{weaponName}</p>
        </h5>
        <hr />
        <Collapse in={open}>
          <Container>
            <Row>
              <Col>
                <Form>
                  {/* ==================== ROW 1 BELOW ==============*/}
                  <Row>
                    <Col sm="4">
                      <Form.Group
                        as={Row}
                        controlId="formAttack">
                        <Form.Label
                          column
                          sm="6"
                          className="form-label-custom">
                          Attack
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="attack"
                          value={weapons[weaponName].attack}
                          onChange={handleInputChange}
                          placeholder="Name of weapon"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm="3" xs="5">
                      <Form.Group
                        as={Row}
                        controlId="formBonus">
                        <Form.Label
                          column
                          sm="6"
                          className="form-label-custom">
                          Attack Bonus
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="bonus"
                          value={weapons[weaponName].bonus}
                          onChange={handleInputChange}
                          placeholder="ex. '2d10+dex'"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm="3" xs="4">
                      <Form.Group
                        as={Row}
                        controlId="formDamage">
                        <Form.Label
                          column
                          sm="6"
                          className="form-label-custom">
                          Damage
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="damage"
                          value={weapons[weaponName].damage}
                          onChange={handleInputChange}
                          placeholder="ex. '5d6+str'"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm="2" xs="3">
                      <Form.Group
                        as={Row}
                        controlId="formCritical">
                        <Form.Label
                          column
                          sm="6"
                          className="form-label-custom">
                          Critical
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="critical"
                          value={weapons[weaponName].critical}
                          onChange={handleInputChange}
                          placeholder="I forget how :S"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* ==================== ROW 2 BELOW ==============*/}
                  <Row>
                    <Col sm="2" xs="4">
                      <Form.Group
                        as={Row}
                        controlId="formRange">
                        <Form.Label
                          column
                          sm="6"
                          className="form-label-custom">
                          Range
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="range"
                          value={weapons[weaponName].range}
                          onChange={handleInputChange}
                          placeholder="ft"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm="2" xs="4">
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
                          name="type"
                          value={weapons[weaponName].type}
                          onChange={handleInputChange}
                          placeholder="ex. 'Slash/Blunt'"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm="8" xs="4">
                      <Form.Group
                        as={Row}
                        controlId="formNotes">
                        <Form.Label
                          column
                          sm="6"
                          className="form-label-custom">
                          Notes
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="notes"
                          value={weapons[weaponName].notes}
                          onChange={handleInputChange}
                          placeholder="ex. 'Cursed 2d10 dmg pr roll'"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* ================== ROW 3 BELOW ==============*/}
                  <Row>
                    <Col sm="6" xs="5">
                      <Form.Group
                        as={Row}
                        controlId="formAmmunition">
                        <Form.Label
                          column
                          sm="12"
                          className="form-label-custom">
                          Ammunition
                        </Form.Label>
                          <Form.Control
                            type="number"
                            name="ammunition"
                            value={weapons[weaponName].ammunition}
                            onChange={handleInputChange}
                            placeholder="Ammo left"
                            min="0"
                          />
                      </Form.Group>
                    </Col>
                    <Col sm="6" xs="7">
                      <Form.Group
                        as={Row}
                        controlId="formAmmunitioncap">
                        <Form.Label
                          column
                          sm="12"
                          className="form-label-custom">
                          Ammunition Capacity
                        </Form.Label>
                          <Form.Control
                            type="number"
                            name="ammunitioncap"
                            value={weapons[weaponName].ammunitioncap}
                            onChange={handleInputChange}
                            placeholder="max amount of ammo"
                            min="0"
                          />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </Collapse>
      </div>
    </>
  )
}
export default InvWeapons
