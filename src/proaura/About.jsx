import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Landing.css'

function About() {
  return (
    <div className="hero2">
    <div className="container py-4">
      <h2 className="fw-bold text-center mb-3">ABOUT</h2>

      <h4 className="text-center">
        "Where Your Style Meets Smart Choices"
      </h4>

      <p className="text-center mb-4 mt-2">
        Aurafit is your smart companion for picking the right outfit-
        tailored to your style, your day, and your mood.  
        It intelligently suggests outfit combinations based on gender, 
        occasion, weather, color preference, and your personal style.
      </p>

      <div className="card shadow p-4">
        <h4 className="fw-bold">What Aurafit Does</h4>
        <ul>
          <li>Smart outfit recommendations based on your selections</li>
          <li>Gender-based and weather-based suggestions</li>
          <li>Color combination and temperature protection tips</li>
          <li>Save favorite outfits using localStorage</li>
        </ul>

        <h4 className="fw-bold mt-4">Our Goal</h4>
        <p>
          To simplify daily outfit decisions using intelligent logic and 
          provide smart, stylish recommendations for everyone.
        </p>
      </div>
    </div>
    </div>
  );
}

export default About;

