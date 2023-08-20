import React, { useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import SkillList from "../../Components/SkillsComponents/Skills"

const SkillsMain = () => {
  const [skillsData, setSkillsData] = useState([])

  //Callback function to handle data change in Skills child component
  const handleSkillsDataChange = (updatedData) => {
    setSkillsData(updatedData)
  }

  //Funciton to handle saving the data
  const handleSaveData = () => {
    //print data to console ( for now )
    console.log("Skills Data:", skillsData)
    //TODO: Implement sending data to DataManagement.js
  }

  return (
    <>
      <p></p>
      <h1>
        <p>Character Skills</p>
      </h1>
      <Container>
        <Row>
          <Button
            variant="primary"
            onClick={handleSaveData}>
            Save Skill List
          </Button>

          <Col
            sm="12"
            xs="12">
            <div className="border-component">
              <SkillList onDataChange={handleSkillsDataChange}/>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SkillsMain
