import React, { useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import InvMoney from "../../Components/InventoryComponents/Money"
import InvPossesions from "../../Components/InventoryComponents/Possesions"

const InventoryPossesions = () => {
  //State handling for sub-components
  //Money.js
  const [money, setMoney] = useState({
    copperpieces: "",
    silverpieces: "",
    goldpieces: "",
    platinumpieces: "",
  })
  //Possessions.js
  const [items, setItems] = useState([])

  const handleSaveData = () => {
    // Create the data to send
    const dataToSend = {
      items: items,
      money: money
    }

    console.log("Data to send:", dataToSend)
  }
  return (
    <>
      <p></p>
      <h1>
        <p>Character Possesions</p>
      </h1>
      <Container>
        <Row>
          <Button
            variant="primary"
            onClick={handleSaveData}>
            Save Possessions
          </Button>
          <p></p>
          <Col>
            <div className="border-component">
              <InvPossesions
                items={items}
                setItems={setItems}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="border-component">
              <InvMoney
                money={money}
                setMoney={setMoney}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default InventoryPossesions
