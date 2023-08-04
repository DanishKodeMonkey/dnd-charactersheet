import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import './Skills.css'

const FeatsAbilities = ({ title, type }) => {
  const [feats, setFeats] = useState([]);

  const handleAddFeat = () => {
    setFeats((prevFeats) => [
      ...prevFeats,
      { [`${type}name`]: "", [`${type}description`]: "" },
    ]);
  };

  const handleChange = (index, field, value) => {
    const updatedFeats = [...feats];
    updatedFeats[index][field] = value;
    setFeats(updatedFeats);
  };

  const handleDeleteFeat = (index) => {
    const updatedFeats = [...feats];
    updatedFeats.splice(index, 1);
    setFeats(updatedFeats);
  };

  return (
    <>
      <div>
        <h1>{title}</h1>
      </div>
      <Container>
        <Button variant="dark" onClick={handleAddFeat}>
          Add {type}
        </Button>

        <Row className="form-label-custom-possesions no-gutter">
          <Col xs={5} sm={3}>
            <strong>{`${type} Name`}</strong>
          </Col>
          <Col xs={7} sm={9}>
            <strong>{`${type} Description`}</strong>
          </Col>
        </Row>
      </Container>

      <Container>
        {feats.map((feat, index) => (
          <Row key={index} className="mt-1">
            <Col xs={2} sm={3} className="no-gutter">
              <Form.Control
                type="text"
                value={feat[`${type}name`]}
                placeholder={`${type} name`}
                onChange={(e) => handleChange(index, `${type}name`, e.target.value)}
              />
            </Col>
            <Col xs={8} sm={7} className="no-gutter">
              <Form.Control
                type="text"
                value={feat[`${type}description`]}
                onChange={(e) => handleChange(index, `${type}description`, e.target.value)}
              />
            </Col>
            <Col xs={2} sm={2} className="no-gutter">
              <Button
                variant="danger"
                style={{ width: "100%", whiteSpace: "none" }}
                className="no-gutter"
                onClick={() => handleDeleteFeat(index)}
              >
                Delete
              </Button>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default FeatsAbilities;