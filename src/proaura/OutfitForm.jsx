import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Landing.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function OutfitForm() {
  const [form, setForm] = useState({ gender: "",occasion: "",weather: "",style: "",colorpreference: "" });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    const { gender, occasion, weather, style, colorpreference } = form;
    if (!gender || !occasion || !weather || !style || !colorpreference) {
      alert("Please fill all fields!");
      return;
    }

    navigate('/output', { state: form });
  };

  return (
    <div className="hero1 align-items-center text-center text-black py-5">
      <h1 className='fw-bold mb-4'>Choose Your Preference</h1>

      <div className='mb-3'>
        <label className='fw-bold me-2'>Gender:</label>
        <input
          type="radio"
          name='gender'
          value="female"
          onChange={handleChange}
          checked={form.gender === "female"}/> Female
        <input
          type="radio"
          name='gender'
          value="male"
          onChange={handleChange}
          checked={form.gender === "male"}
          className="ms-3"/> Male
      </div>

      <div className='mb-3'>
        <label className='fw-bold me-2'>Occasion:</label>
        <select name="occasion" onChange={handleChange} className='back'>
          <option value="">Select</option>
          <option value="casual">Casual</option>
          <option value="party">Party</option>
          <option value="office">Office</option>
          <option value="wedding">Wedding</option>
        </select>
      </div>

      <div className='mb-3'>
        <label className='fw-bold me-2'>Weather:</label>
        <select name="weather" onChange={handleChange} className='back'>
          <option value="">Select</option>
          <option value="hot">Hot</option>
          <option value="rainy">Rainy</option>
          <option value="cold">Cold</option>
          <option value="moderate">Moderate</option>
        </select>
      </div>

      <div className='mb-3'>
        <label className='fw-bold me-2'>Color Preference:</label>
        <select name="colorpreference" onChange={handleChange} className='back'>
          <option value="">Select</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="mixed">Mixed</option>
        </select>
      </div>

      <div className='mb-3'>
        <label className='fw-bold me-2'>Preferred Style:</label>
        <select name="style" onChange={handleChange} className='back'>
          <option value="">Select</option>
          <option value="simple">Simple</option>
          <option value="trendy">Trendy</option>
          <option value="professional">Professional</option>
          <option value="sporty">Sporty</option>
        </select>
      </div>

      <button className='btn btn-light fw-bold mt-3' onClick={handleSubmit}>
        Suggest Outfit
      </button>
    </div>
  );
}

export default OutfitForm;
