import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const LoginModal = ({ show, handleClose }) => {
const navigate=useNavigate()
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Please Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>You need to be logged in to add items to the cart.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() =>{ 
          handleClose()  // Close the modal when login button is clicked
          navigate("/signin")
          }}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default LoginModal