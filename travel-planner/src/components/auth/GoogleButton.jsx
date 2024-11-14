import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleAuthButton = ({ onSuccess, onFailure }) => {
  return (
    <GoogleLogin
      clientId="252309887368-ahkpohhkoroo1ouqm87rhem6dnbklqpo.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy="single_host_origin"
    />
  );
};

export default GoogleAuthButton;
