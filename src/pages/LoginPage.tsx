import React, { useState } from 'react';
import '../styles/LoginForm.css';
import AutService from '../services/AutService.tsx';
import { useNavigate } from 'react-router-dom';

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  userDTO: {
    id: number;
    username: string;
    email: string;
  }
}

const LoginPage: React.FC = () => {
    document.body.className = 'auth-body';
    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const {email, password} = formData;


        console.log("Logging in with", email, password);

        try {
            const response = await AutService.logInUser({ email, password });
            if (response.status === 200) {
                console.log('Full API response:', response.data);
                const responseData = response.data as LoginResponse;
                const { token, userDTO } = responseData;
                console.log('User DTO:', userDTO);
                console.log('Token:', token);
                localStorage.setItem('authToken', token);
                localStorage.setItem('userDTO', JSON.stringify(userDTO));
                localStorage.setItem('userId', userDTO.id.toString());
                
                navigate('/home');
            } else {
                console.error('Unexpected response status:', response.status);
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
      <div className="auth-wrapper">
      <form action="#" onSubmit={handleSubmit}>
        <h2>Login</h2>
          <div className="input-field">
          <input 
            type="text" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}
            required 
          />
          <label>Enter your username</label>
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
          <p>Don't have an account? <a href="/register">Register</a></p>
        </div>
      </form>
    </div>
    );
};

export default LoginPage;
