import React, { useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import Attributes from "../../Components/CharacterComponents/Attributes"
import Status from "../../Components/CharacterComponents/Status"
import SavingThrows from "../../Components/CharacterComponents/SavingThrows"

const CharacterStats = () => {
  //State management for sub components.
  //Attributes
  const [attributes, setAttributes] = useState({
    strength: "",
    dexterity: "",
    constitution: "",
    intelligence: "",
    wisdom: "",
    charisma: "",
  })
  //saving throws
  const [savingThrows, setsavingThrows] = useState({
    fortitude: "",
    reflex: "",
    willpower: "",
  })
  //Status
  const [statusData, setStatusData] = useState({
    hp: "",
    ac: "",
    nonLethal: "",
    flatFooted: "",
    speed: "",
    touch: "",
    initiative: "",
  })
  const handleSaveData = () => {
    // Call a function to send attributes, savingThrows, and status data to DataManagement.js
    // For now, let's just log them
    console.log("Attributes Data:", attributes)
    console.log("Saving Throws Data:", savingThrows)
    console.log("Status Data:", statusData)
  }
  return (
    <>
      <p></p>
      <h1>
        <p>Character Statistics</p>
      </h1>
      <Container>
        <Row>
            <Button
              variant="primary"
              onClick={handleSaveData}>
              Save Character Stats
            </Button>
            <p></p>
          <Col>
            <div className="border-component">
              <Status
                statusData={statusData}
                setStatusData={setStatusData}
              />
            </div>
          </Col>
          <Col>
            <div className="border-component">
              <Attributes
                attributes={attributes}
                setAttributes={setAttributes}
              />
            </div>
          </Col>
        </Row>
        <p></p>
        <Row>
          <Col>
            <div className="border-component">
              <SavingThrows
                savingThrows={savingThrows}
                setsavingThrows={setsavingThrows}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CharacterStats
