import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  people: [],
  loading: false,
  error: null,
};

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setPeople(state, action) {
      state.people = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    // Você pode adicionar mais reducers aqui para manipulação de dados específicos
  },
});

export const { setPeople, setLoading, setError } = peopleSlice.actions;

export default peopleSlice.reducer;