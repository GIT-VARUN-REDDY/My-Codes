import React, { useState } from "react";
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "test@example.com" && password === "password") {
      alert("Login Successful!");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h2>Welcome Back!</h2>
      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div className="input-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button type="submit" className="login-btn">Login</button>
      <div className="forgot-password">Forgot Password?</div>
    </form>
  );
};

export default LoginForm;
