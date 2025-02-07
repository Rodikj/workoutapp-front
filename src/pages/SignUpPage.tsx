import React, { useState } from 'react';
import '../styles/LoginForm.css';
import { useNavigate } from 'react-router-dom';
import AutService from '../services/AutService';

interface SignUpFormData {
  name: string;
  lastName: string;
  age: string;
  height: string;
  weight: string;
  userName: string;
  email: string;
  password: string;
  gender: string;
}

const SignUpPage: React.FC = () => {
    document.body.className = 'auth-body';
    const [formData, setFormData] = useState<SignUpFormData>({
        name: '',
        lastName: '',
        age: '',
        height: '',
        weight: '',
        userName: '',
        email: '',
        password: '',
        gender: '',
    });

    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
      }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      try {
          const response = await AutService.registerUser({
              name: formData.name,
              lastName: formData.lastName,
              age: parseInt(formData.age),
              height: parseFloat(formData.height),
              weight: parseFloat(formData.weight),
              userName: formData.userName,
              email: formData.email,
              password: formData.password,
              gender: formData.gender,
          });

          if (response.status === 200) {
              console.log('User registered successfully:', response.data);
              navigate('/login');
          } else {
              setError('Failed to register user. Please try again.');
          }
      } catch (err) {
          console.error('Error during registration:', err);
          setError('An error occurred. Please check your input or try again later.');
      }
  };

  return (
    <div className="auth-wrapper">
        <form action="#" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            {error && <p className="error-message">{error}</p>}
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
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label>Email</label>
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
                    <option value="" disabled>
                        Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <button type="submit">Sign Up</button>
            <div className="register">
                <p>
                    Already have an account? <a href="/login">Log In</a>
                </p>
            </div>
        </form>
    </div>
);
};


export default SignUpPage;
