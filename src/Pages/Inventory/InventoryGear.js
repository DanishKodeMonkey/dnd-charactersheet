import React, { useState } from "react";
import { Container, Row, Col, Collapse } from "react-bootstrap";
import InvArmor from "../../Components/InventoryComponents/Armor";
import InvWeapons from "../../Components/InventoryComponents/Weapons";
import Invshield from "../../Components/InventoryComponents/Shield";
import InvProtItem from "../../Components/InventoryComponents/ProtectiveItem";

const InventoryGear = () => {
  const [weaponsCollapsed, setWeaponsCollapsed] = useState(false);
  const [gearCollapsed, setGearCollapsed] = useState(false);

  const toggleWeapons = () => {
    setWeaponsCollapsed((prevWeaponsCollapsed) => !prevWeaponsCollapsed);
  };

  const toggleGear = () => {
    setGearCollapsed((prevGearCollapsed) => !prevGearCollapsed);
  };

  return (
    <>
      <h1>Character Gear</h1>
      <Container>
        <Row>
          <Col>
            <div className="border-component">
              <h3 onClick={toggleWeapons}>Weapons</h3>
              <hr />
              <Collapse in={weaponsCollapsed}>
                <div>
                  <InvWeapons weaponName="Weapon 1" />
                  <InvWeapons weaponName="Weapon 2" />
                  <InvWeapons weaponName="Weapon 3" />
                  <InvWeapons weaponName="Weapon 4" />
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
                  <InvArmor />
                  <Invshield />
                  <InvProtItem />
                  <InvProtItem />
                </div>
              </Collapse>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InventoryGear;