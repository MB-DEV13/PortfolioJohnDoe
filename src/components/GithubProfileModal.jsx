import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../css/GithubProfileModal.css";

const GithubProfileModal = ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      centered
      dialogClassName="custom-modal"
    >
      <Modal.Header closeButton className="bg-dark text-light border-0">
        <Modal.Title>Mon profil GitHub</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-light d-flex flex-column flex-md-row align-items-center">
        <img
          src="../images/profil.jpg"
          alt="Profile"
          className="img-fluid rounded-circle m-3"
        />
        <div className="text-start">
          <p>
            <i className="bi bi-person-fill me-2"></i>{" "}
            <a href="https://github.com/MB-DEV13">John Doe</a>
          </p>
          <p>
            <i className="bi bi-geo-alt-fill me-2"></i>{" "}
            {/* Lieu vide volontairement */}
          </p>
          <p>
            <i className="bi bi-card-text me-2"></i> As we all know, John Doe's
            identity is unknown. I just wanted to contribute without being
            known.
          </p>
          <p>
            <i className="bi bi-box-fill me-2"></i> Repositories: 1
          </p>
          <p>
            <i className="bi bi-people-fill me-2"></i> Followers: 16
          </p>
          <p>
            <i className="bi bi-person-plus-fill me-2"></i> Following: 0
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer className="bg-dark text-light border-0">
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GithubProfileModal;
