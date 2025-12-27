import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Landing.css"; 

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  const removeFavorite = (index) => {
    const updated = favorites.filter((_, i) => i !== index);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <>
      <div className="hero4">
        <section className="container py-5">
          <h2 className="text-center fw-bold mb-4">Your Favorite Outfits</h2>

          {favorites.length === 0 ? (
            <p className="text-center fs-5 mt-5">No favorites yet! ❤️</p>
          ) : (
            <div className="row g-4">
              {favorites.map((item, index) => (
                <div key={index} className="col-md-4 col-lg-3">
                  <div className="card favorite-card shadow">
                    <img
                      src
                      alt="Outfit"
                      className="card-img-top favorite-img"
                    />

                    <div className="card-body text-center">
                      <p className="small text-muted">{item.topWear}</p>
                      <p className="small text-muted">{item.bottomWear}</p>
                      <p className="small text-muted">{item.footwear}</p>
                      <p className="small text-muted">{item.accessories}</p>
                      <p className="small text-muted">{item.fabric}</p>
                      <p className="small text-muted">{item.tempTips}</p>

                      <button className="btn btn-danger btn-sm" onClick={() => removeFavorite(index)}>Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-4">
            <Link to="/form" className="btn btn-dark">⬅️ Back to Form </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Favorites;