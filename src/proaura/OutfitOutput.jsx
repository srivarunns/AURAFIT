import React from "react";
import { useLocation, Link } from "react-router-dom";
import outfits from "./data/all_outfits.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Landing.css";

function OutfitOutput() {
  const location = useLocation();

  const form = location.state || {};

  const results = outfits.filter(o =>
    o.gender === form.gender &&
    o.occasion === form.occasion &&
    o.weather === form.weather &&
    o.style === form.style &&
    o.colorPreference === form.colorpreference
  );

  const displayResults = results.length
    ? results
    : outfits.filter(o => o.gender === form.gender);
  const saveFavorite = (item) => {
  const oldFav = JSON.parse(localStorage.getItem("favorites")) || [];
    localStorage.setItem("favorites", JSON.stringify([...oldFav, { ...item, ...form }]));
    alert("Added to favorites ❤️");
  };


  return (
    <div className="hero5">
      <div className="container text-center">
        <h1 className="fw-bold">Your Outfit Suggestions</h1>

        {displayResults.length === 0 && (
          <p className="text-danger mt-3">
            No outfits found. Please try different selections.
          </p>
        )}

        <div className="row justify-content-center mt-4 g-4">
          {displayResults.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card shadow p-3 text-start h-100">
                <h5 className="fw-bold mb-2">Outfit #{index + 1}</h5>
                <ul className="list-unstyled">
                  <li><strong>Top Wear:</strong> {item.topWear}</li>
                  <li><strong>Bottom Wear:</strong> {item.bottomWear}</li>
                  <li><strong>Footwear:</strong> {item.footwear}</li>
                  <li><strong>Accessories:</strong> {item.accessories}</li>
                  <li><strong>Fabric:</strong> {item.fabric}</li>
                </ul>
                <button className="btn btn-success mt-2 w-100" onClick={() => saveFavorite(item)}>❤️ Add to Favorites</button>
              </div>
            </div>
          ))}
        </div>

        <Link to="/form" className="btn btn-outline-dark mt-4">
          Back
        </Link>
      </div>
    </div>
  );
}

export default OutfitOutput;
