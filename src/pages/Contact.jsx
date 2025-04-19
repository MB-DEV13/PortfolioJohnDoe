import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold">Contact</h2>
      <p className="text-center text-muted">
        Pour me contacter en vue d’un entretien ou d’une future collaboration,
        merci de remplir le formulaire de contact.
      </p>
      <div className="blue-line mx-auto mb-5"></div>

      <div className="card shadow p-4">
        <div className="row d-flex align-items-stretch">
          {/* Formulaire de contact */}
          <div className="col-md-6 d-flex flex-column">
            <h5 className="fw-bold">Formulaire de contact</h5>
            <div className="divider mb-4"></div>
            <form className="d-flex flex-column h-100">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Votre nom"
              />
              <input
                type="email"
                className="form-control mb-2"
                placeholder="Votre adresse email"
              />
              <input
                type="tel"
                className="form-control mb-2"
                placeholder="Votre numéro de téléphone"
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Sujet"
              />

              <div className="flex-grow-1 d-flex flex-column mb-3">
                <textarea
                  className="form-control h-100"
                  placeholder="Votre message"
                ></textarea>
              </div>

              <button className="btn btn-primary mt-auto" type="submit">
                Envoyer
              </button>
            </form>
          </div>

          {/* Coordonnées */}
          <div className="col-md-6 d-flex flex-column">
            <h5 className="fw-bold">Mes coordonnées</h5>
            <div className="divider mb-4"></div>
            <p>
              <strong>John Doe</strong>
            </p>
            <p>
              <i className="bi bi-map-fill me-2 text-primary"></i>40 rue Laure
              Diebold
              <br />
              <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
              69009 Lyon, France
              <br />
              <i className="bi bi-telephone-fill me-2 text-primary"></i>10 20 30
              40 50
              <br />
              <i className="bi bi-envelope-fill me-2 text-primary"></i>
              john.doe@gmail.com
            </p>
            <div className="ratio ratio-16x9">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.4199135827466!2d4.796909676571595!3d45.778675271081845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eaf2d121e00f%3A0x832f6aa8c6e9e4c1!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1713549911376!5m2!1sfr!2sfr"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
