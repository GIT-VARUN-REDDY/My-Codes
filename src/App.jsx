import React from "react";
import LoginForm from "./LoginForm";
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="login-box">
        <LoginForm />
      </div>
    </div>
  );
};

export default App;