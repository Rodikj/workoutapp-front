import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage: React.FC = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Logging in with:', formData);
        // Add login logic here (e.g., API call)
    };

    return (
      <div className="wrapper">
      <form action="#" onSubmit={handleSubmit}>
        <h2>Login</h2>
          <div className="input-field">
          <input 
            type="text" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
            required 
          />
          <label>Enter your email</label>
        </div>
        <div className="input-field">
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
          <label>Enter your password</label>
        </div>
        <button type="submit">Log In</button>
        <div className="register">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
    );
};

export default LoginPage;
