import React, { useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import FeatsAbilities from "../../Components/SkillsComponents/FeatsAbilities"
import SkiLanguage from "../../Components/SkillsComponents/Languages"

const SkillAbilities = () => {
  const [featsData, setFeatsData] = useState({});
  const [abilitiesData, setAbilitiesData] = useState({});
  const [languageData, setLanguageData] = useState([]);

  // Function to handle data from SkillFeatsAbilities
  const handleFeatsAbilitiesData = (data, type) => {
    if (type === "Feat") {
      setFeatsData((prevData) => {
        const newData = { ...prevData, ...data };
        return newData;
      });
    } else if (type === "Ability") {
      setAbilitiesData((prevData) => {
        const newData = { ...prevData, ...data };
        return newData;
      });
    }
  };
  const handleLanguageData = (data) => {
    setLanguageData(data);
  }
  
  // Function to handle saving the data
  const handleSaveData = () => {
    console.log("Current featsData:", featsData);
    console.log("Current abilitiesData:", abilitiesData);
    console.log("Current languageData:", languageData)
  
    const dataToSend = {
      feats: featsData,
      abilities: abilitiesData,
      languages: languageData,
    };
    console.log("Data to send to DataManagement.js:", dataToSend);
  };


  return (
    <>
      <p></p>
      <h1>
        <p>Character Abilities, Feats, and Languages</p>
      </h1>
      <Container>
        <Row>
        <Button variant="primary" onClick={handleSaveData}>
        Save Character Abilities and Feats
      </Button>
          <Col
            sm="6"
            xs="12">
            <div className="border-component">
              <FeatsAbilities
                title={"Feats"}
                type={"Feat"}
                onDataChange={handleFeatsAbilitiesData}
              />
            </div>
          </Col>
          <Col
            sm="6"
            xs="12">
            <div className="border-component">
              <FeatsAbilities
                title={"Special Abilities"}
                type={"Ability"}
                onDataChange={handleFeatsAbilitiesData}
              />
            </div>
          </Col>
          <p></p>
          <Col>
            <div className="border-component">
              <SkiLanguage onLanguageDataChange={handleLanguageData}/>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SkillAbilities
