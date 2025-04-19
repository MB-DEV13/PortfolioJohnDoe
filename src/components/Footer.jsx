import React from "react";

function Footer() {
  return (
    <footer className="bg-light text-center py-3 mt-5">
      <div>
        <a
          href="https://facebook.com"
          className="me-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a
          href="https://twitter.com"
          className="me-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-twitter"></i>
        </a>
        <a
          href="https://linkedin.com"
          className="me-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
      <div>&copy; {new Date().getFullYear()} John Doe</div>
    </footer>
  );
}

export default Footer;
