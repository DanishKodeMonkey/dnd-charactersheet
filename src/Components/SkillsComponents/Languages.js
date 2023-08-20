import React, { useState } from "react"
import { Button, Form, Container, Row, Col } from "react-bootstrap"
import "./Skills.css"

const SkiLanguage = ({ onLanguageDataChange }) => {
  //array of Languages
  const [languages, setLanguages] = useState([])

  //function to handle adding a new language
  const handleAddLanguage = () => {
    setLanguages((prevLanguages) => [...prevLanguages, { language: "" }])
  }

  //function to handle changes in the language input fields
  const handleChange = (index, field, value) => {
    const updatedLanguages = [...languages]
    updatedLanguages[index][field] = value
    setLanguages(updatedLanguages)
    //update dataset, send to parent component.
    const languageData = updatedLanguages.map((language) => ({
      language: language.language

    }))
    onLanguageDataChange(languageData)
  }
  //Function to handle deleting languages
  const handleDeleteLanguage = (index) => {
    const updatedLanguages = [...languages]
    updatedLanguages.splice(index, 1)
    setLanguages(updatedLanguages)
    //Update the dataset, send to parent component.
    const newData = updatedLanguages.map((language) => ({
      language: language.language,
    }))
    onLanguageDataChange(newData);
  }
  return (
    <div>
      <h1>Languages</h1>
      {/* Render the "Add language" button using React-Bootstrap */}
      <p></p>
      <Button
        variant="dark"
        onClick={handleAddLanguage}>
        Add Language
      </Button>

      {/* Render the label row */}
      <Container>
        <Row className="form-label-custom-possesions no-gutter">
          <Col
            xs={12}>
            <strong>Language</strong>
          </Col>
        </Row>
      </Container>

      {/* Render the form for the list of languages */}
      <Container>
        {languages.map((language, index) => (
          <Row
            key={index}
            className="mt-1">
            <Col
              sm={11}
              xs={10}
              className="no-gutter">
              {/* Main language description input field */}
              <Form.Control
                type="text"
                value={languages.language}
                placeholder="Enter language"
                onChange={(e) =>
                  handleChange(index, "language", e.target.value)
                }
              />
            </Col>
            <Col
            sm={1}
              xs={2}

              className="no-gutter">
              {/* Delete button */}
              <Button
                variant="danger"
                style={{ width: "100%", whiteSpace: "none" }}
                className="no-gutter"
                onClick={() => handleDeleteLanguage(index)}>
                Delete
              </Button>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  )
}
export default SkiLanguage
