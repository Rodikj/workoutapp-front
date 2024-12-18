import React, { useState } from 'react';
import './SignUpPage.css';

const SignUpPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        age: '',
        height: '',
        weight: '',
        userName: '',
        password: '',
        gender: '' // Gender moved to bottom
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Sign Up Details:', formData);
        // Add signup logic here
    };

    return (
      <div className="wrapper">
        <form action="#" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="input-field">
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
            <label>First Name</label>
          </div>
          <div className="input-field">
            <input 
              type="text" 
              name="lastName" 
              value={formData.lastName} 
              onChange={handleChange} 
              required 
            />
            <label>Last Name</label>
          </div>
          <div className="input-field">
            <input 
              type="number" 
              name="age" 
              value={formData.age} 
              onChange={handleChange} 
              required 
            />
            <label>Age</label>
          </div>
          <div className="input-field">
            <input 
              type="number" 
              name="height" 
              value={formData.height} 
              onChange={handleChange} 
              required 
            />
            <label>Height (cm)</label>
          </div>
          <div className="input-field">
            <input 
              type="number" 
              name="weight" 
              value={formData.weight} 
              onChange={handleChange} 
              required 
            />
            <label>Weight (kg)</label>
          </div>
          <div className="input-field">
            <input 
              type="text" 
              name="userName" 
              value={formData.userName} 
              onChange={handleChange} 
              required 
            />
            <label>Username</label>
          </div>
          <div className="input-field">
            <input 
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              required 
            />
            <label>Password</label>
          </div>
          <div className="input-field no-line">
            <select 
              name="gender" 
              value={formData.gender} 
              onChange={handleChange} 
              required
            >
              <option value="" disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <button type="submit">Sign Up</button>
          <div className="register">
            <p>Already have an account? <a href="#">Log In</a></p>
          </div>
        </form>
      </div>
    );
};

export default SignUpPage;
