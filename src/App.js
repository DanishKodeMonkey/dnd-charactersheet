import React from "react"
import { Container, Row } from "react-bootstrap"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navigationbar from "./Components/Navigationbar"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Components/Custom.css"
import CharacterDetails from "./Pages/Character/CharacterDetails"
import CharacterStats from "./Pages/Character/CharacterStats.js"
import InventoryGear from "./Pages/Inventory/InventoryGear"
import InventoryPossesions from "./Pages/Inventory/InventoryPossesions"
import SkillsMain from "./Pages/Skills/SkillSkills"
import SkillAbilities from "./Pages/Skills/SkillAbilities"
import SpellsMain from "./Pages/Spells/SpellSpells"

//The front of the webpage, final assembly of all the different pages and parts come together here in the final App render.
const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigationbar />
        <Container>
          <Row>
            <Routes>
              <Route
                exact
                path="/"
                element={<CharacterDetails />}
              />
              <Route
                exact
                path="/character/details"
                element={<CharacterDetails />}
              />
              <Route
                exact
                path="/character/stats"
                element={<CharacterStats />}
              />
              <Route
                exact
                path="/inventory/gear"
                element={<InventoryGear />}
              />
              <Route
                exact
                path="/inventory/possesions"
                element={<InventoryPossesions />}
              />
              <Route
                exact
                path="/skills/skills"
                element={<SkillsMain />}
              />
              <Route
                exact
                path="/skills/abilities"
                element={<SkillAbilities />}
              />
              <Route
                path="/spells"
                element={<SpellsMain />}
              />
            </Routes>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App
