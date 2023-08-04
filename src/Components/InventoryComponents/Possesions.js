import React, { useState } from "react"
import { Button, Form, Container, Row, Col } from "react-bootstrap"
import "./Inventory.css"
const InvPossesions = () => {
  //array of possesions in inventory
  const [items, setItems] = useState([])

  //function to handle adding a new item
  const handleAddItem = () => {
    setItems((prevItems) => [
      ...prevItems,
      { description: "", amount: 0, weight: 0 },
    ])
  }

  //function to handle changes in the item input fields
  const handleChange = (index, field, value) => {
    const updatedItems = [...items]
    updatedItems[index][field] = value
    setItems(updatedItems)
  }
  //Function to handle deleting items
  const handleDeleteItem = (index) => {
    const updatedItems = [...items]
    updatedItems.splice(index, 1)
    setItems(updatedItems)
  }
  return (
    <div>
    <h1>Items</h1>
      {/* Render the "Add Item" button using React-Bootstrap */}
      <p></p>
      <Button
        variant="dark"
        onClick={handleAddItem}>
        Add Item
      </Button>

      {/* Render the label row */}
      <Container>
        <Row className="form-label-custom-possesions no-gutter">
          <Col xs={6} sm={8}>
            <strong>Item Description</strong>
          </Col>
          <Col xs={2} sm={1}>
            <strong>Amount</strong>
          </Col>
          <Col xs={1} sm={1}>
            <strong>Weight</strong>
          </Col>
        </Row>
      </Container>

      {/* Render the form for the list of items */}
      <Container>
        {items.map((item, index) => (
          <Row key={index} className="mt-1">
            <Col
              xs={6} sm={8}
              className="no-gutter">
              {/* Main item description input field */}
              <Form.Control
                type="text"
                value={item.description}
                placeholder="Enter item"
                onChange={(e) =>
                  handleChange(index, "description", e.target.value)
                }
              />
            </Col>
            <Col
              xs={2} sm={1}
              className="no-gutter">
              {/* Amount number input field */}
              <Form.Control
                type="number"
                value={item.amount}
                min="0"
                onChange={(e) =>
                  handleChange(index, "amount", parseInt(e.target.value))
                }
              />
            </Col>
            <Col
              xs={2} sm={1}
              className="no-gutter">
              {/* Weight number input field */}
              <Form.Control
                type="number"
                value={item.weight}
                min="0"
                onChange={(e) =>
                  handleChange(index, "weight", parseInt(e.target.value))
                }
              />
            </Col>
            <Col
              xs={2} sm={2}
              className="no-gutter">
              {/* Delete button */}
              <Button
                variant="danger"
                style={{width:"100%", whiteSpace:"none"}}
                className="no-gutter"
                onClick={() => handleDeleteItem(index)}>
                Delete
              </Button>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  )
}
export default InvPossesions
