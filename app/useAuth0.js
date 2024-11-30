// useAuth0.js
import { useState, useEffect } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';

let auth0Client;

const useAuth0 = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const initAuth0 = async () => {
      try {
        // Initialize Auth0 client
        auth0Client = await createAuth0Client({
          domain: 'your-auth0-domain.auth0.com',
          client_id: 'your-client-id',
          redirect_uri: window.location.origin, // Adjust based on your redirect URI
        });

        // Check if the user is authenticated
        const isAuthenticated = await auth0Client.isAuthenticated();
        setIsAuthenticated(isAuthenticated);

        if (isAuthenticated) {
          const user = await auth0Client.getUser();
          setUser(user);
        }
      } catch (error) {
        console.error('Error initializing Auth0 client:', error);
      }
    };

    initAuth0();
  }, []);

  const login = async () => {
    try {
      await auth0Client.loginWithPopup();
      const user = await auth0Client.getUser();
      setUser(user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const logout = () => {
    auth0Client.logout({
      returnTo: window.location.origin,
    });
    setIsAuthenticated(false);
    setUser(null);
  };

  return { user, isAuthenticated, login, logout };
};

export default useAuth0;
