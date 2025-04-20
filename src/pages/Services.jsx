import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaPenNib, FaCode, FaSearch } from "react-icons/fa";
import "../css/Services.css";

const Services = () => {
  return (
    <div>
      {/* Bandeau visuel bleu */}
      <div className="services-hero" />

      {/* Contenu des services */}
      <div className="bg-light py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">Mon offre de services</h2>
            <p className="text-muted">
              Voici les prestations sur lesquelles je peux intervenir
            </p>
            <hr className="mx-auto" />
          </div>
          {/* Cartes de services */}
          <Row className="g-4">
            <Col md={4}>
              <Card className="text-center h-100 shadow-sm card-hover">
                <Card.Body>
                  <FaPenNib size={32} className="mb-3 text-primary" />
                  <Card.Title className="fw-bold">UX Design</Card.Title>
                  <Card.Text>
                    L’UX Design est une discipline qui consiste à concevoir des
                    produits (sites web, applications mobiles, logiciels, objets
                    connectés, etc.) en plaçant l’utilisateur au centre des
                    préoccupations. L’objectif est de rendre l’expérience
                    utilisateur la plus fluide et agréable possible.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Deuxième carte */}
            <Col md={4}>
              <Card className="text-center h-100 shadow-sm card-hover">
                <Card.Body>
                  <FaCode size={32} className="mb-3 text-primary" />
                  <Card.Title className="fw-bold">Développement web</Card.Title>
                  <Card.Text>
                    Le développement de sites web consiste à créer des sites
                    internet en utilisant des langages de programmation (HTML,
                    CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap,
                    React, Angular, etc.).
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Troisième carte */}
            <Col md={4}>
              <Card className="text-center h-100 shadow-sm card-hover">
                <Card.Body>
                  <FaSearch size={32} className="mb-3 text-primary" />
                  <Card.Title className="fw-bold">Référencement</Card.Title>
                  <Card.Text>
                    Le référencement naturel (SEO) est une technique qui
                    consiste à optimiser un site web pour le faire remonter dans
                    les résultats des moteurs de recherche (Google, Bing, Yahoo,
                    etc.). L’objectif est d’attirer un maximum de visiteurs
                    qualifiés sur le site.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Services;
