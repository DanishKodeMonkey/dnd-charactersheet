import React, { useState } from "react"
import { Container, Row, Col, Collapse, Button } from "react-bootstrap"
import InvArmor from "../../Components/InventoryComponents/Armor"
import InvWeapons from "../../Components/InventoryComponents/Weapons"
import Invshield from "../../Components/InventoryComponents/Shield"
import InvProtItem from "../../Components/InventoryComponents/ProtectiveItem"

const InventoryGear = () => {
  //State management for child components
  //Weapons State
  const [weapons, setWeapons] = useState({
    1: {
      attack: "",
      bonus: "",
      damage: "",
      critical: "",
      range: "",
      type: "",
      notes: "",
      ammunition: "",
      ammunitioncap: "",
    },
    2: {
      attack: "",
      bonus: "",
      damage: "",
      critical: "",
      range: "",
      type: "",
      notes: "",
      ammunition: "",
      ammunitioncap: "",
    },
    3: {
      attack: "",
      bonus: "",
      damage: "",
      critical: "",
      range: "",
      type: "",
      notes: "",
      ammunition: "",
      ammunitioncap: "",
    },
    4: {
      attack: "",
      bonus: "",
      damage: "",
      critical: "",
      range: "",
      type: "",
      notes: "",
      ammunition: "",
      ammunitioncap: "",
    },
  })
  //Some name formatting, get the keys, and reduce to assign to new names
  const weaponKeysMapping = {
    1: "weapon1",
    2: "weapon2",
    3: "weapon3",
    4: "weapon4",
  }
  const renamedWeapons = Object.keys(weapons).reduce((acc, key) => {
    const renamedKey = weaponKeysMapping[key]
    acc[renamedKey] = weapons[key]
    return acc
  }, {})

  //Armor State
  const [armor, setArmor] = useState({
    armorname: "",
    armortype: "",
    acbonus: "",
    maxdex: "",
    checkpenalty: "",
    spellfailure: "",
    speed: "",
    weight: "",
    specialproperties: "",
  })
  //Shield State
  const [shield, setShield] = useState({
    shieldname: "",
    acbonus: "",
    checkpenalty: "",
    spellfailure: "",
    weight: "",
    specialproperties: "",
  })
  const [protItem, setProtItem] = useState({
    1: {
      protitemname: "",
      acbonus: "",
      weight: "",
      specialproperties: "",
    },
    2: {
      protitemname: "",
      acbonus: "",
      weight: "",
      specialproperties: "",
    },
  })
  //Some name formatting, get the keys, and reduce to assign to new names
  const protItemKeysMapping = {
    1: "protitem1",
    2: "protitem2",
 
  }
  const renamedProtItems = Object.keys(protItem).reduce((acc, key) => {
    const renamedKey = protItemKeysMapping[key]
    acc[renamedKey] = protItem[key]
    return acc
  }, {})

  const handleSaveData = () => {
    // Create the data to send
    const dataToSend = {
      weapons: renamedWeapons,
      armor: armor,
      shield: shield,
      protItems: renamedProtItems
    }

    console.log("Data to send:", dataToSend)
  }

  const [weaponsCollapsed, setWeaponsCollapsed] = useState(false)
  const [gearCollapsed, setGearCollapsed] = useState(false)

  const toggleWeapons = () => {
    setWeaponsCollapsed((prevWeaponsCollapsed) => !prevWeaponsCollapsed)
  }

  const toggleGear = () => {
    setGearCollapsed((prevGearCollapsed) => !prevGearCollapsed)
  }

  return (
    <>
      <h1>Character Gear</h1>
      <Container>
        <Button
          variant="primary"
          onClick={handleSaveData}>
          Save Character Stats
        </Button>
        <Row>
          <Col>
            <div className="border-component">
              <h3 onClick={toggleWeapons}>Weapons</h3>
              <hr />
              <Collapse in={weaponsCollapsed}>
                <div>
                  <InvWeapons
                    weaponName={1}
                    weapons={weapons}
                    setWeapons={setWeapons}
                  />
                  <InvWeapons
                    weaponName={2}
                    weapons={weapons}
                    setWeapons={setWeapons}
                  />
                  <InvWeapons
                    weaponName={3}
                    weapons={weapons}
                    setWeapons={setWeapons}
                  />
                  <InvWeapons
                    weaponName={4}
                    weapons={weapons}
                    setWeapons={setWeapons}
                  />
                </div>
              </Collapse>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="border-component">
              <h3 onClick={toggleGear}>Gear</h3>
              <hr />
              <Collapse in={gearCollapsed}>
                <div>
                  <InvArmor
                    armor={armor}
                    setArmor={setArmor}
                  />
                  <Invshield shield={shield} setShield={setShield}/>
                  <InvProtItem itemName={1} protitem={protItem} setProtItem={setProtItem}/>
                  <InvProtItem itemName={2} protitem={protItem} setProtItem={setProtItem} />
                </div>
              </Collapse>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default InventoryGear
