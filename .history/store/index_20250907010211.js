// store/index.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import peopleReducer from './slices/peopleSlice';
import { setToken } from './slices/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    people: peopleReducer,
  },
});

// Ação para carregar o token do localStorage na inicialização da aplicação
// Adicione esta verificação para garantir que o código só rode no cliente
if (typeof window !== 'undefined') {
  const token = localStorage.getItem('authToken');
  if (token) {
    store.dispatch(setToken(token));
  }
}