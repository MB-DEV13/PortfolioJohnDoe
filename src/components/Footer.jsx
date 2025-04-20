import React from "react";
import "../css/Footer.css";

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
                rel="nofollow noopener noreferrer"
              >
                <i className="bi bi-linkedin fs-4"></i>
              </a>
              <a
                href="https://github.com/johndoe"
                className="text-white me-3"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <i className="bi bi-github fs-4"></i>
              </a>
              <a
                href="https://x.com/johndoe"
                className="text-white "
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <i className="bi bi-twitter fs-4"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Accueil</a>
              </li>
              <li>
                <a href="/Services">Services</a>
              </li>
              <li>
                <a href="/Portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/Contact">Me contacter</a>
              </li>
              <li>
                <a href="/LegalNotice">Mentions légales</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/Portfolio">Fresh Food</a>
              </li>
              <li>
                <a href="/Portfolio">Restaurant Akira</a>
              </li>
              <li>
                <a href="/Portfolio">Espace bien être</a>
              </li>
              <li>
                <a href="/Portfolio">SEO</a>
              </li>
              <li>
                <a href="/Portfolio">Création d'une API</a>
              </li>
              <li>
                <a href="/Portfolio">Maquette d’un site</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
