import React, { useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import Details from "../../Components/CharacterComponents/Details"

const CharacterDetails = () => {
  //State to hold character details
  const [characterDetails, setCharacterDetails] = useState({
    name: "",
    classlevel: "",
    class: "",
    careerlevel: "",
    career: "",
    race: "",
    alignment: "",
    deity: "",
    size: "",
    height: "",
    age: "",
    weight: "",
    skin: "",
    gender: "",
    eyes: "",
    hair: "",
  })
  const handleSaveData = () => {
    // Function to handle saveData

    console.log("Character Details Data:", characterDetails)
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
              <Details
                characterDetails={characterDetails}
                setCharacterDetails={setCharacterDetails}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CharacterDetails
