import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if needed
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
      } else {
        console.error('Login failed:', response.status);
        // Optionally, you can handle different HTTP status codes here
        // For example, display a specific message for 401 (Unauthorized)
        if (response.status === 401) {
          console.log('Unauthorized access. Please check your credentials.');
        }
      }
    } catch (error) {
      console.error('Error during login:', error);
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
