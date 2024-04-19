import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Are you sure to log out?
        </Modal.Title>
      </Modal.Header>

      <Modal.Footer className="d-flex justify-content-center">
        <Button onClick={props.onHide} className="me-3">
          Yes
        </Button>
        <Button onClick={props.onHide}>No</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Header = () => {
  const [fixnavbar, setFixnavbar] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setSmShow(false); // Close small modal when Change Password button is clicked
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setFixnavbar(true);
      } else {
        setFixnavbar(false);
      }
    });
  }, []);

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          fixnavbar ? "fixed-navbar" : ""
        }`}
      >
        <div className="container-fluid text-center">
          <Link className="navbar-brand" href="#">
            <img src={logo} alt="" className="logo-img" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Contact
                </Link>
              </li>
            </ul>
            <span className="navbar-icon ">
              <Link to="/address">
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
              <Link onClick={() => setSmShow(true)}>
                <i className="fa-regular fa-user"></i>
              </Link>
              <Link to="/wishlist" state={{ isFromHeader: true }}>
                <i class="fa-regular fa-heart"></i>
              </Link>
              <Link to="/product">
                <i class="fa-solid fa-cart-shopping"></i>
              </Link>
            </span>
          </div>
        </div>
      </nav>
      {/* Small Modal */}
      <div className="modal-wrapper">
        <Modal
          placement="right"
          className="modal-right"
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Small Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <Button onClick={handleShow}>Change Password</Button>
              </div>

              <div>
                <Button  onClick={() => {
                  setModalShow(true);
                }}>
                  Logout
                </Button>

                

                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>

      <div className="change-password">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Old Password</Form.Label>
                <Form.Control type="password" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" autoFocus />
              </Form.Group> 
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Password
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Header;
