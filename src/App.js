import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navigationbar from "./Components/Navigationbar"
import Inventory from "./Pages/Inventory"
import Character from "./Pages/Character"
import Skills from "./Pages/Skills"
import Spells from "./Pages/Spells"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigationbar />
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
      </Router>
    </div>
  )
}

export default App
