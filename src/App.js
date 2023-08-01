import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navigationbar from "./Components/Navigationbar"
import Inventory from "./Pages/Inventory"
import Character from "./Pages/Character"
import Skills from "./Pages/Skills"
import Spells from "./Pages/Spells"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Components/Custom.css"

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
                element={<Character />}
              />
              <Route
                path="/Inventory"
                element={<Inventory />}
              />
              <Route
                path="/Skills"
                element={<Skills />}
              />
              <Route
                path="/Spells"
                element={<Spells />}
              />
            </Routes>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App
