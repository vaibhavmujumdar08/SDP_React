export const handleLogin = (email, password) => {
    return fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .catch((err) => { throw new Error(err); });
  };
  
  export const handleSignUp = (email, password) => {
    return fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .catch((err) => { throw new Error(err); });
  };
  