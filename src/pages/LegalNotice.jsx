import React from "react";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/LegalNotice.css";

const LegalNotice = () => {
  return (
    <div className="d-flex flex-column">
      {/* Contenu principal */}

      <div className="container mt-5 mb-5 flex-grow-1">
        <h2 className="text-center fw-bold mb-4">Mentions légales</h2>
        <hr className="mx-auto mb-5" />
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            {/* Premiere section */}

            <Accordion.Header>Éditeur du site</Accordion.Header>
            <Accordion.Body>
              <h5>John Doe</h5>
              <p className="mb-1">
                <i className="bi bi-building me-2"></i>40 rue Laure Diebold
              </p>
              <p className="mb-1">
                <i className="bi bi-geo-alt-fill me-2"></i>69009 Lyon, France
              </p>
              <p className="mb-1">
                <i className="bi bi-telephone-fill me-2"></i>10 20 30 40 50
              </p>
              <p>
                <i className="bi bi-envelope-fill me-2"></i>john.doe@gmail.com
              </p>
            </Accordion.Body>
          </Accordion.Item>

          {/* Deuxième section */}

          <Accordion.Item eventKey="1">
            <Accordion.Header>Hébergeur</Accordion.Header>
            <Accordion.Body>
              <h5 className="fw-bold">alwaysdata</h5>
              <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
              <p>
                <i className="bi bi-globe me-2"></i>
                <a
                  href="https://www.alwaysdata.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.alwaysdata.com
                </a>
              </p>
            </Accordion.Body>
          </Accordion.Item>

          {/* Troisieme section */}

          <Accordion.Item eventKey="2">
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body>
              <h5 className="fw-bold">Crédits</h5>
              <p>
                Ce site a été réalisé par John Doe, étudiant au{" "}
                <a
                  href="https://www.centre-europeen-formation.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Centre Européen de Formation
                </a>
                .
              </p>
              <p>
                <em>
                  Les images utilisées sur ce site sont libres de droits et ont
                  été obtenues sur le site{" "}
                </em>
                <a
                  href="https://pixabay.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pixabay
                </a>
                .
              </p>
              <p>
                <em>La favicon de ce site a été fournie par </em>
                <a
                  href="https://www.flaticon.com/free-icons/user"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  John Doe Icons créés par Freepik - Flaticon
                </a>
                .
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default LegalNotice;
