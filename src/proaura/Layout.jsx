import React from "react";
import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.css';

function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            <img src="logo.jpg" alt="" className="rounded-circle" width={100}/> Aurafit
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto gap-3">
              <li className="nav-item"><Link className="nav-link fw-bold" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link fw-bold" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link fw-bold" to="/favorites">Favorites</Link></li>
              <li className="nav-item"><Link className="nav-link fw-bold" to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <Outlet/> 
      </main>

      <footer className="py-4 bg-light text-center">
        <p>@ 2025 Aurafit — All Rights Reserved</p>
        <div className="fw-bold">
          <Link to="/">Home</Link> | <Link to="/about">About</Link> |<Link to="/favorites">Favorites</Link> | <Link to="/contact">Contact</Link>
        </div>
      </footer>
    </>
  );
}

export default Layout;
