import React, { useState } from "react";
import GithubProfileModal from "../components/GithubProfileModal";

function HomePage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Hero section */}
      <header className="hero text-white text-center d-flex align-items-center justify-content-center position-relative">
        <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
        <div className="position-relative">
          <h1 className="display-1 fw-bold">Bonjour, je suis John Doe</h1>
          <h2 className="display-3 fw-bold mb-4">Développeur web full stack</h2>

          <button className="btn btn-danger" onClick={() => setShowModal(true)}>
            Voir le profil GitHub
          </button>

          <GithubProfileModal
            show={showModal}
            handleClose={() => setShowModal(false)}
          />
        </div>
      </header>

      <section className="container my-5 p-4 shadow rounded bg-white">
        <div className="row">
          {/* A propos */}
          <div className="col-md-6">
            <h3 className="section-title">A propos</h3>
            <img
              src="../images/john-doe-about.jpg"
              alt="John working"
              className="img-fluid mb-3"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec ultrices elit. Praesent mattis urna et condimentum feugiat.
              Nunc laoreet libero nibh. Proin eu quam iaculis, venenatis lectus
              at, volutpat est.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec ultrices elit. Praesent mattis urna et condimentum feugiat.
              Nunc laoreet libero nibh. Proin eu quam iaculis, venenatis lectus
              at, volutpat est.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec ultrices elit. Praesent mattis urna et condimentum feugiat.
              Nunc laoreet libero nibh. Proin eu quam iaculis, venenatis lectus
              at, volutpat est.
            </p>
          </div>
          {/* Compétences */}
          <div className="col-md-6">
            <h3 className="section-title">Mes compétences</h3>
            <div className="mb-2">HTML5 90%</div>
            <div className="progress mb-3">
              <div className="progress-bar bg-danger"></div>
            </div>
            <div className="mb-2">CSS3 80%</div>
            <div className="progress mb-3">
              <div className="progress-bar bg-info"></div>
            </div>
            <div className="mb-2">JAVASCRIPT 70%</div>
            <div className="progress mb-3">
              <div className="progress-bar bg-warning"></div>
            </div>
            <div className="mb-2">PHP 60%</div>
            <div className="progress mb-3">
              <div className="progress-bar bg-success"></div>
            </div>
            <div className="mb-2">REACT 50%</div>
            <div className="progress mb-3">
              <div className="progress-bar bg-primary"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
