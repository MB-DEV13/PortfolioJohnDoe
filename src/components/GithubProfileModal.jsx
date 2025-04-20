import React from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import "../css/GithubProfileModal.css";

// 🔽 On importe le hook
import useGithubUser from "./useGithubUser"; // adapte le chemin selon ton projet

const GithubProfileModal = ({ show, handleClose }) => {
  const { user, loading, error } = useGithubUser("github-john-doe");

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
          {loading && <Spinner animation="border" variant="light" />}
          {error && <p>Erreur : {error}</p>}

          {user && (
            <>
              <p>
                <i className="bi bi-person-fill me-2"></i>
                <a
                  href={`https://github.com/github-john-doe`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {user.name || "Nom non disponible"}
                </a>
              </p>
              <p>
                <i className="bi bi-geo-alt-fill me-2"></i>{" "}
                {user.location || "Non spécifié"}
              </p>
              <p>
                <i className="bi bi-card-text me-2"></i>{" "}
                {user.bio || "Pas de biographie"}
              </p>
              <p>
                <i className="bi bi-box-fill me-2"></i> Repositories:{" "}
                {user.public_repos}
              </p>
              <p>
                <i className="bi bi-people-fill me-2"></i> Followers:{" "}
                {user.followers}
              </p>
              <p>
                <i className="bi bi-person-plus-fill me-2"></i> Following:{" "}
                {user.following}
              </p>
            </>
          )}
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
