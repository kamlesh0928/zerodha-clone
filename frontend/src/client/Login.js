import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [submitError, setSubmitError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const validate = () => {
        let formErrors = {};

        if (!formData.email) {
            formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Email is invalid';
        }

        if (!formData.password) {
            formErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            formErrors.password = 'Password must be at least 6 characters long';
        }

        setErrors(formErrors);

        return (Object.keys(formErrors).length === 0);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const response = await fetch('https://zerodha-clone-back.onrender.com/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
                if (response.ok) {
                    setFormData({ name: '', email: '', phone: '', password: '' });
                    window.location.href = 'https://zerodha-clone-dashboard-xx4e.onrender.com';
                } else {
                    const errorData = await response.json();
                    setSubmitError(errorData.message || 'Login failed');
                }
            } catch (error) {
                console.error('Error:', error);
                setSubmitError('An error occurred during login');
            }
        }
    };

    return (
        <div className="container">
            <div className="row mt-5 mb-5">
                <div className="col-3"></div>
                <div className="col-6">
                    <h3 className="text-center mb-4">Login to Your Account</h3>
                    {submitError && <div className="alert alert-danger">{submitError}</div>}
                    <form onSubmit={handleSubmit} noValidate>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                id="email"
                                placeholder="Enter Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>

                        <div className="mb-3 position-relative">
                            <label htmlFor="password" className="form-label">Password</label>
                            <div className="input-group">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                    id="password"
                                    placeholder="Enter Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{
                                        position: 'absolute',
                                        right: '10px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        border: 'none',
                                        background: 'transparent',
                                        cursor: 'pointer',
                                        padding: '0',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                >
                                    {showPassword ? (
                                        <i className="fas fa-eye-slash" style={{ color: '#6c757d' }}></i>
                                    ) : (
                                        <i className="fas fa-eye" style={{ color: '#6c757d' }}></i>
                                    )}
                                </button>
                            </div>
                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>

                    <div className="mt-4 text-center">
                        <p>
                            Don't have account?{' '}
                            <Link to={'/usersignup'} className="text-primary">
                                Signup here
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    );
}

export default Login;