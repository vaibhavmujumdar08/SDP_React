import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleAuthButton = ({ onSuccess, onFailure }) => {
  return (
    <GoogleLogin
      clientId="96060579860-cu0knq3qr2a3vbg8crfg2d0b6gbdffkv.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy="single_host_origin"
    />
  );
};

export default GoogleAuthButton;
