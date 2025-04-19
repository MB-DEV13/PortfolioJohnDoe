import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>John Doe</h5>
            <p>
              40 rue Laure Diebold
              <br />
              69009 Lyon, France
              <br />
              Tel: 10 20 30 40 50
              <br />
              john.doe@gmail.com
            </p>
            <div>
              <a
                href="https://www.linkedin.com/in/johndoe"
                className="text-white me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin fs-4"></i>
              </a>
              <a
                href="https://github.com/johndoe"
                className="text-white me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github fs-4"></i>
              </a>
              <a href="https://x.com/johndoe" className="text-white">
                <i className="bi bi-twitter fs-4"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li>Accueil</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Me contacter</li>
              <li>Mentions légales</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>Fresh Food</li>
              <li>Restaurant Akira</li>
              <li>Espace bien être</li>
              <li>SEO</li>
              <li>Création d'une API</li>
              <li>Maquette d’un site</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
