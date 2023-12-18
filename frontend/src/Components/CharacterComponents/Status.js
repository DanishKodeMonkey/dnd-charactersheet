import React from "react"
import { Form, Container, Row, Col } from "react-bootstrap"
import "./Character.css"

const Status = ({statusData, setStatusData}) => {


  //function to handle changes in the input fields to pass to parent component
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setStatusData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  return (
    <>
      <p></p>
      <h3>
        <p>Status</p>
      </h3>
      <hr />
      <Container>
        <Form>
          <Row>
            <Col
              xs={6}
              sm={6}>
              <Form.Group controlId="formHPNL">
                <Form.Label className="label-text">Health</Form.Label>
                <Form.Control
                  type="number"
                  name="hp"
                  value={statusData.hp}
                  onChange={handleInputChange}
                  className="bigger-input"
                  placeholder="0"
                />
              </Form.Group>
            </Col>
            <Col
              xs={6}
              sm={6}>
              <Form.Group controlId="formNonLethal">
                <Form.Label className="label-text">NonLethal</Form.Label>
                <Form.Control
                  type="number"
                  name="nonLethal"
                  value={statusData.nonLethal}
                  onChange={handleInputChange}
                  className="bigger-input"
                  placeholder="0"
                />
              </Form.Group>
            </Col>
            <Col
              xs={6}
              sm={6}>
              <Form.Group controlId="formACFF">
                <Form.Label className="label-text">Armor</Form.Label>
                <Form.Control
                  type="number"
                  name="ac"
                  value={statusData.ac}
                  onChange={handleInputChange}
                  className="bigger-input"
                  placeholder="0"
                />
              </Form.Group>
            </Col>
            <Col
              xs={6}
              sm={6}>
              <Form.Group controlId="formFlatFooted">
                <Form.Label className="label-text">FlatFoot</Form.Label>
                <Form.Control
                  type="number"
                  name="flatFooted"
                  value={statusData.flatFooted}
                  onChange={handleInputChange}
                  className="bigger-input"
                  placeholder="0"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col
              xs={6}
              sm={6}>
              <Form.Group controlId="formTouch">
                <Form.Label className="label-text">Touch</Form.Label>
                <Form.Control
                  type="number"
                  name="touch"
                  value={statusData.touch}
                  onChange={handleInputChange}
                  className="bigger-input"
                  placeholder="0"
                />
              </Form.Group>
            </Col>
            <Col
              xs={6}
              sm={6}>
              <Form.Group controlId="formSpeed">
                <Form.Label className="label-text">Speed</Form.Label>
                <Form.Control
                  type="number"
                  name="speed"
                  value={statusData.speed}
                  onChange={handleInputChange}
                  className="bigger-input"
                  placeholder="0"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              sm={12}>
              <Form.Group controlId="formInitiative">
                <Form.Label className="label-text">Initiative</Form.Label>
                <Form.Control
                  type="number"
                  name="initiative"
                  value={statusData.initiative}
                  onChange={handleInputChange}
                  className="bigger-input"
                  placeholder="0"
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  )
}

export default Status
