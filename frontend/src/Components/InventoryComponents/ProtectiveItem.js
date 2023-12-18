import React from "react"
import { Form, Container, Row, Col } from "react-bootstrap"
import "./Inventory.css"

//Function to handle the collapseability of each weapon in main component
//Accept weaponName as prop and establish

const InvProtItem = ({itemName, protitem, setProtItem}) => {

    //Handle changes to input fields to pass to parent component.
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProtItem((prevProtItem) => ({
      ...prevProtItem,
      [itemName]: {
        ...prevProtItem[itemName],
        [name]: value,
      },
    }));
  };
  return (
    <>
      <div className="border-weapons">
        <Container>
          <Row>
            <Col>
              <Form>
                {/* ==================== ROW 1 BELOW ==============*/}
                <Row>
                  <Col sm="3">
                    <Form.Group
                      as={Row}
                      controlId="formProtItem">
                      <Form.Label
                        column
                        sm="6"
                        className="form-label-custom">
                        Protective Item
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="protitemname"
                        value={protitem[itemName].protitemname}
                        onChange={handleInputChange}
                        placeholder="Name of item"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="2" xs="6">
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
                        value={protitem[itemName].acbonus}
                        onChange={handleInputChange}
                        placeholder="0"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="2" xs="6">
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
                        value={protitem[itemName].weight}
                        onChange={handleInputChange}
                        placeholder="0"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="5">
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
                        value={protitem[itemName].specialproperties}
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
export default InvProtItem
