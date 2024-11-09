import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    fullName: 'Diya Patel',
    email: 'pateldiya3012@gmail.com',
    address: '69,Norbrook crescent',
    city: 'Etobicoke',
    province: 'Ontario',
    postalCode: 'M89-KD9',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  const [submittedData, setSubmittedData] = useState(null);

  return (
    <div className="App">
      <h1>Data Entry Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input type="text" name="fullName" onChange={handleChange} value={formData.fullName} required />

        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} value={formData.email} required />

        <label>Address:</label>
        <input type="text" name="address" onChange={handleChange} value={formData.address} required />

        <label>City:</label>
        <input type="text" name="city" onChange={handleChange} value={formData.city} required />

        <label>Province:</label>
        <input type="text" name="province" onChange={handleChange} value={formData.province} required />

        <label>Postal Code:</label>
        <input type="text" name="postalCode" onChange={handleChange} value={formData.postalCode} required />

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h2>Submitted Data</h2>
          <p>Full Name: {submittedData.fullName}</p>
          <p>Email: {submittedData.email}</p>
          <p>Address: {submittedData.address}</p>
          <p>City: {submittedData.city}</p>
          <p>Province: {submittedData.province}</p>
          <p>Postal Code: {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;