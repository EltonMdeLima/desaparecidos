// store/slices/peopleSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPeople = createAsyncThunk(
  'people/fetchPeople',
  async (_, { getState, rejectWithValue }) => {
    try {
      // Obtenha o token do estado do Redux
      const token = getState().auth.token; 
      if (!token) {
        // Se não houver token, rejeite a requisição
        return rejectWithValue('Nenhum token de autenticação encontrado.');
      }

      const response = await axios.get('/api/v1/ocorrencias/informacoes-desaparecido', {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });
      return response.data.content;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const peopleSlice = createSlice({
  name: 'people',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeople.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchPeople.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default peopleSlice.reducer;