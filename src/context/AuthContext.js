import React, { createContext, useState, useEffect } from 'react';
import api from '../api/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user: null, accessToken: null });

const login = async (email, password) => {
    const res = await api.post('/auth/login', { email, password });
    const token = res.data.accessToken;
    const payload = JSON.parse(atob(token.split('.')[1]));
    const user = { ...payload };
    setAuth({ user, accessToken: token });
    return user; // ⬅️ return user supaya bisa dipakai untuk redirect
  };

  const logout = async () => {
    await api.post('/auth/logout');
    setAuth({ user: null, accessToken: null });
  };

  const refresh = async () => {
    try {
      const res = await api.post('/auth/refresh');
      const token = res.data.accessToken;
      const payload = JSON.parse(atob(token.split('.')[1]));
      setAuth({ user: payload, accessToken: token });
    } catch (err) {
      setAuth({ user: null, accessToken: null });
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
