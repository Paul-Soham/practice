import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        sessionStorage.setItem('userData', JSON.stringify(data.token));
        navigate('/dashboard');
      } else {
        console.error('Login failed:', response.status);
        setError('Invalid Credential');
        if (response.status === 401) {
          console.log('Unauthorized access. Please check your credentials.');
        }
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Invalid Credential');
    }
  };

  return (
    <div className="container">
      <div className="row loginForm">
        <div className="card">
          <div className="card-header">
            <strong>Login</strong> Form
          </div>
          <div className="card-body card-block">
            <form onSubmit={handleSubmit} className="">
              <div className="form-group">
                <label htmlFor="nf-email" className=" form-control-label">Email</label>
                <input
                  type="email"
                  id="nf-email"
                  name="email"
                  placeholder="Enter Email.."
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <span className="help-block">Please enter your email</span>
              </div>
              <div className="form-group">
                <label htmlFor="nf-password" className=" form-control-label">Password</label>
                <input
                  type="password"
                  id="nf-password"
                  name="password"
                  placeholder="Enter Password.."
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <span className="help-block">Please enter your password</span>
              </div>
              <div className="card-footer loginBtn">
                <button type="submit" className="btn btn-primary btn-sm">
                  <i className="fa fa-dot-circle-o"></i> Sign In
                </button>
                <span>Create a new account? <Link to="/admin/" className="btn btn-success btn-sm2">Sign Up</Link></span>
              </div>
              <div className="alertMessage">
                <p>{error}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;