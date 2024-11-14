import React, { useState } from 'react';
import "../../styles/LoginPage.css";
 // Ensure this CSS file exists in the correct location.
import { GoogleLogin } from 'react-google-login'; // For Google OAuth

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);  // Toggle between login and sign-up form
  const clientId = "96060579860-cu0knq3qr2a3vbg8crfg2d0b6gbdffkv.apps.googleusercontent.com"; // Add your Google client ID here

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic
    console.log("Logging in...");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add signup logic
    console.log("Signing up...");
  };

  const handleGoogleLogin = (response) => {
    console.log(response); // Handle Google login response
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={isLogin ? handleLogin : handleSignUp}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>

        <div className="auth-toggle">
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
          </button>
        </div>

        <div className="google-login">
          <GoogleLogin
            clientId={clientId}
            buttonText="Login with Google"
            onSuccess={handleGoogleLogin}
            onFailure={handleGoogleLogin}
            cookiePolicy="single_host_origin"
            redirectUri="http://localhost:5173/" 
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
