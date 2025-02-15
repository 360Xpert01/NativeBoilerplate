import { createSlice } from '@reduxjs/toolkit';

// Mock user data
const mockUsers = [
  { phone: '03420599976', password: '12345' },
  { phone: '03420599977', password: '123' },
];

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null, // Stores logged-in user data
    error: null, // Stores error message if credentials are incorrect
  },
  reducers: {
    login: (state, action) => {
      const { phone, password } = action.payload;
      const user = mockUsers.find((u) => u.phone === phone && u.password === password);

      if (user) {
        state.user = user;
        state.error = null;
      } else {
        state.user = null;
        state.error = 'Invalid phone number or password. Please try again.';
      }
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
