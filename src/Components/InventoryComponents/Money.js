import React, { useState } from "react"
import { Form, Container, Row, Col } from "react-bootstrap"
import "./Inventory.css"

const InvMoney = () => {
  const [money, setMoney] = useState({
    copperpieces: "",
    silverpieces: "",
    goldpieces: "",
    platinumpieces: "",
  })
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setMoney((prevAttributes) => ({
      ...prevAttributes,
      [name]: value,
    }))
  }

  return (
    <>
      <div>
        <h1>Money</h1>
      </div>
      <Container>
        <Form>
          <Row className="">
            <Form.Group
              as={Row}
              controlId="formCopper">
              <Col className="p-0 m-0 height-auto" xs="7" sm="4">
                <Form.Label
                  className="form-label-custom">
                  Copper Pieces(CP)
                </Form.Label>
              </Col>
              <Col className="p-0 m-0" xs="5" sm="8">
                <Form.Control
                  type="number"
                  name="copperpieces"
                  value={money.copperpieces}
                  placeholder="0"
                  onChange={handleInputChange} />
              </Col>
            </Form.Group>
          </Row>
          <Row className="">
          <Form.Group
            as={Row}
            controlId="formSilver">
            <Col className="p-0 m-0 height-auto" xs="7" sm="4">
              <Form.Label
                className="form-label-custom">
                Silver Pieces(SP)
              </Form.Label>
            </Col>
            <Col className="p-0 m-0" xs="5" sm="8">
              <Form.Control
                type="number"
                name="silverpieces"
                value={money.silverpieces}
                placeholder="0"
                onChange={handleInputChange} />
            </Col>
          </Form.Group>
        </Row>
        <Row className="mt-0">
        <Form.Group
          as={Row}
          controlId="formGold">
          <Col className="p-0 m-0 height-auto" xs="7" sm="4">
            <Form.Label
              className="form-label-custom">
              Gold Pieces(GP)
            </Form.Label>
          </Col>
          <Col className="p-0 m-0" xs="5" sm="8">
            <Form.Control
              type="number"
              name="goldpieces"
              value={money.goldpieces}
              placeholder="0"
              onChange={handleInputChange} />
          </Col>
        </Form.Group>
      </Row>
      <Row className="">
      <Form.Group
        as={Row}
        controlId="formPlatinum">
        <Col className="p-0 m-0" xs="7" sm="4">
          <Form.Label
            className="form-label-custom">
            Platinum Pieces(PP)
          </Form.Label>
        </Col>
        <Col className="p-0 m-0" xs="5" sm="8">
          <Form.Control
            type="number"
            name="platinumpieces"
            value={money.platinumpieces}
            placeholder="0"
            onChange={handleInputChange} />
        </Col>
      </Form.Group>
    </Row>
        </Form>
      </Container>
    </>
  )
}
export default InvMoney
