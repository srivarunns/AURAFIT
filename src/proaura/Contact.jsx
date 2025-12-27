import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Landing.css'

function Contact() {
  return (
    <div className="hero3">
    <div className="container py-4">
      <h2 className="fw-bold text-center mb-4">CONTACT US</h2>

      <div className=" box row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <form>
              <div className="mb-3">
                <label className="form-label fw-bold">Your Name</label>
                <input type="text" className="form-control" placeholder="Enter your name"/>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Your Email</label>
                <input 
                  type="email"className="form-control" placeholder="Enter your email"/>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Message</label>
                <textarea
                  className="form-control" rows="4" placeholder="Write your message..." ></textarea>
              </div>

              <button type="submit" className="btn w-100">
                Send Message
              </button>
            </form>
          </div>

          <div className="text-center mt-4">
            <p className="mb-1">
              <strong>Email:</strong> srivarunss04@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
