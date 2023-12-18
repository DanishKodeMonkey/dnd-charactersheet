import React from "react"
import { Container, Row, Col, Form} from "react-bootstrap"

const Details = ({characterDetails, setCharacterDetails}) => {


  //Function to handle changes in input fields to pass to parent component
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCharacterDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }))
  }

  return (
    <>
      <p></p>
      <h1>
        <p>Character Details</p>
      </h1>
      <Container>
        <Form>
          <Row>
            <p></p>
            <h5>
              <p>Main information</p>
            </h5>
            {/*=============== ROW 1 BELOW ==============*/}
            <Col md={6}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={characterDetails.name}
                  onChange={handleInputChange}
                  autoFocus
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="race">
                <Form.Label>Race</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Race"
                  name="race"
                  value={characterDetails.race}
                  onChange={handleInputChange}
                  autoFocus
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="ClassAndLevel">
                <Row>
                  <Col xs={8}>
                    <Form.Label>class</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Class"
                      name="class"
                      value={characterDetails.class}
                      onChange={handleInputChange}
                      autoFocus
                    />
                  </Col>
                  <Col xs={4}>
                    <Form.Label>level</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="0"
                      min="0"
                      name="classlevel"
                      value={characterDetails.classlevel}
                      onChange={handleInputChange}
                      autoFocus
                      
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="CareerAndLevel">
                <Row>
                  <Col xs={8}>
                    <Form.Label>Career</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Career"
                      name="career"
                      value={characterDetails.career}
                      onChange={handleInputChange}
                      autoFocus
                    />
                  </Col>
                  <Col xs={4}>
                    <Form.Label>level</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="0"
                      min="0"
                      name="careerlevel"
                      value={characterDetails.careerlevel}
                      onChange={handleInputChange}
                      autoFocus
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Col>
          </Row>
          {/*================== ROW 2 BELOW ==================*/}
          <p></p>
          <h5>
            <p>Personality</p>
          </h5>
          <Row>
            <Col xs={6}>
              <Form.Group controlId="alignment">
                <Form.Label>Alignment</Form.Label>
                <Form.Select
                  name="alignment"
                  value={characterDetails.alignment}
                  onChange={handleInputChange}
                  autoFocus>
                  
                  <option value="">Select alignment</option>
                  <option value="Lawful Good">Lawful Good</option>
                  <option value="Neutral Good">Neutral Good</option>
                  <option value="Chaotic Good">Chaotic Good</option>
                  <option value="Lawful Neutral">Lawful Neutral</option>
                  <option value="True Neutral">True Neutral</option>
                  <option value="Chaotic Neutral">Chaotic Neutral</option>
                  <option value="Lawful Evil">Lawful Evil</option>
                  <option value="Neutral Evil">Neutral Evil</option>
                  <option value="Chaotic Evil">Chaotic Evil</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group controlId="deity">
                <Form.Label>Deity</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Deity"
                  name="deity"
                  value={characterDetails.deity}
                  onChange={handleInputChange}
                  autoFocus
                />
              </Form.Group>
            </Col>
          </Row>
          {/*============  ROW 3 BELOW ==========*/}
          <p></p>
          <h5>
            <p>Appearence</p>
          </h5>
          <Row>
            <Col xs={6}>
              <Form.Group controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  type="gender"
                  placeholder="Enter Gender"
                  name="gender"
                  value={characterDetails.gender}
                  onChange={handleInputChange}
                  autoFocus
                />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Age"
                  name="age"
                  value={characterDetails.age}
                  onChange={handleInputChange}
                  autoFocus
                />
              </Form.Group>
            </Col>
          </Row>
          {/* ================= ROW 4 BELOW ==============*/}
          <Row>
            <Col xs={4}>
              <Form.Group controlId="height">
                <Form.Label>Height</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Height"
                  name="height"
                  value={characterDetails.height}
                  onChange={handleInputChange}
                  autoFocus
                />
              </Form.Group>
            </Col>
            <Col xs={4}>
              <Form.Group controlId="size">
                <Form.Label>Size</Form.Label>
                <Form.Control
                  type="size"
                  placeholder="Enter Size"
                  name="size"
                  value={characterDetails.size}
                  onChange={handleInputChange}
                  autoFocus
                />
              </Form.Group>
            </Col>
            <Col xs={4}>
              <Form.Group controlId="weight">
                <Form.Label>Weight</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Weight"
                  name="weight"
                  value={characterDetails.weight}
                  onChange={handleInputChange}
                  autoFocus
                />
              </Form.Group>
            </Col>
          </Row>
          {/*=================== ROW 5 BELOW =================*/}
          <Row>
            <Col xs={4}>
              <Form.Group controlId="eyes">
                <Form.Label>Eyes</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter eye colour"
                  name="eyes"
                  value={characterDetails.eyes}
                  onChange={handleInputChange}
                  autoFocus
                />
              </Form.Group>
            </Col>
            <Col xs={4}>
              <Form.Group controlId="hair">
                <Form.Label>Hair</Form.Label>
                <Form.Control
                  type="hair"
                  placeholder="Enter Hairstyle"
                  name="hair"
                  value={characterDetails.hair}
                  onChange={handleInputChange}
                  autoFocus
                />
              </Form.Group>
            </Col>
            <Col xs={4}>
              <Form.Group controlId="skin">
                <Form.Label>Skin</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter skin colour"
                  name="skin"
                  value={characterDetails.skin}
                  onChange={handleInputChange}
                  autoFocus
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  )
}

export default Details
