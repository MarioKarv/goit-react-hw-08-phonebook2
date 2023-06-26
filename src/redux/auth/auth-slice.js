import { createSlice } from "@reduxjs/toolkit";
import { login, logout, getUser, signup } from './auth-operations'

const initialState = {
    user: {},
    token: '',
    isLogin: false,
    isLoading: false,
    error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        const { token, user } = payload;
        state.isLoading = false;
        state.isLogin = true;
        state.token = token;
        state.user = user;
      })
      .addCase(signup.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        const { token, user } = payload;
        state.isLoading = false;
        state.isLogin = true;
        state.token = token;
        state.user = user;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        const { name, email } = payload;
        state.isLoading = false;
        state.isLogin = true;
        state.user.name = name;
        state.user.email = email;
      })
      .addCase(getUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.token = '';
        state.error = payload;
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, state => {
        state.isLoading = false;
        state.isLogin = false;
        state.token = '';
        state.user = {};
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default authSlice.reducer