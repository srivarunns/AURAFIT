import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.css';

function LandingPage() {
  return (
    <>
      <section className="hero d-flex align-items-center text-center text-black">
        <div className="container">
          <h1 className="fw-bold">Aurafit</h1>
          <h4>"Where Your Style Meets Smart Choices"</h4>
          <p>
            Your smart companion for picking the right outfit — tailored to your style,
            your day, and your mood.
          </p>

          <div className="d-flex justify-content-center gap-3 mt-3">
            <Link to="/form" className="btn btn-light btn-lg">Get Started →</Link>
            <Link to="/about" className="btn btn-outline-light btn-lg text-primary">Learn More</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
