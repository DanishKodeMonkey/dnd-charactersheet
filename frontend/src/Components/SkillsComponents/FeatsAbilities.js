import React, { useState } from "react"
import { Button, Form, Container, Row, Col } from "react-bootstrap"
import "./Skills.css"

//Reusable component that will handle both Feats and Abilities (due to similar datasets) includes passable title, and type for formatting in render.
const FeatsAbilities = ({ title, type, onDataChange }) => {
  const [feats, setFeats] = useState([])
  //Function for the Add feat button, adds a row immutably
  const handleAddFeat = () => {
    setFeats((prevFeats) => [
      ...prevFeats,
      { [`${type}name`]: "", [`${type}description`]: "" },
    ])
  }

  //Function to handle changes to input fields. Send to parent component.
  const handleChange = (index, field, value) => {
    const updatedFeats = [...feats]
    updatedFeats[index][field] = value
    setFeats(updatedFeats)
    
    // Prepare the data to send or save
    const dataToSend = {
      [type]: updatedFeats.map((feat) => ({
        name: feat[`${type}name`],
        description: feat[`${type}description`],
      })),
    }

    // Call the callback function with the collected data
    onDataChange(dataToSend, type)
  }

  //function for deleting a feat. Remove the row from the list.
  const handleDeleteFeat = (index) => {
    const updatedFeats = [...feats]
    updatedFeats.splice(index, 1)
    setFeats(updatedFeats)
    //update the dataset with the removed row. Send to parent component.
    const dataToSend = {
      [type]: updatedFeats.map((feat) => ({
        name: feat[`${type}name`],
        description: feat[`${type}description`],
      })),
    }
    onDataChange(dataToSend, type)
  }

  return (
    <>
      <div>
        <h1>{title}</h1>
      </div>
      <Container>
        <Button
          variant="dark"
          onClick={handleAddFeat}>
          Add {type}
        </Button>

        <Row className="form-label-custom-possesions no-gutter">
          <Col
            xs={5}
            sm={3}>
            <strong>{`${type} Name`}</strong>
          </Col>
          <Col
            xs={7}
            sm={9}>
            <strong>{`${type} Description`}</strong>
          </Col>
        </Row>
      </Container>

      <Container>
        {feats.map((feat, index) => (
          <Row
            key={index}
            className="mt-1">
            <Col
              xs={2}
              sm={3}
              className="no-gutter">
              <Form.Control
                type="text"
                value={feat[`${type}name`]}
                placeholder={`${type} name`}
                onChange={(e) =>
                  handleChange(index, `${type}name`, e.target.value)
                }
              />
            </Col>
            <Col
              xs={8}
              sm={7}
              className="no-gutter">
              <Form.Control
                type="text"
                value={feat[`${type}description`]}
                onChange={(e) =>
                  handleChange(index, `${type}description`, e.target.value)
                }
              />
            </Col>
            <Col
              xs={2}
              sm={2}
              className="no-gutter">
              <Button
                variant="danger"
                style={{ width: "100%", whiteSpace: "none" }}
                className="no-gutter"
                onClick={() => handleDeleteFeat(index)}>
                Delete
              </Button>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  )
}

export default FeatsAbilities
