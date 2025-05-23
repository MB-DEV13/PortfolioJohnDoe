import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../css/Portfolio.css";

// Liste des projets à afficher dans le portfolio
const projects = [
  {
    title: "Fresh Food",
    subtitle: "Site de vente de produits frais en ligne",
    tech: "Site réalisé avec : PHP et MySQL",
    img: "/images/portfolio/fresh-food.jpg",
    alt: "Image du site Fresh Food",
  },
  {
    title: "Restaurant Akira",
    subtitle: "Site de vente de produits frais en ligne",
    tech: "Site réalisé avec WordPress",
    img: "/images/portfolio/restaurant-japonais.jpg",
    alt: "Image du site Restaurant Akira",
  },
  {
    title: "Espace bien-être",
    subtitle: "Site de vente de produits frais en ligne",
    tech: "Site réalisé avec LARAVEL",
    img: "/images/portfolio/espace-bien-etre.jpg",
    alt: "Image du site Espace bien-être",
  },
  {
    title: "SEO",
    subtitle: "Amélioration du référencement d’un site e-commerce",
    tech: "Utilisation des outils SEO",
    img: "/images/portfolio/seo.jpg",
    alt: "Image représentant le SEO",
  },
  {
    title: "Création d'une API",
    subtitle: "Création d’une API RESTFUL publique",
    tech: "PHP - SYMFONY",
    img: "/images/portfolio/coder.jpg",
    alt: "Image de création d'une API",
  },
  {
    title: "Maquette d'un site web",
    subtitle: "Création d’un prototype d’un site",
    tech: "Réalisé avec FIGMA",
    img: "/images/portfolio/screens.jpg",
    alt: "Image d'une maquette de site web",
  },
];

const Portfolio = () => {
  return (
    <div>
      {/* Bandeau visuel bleu */}
      <div className="portfolio-hero" />

      {/* Contenu du portfolio */}
      <div className="bg-light py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">Portfolio</h2>
            <p className="text-muted">
              Voici quelques-unes de mes réalisations.
            </p>
            <hr className="mx-auto" />
          </div>
          <Row className="g-4">
            {projects.map((project, index) => (
              <Col key={index} md={4}>
                <Card className="h-100 shadow-sm card card-hover">
                  <Card.Img
                    variant="top"
                    src={project.img}
                    alt={project.alt}
                    className="card-img-top"
                  />
                  <Card.Body className="text-center">
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.subtitle}</Card.Text>
                    <Button variant="primary btn-hover">Voir le site</Button>
                  </Card.Body>
                  <Card.Footer className="text-muted text-center portfolio-footer">
                    {project.tech}
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Portfolio;
