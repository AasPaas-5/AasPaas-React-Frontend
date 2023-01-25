import { createSlice } from "@reduxjs/toolkit";
import { login } from "../thunks/login";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    name: "",
    email: "",
    _id: "",
    picture: "",
    userLoaded: false,
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    // fetch
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload.token;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state._id = action.payload.id;
      state.picture = action.payload.picture;
      state.userLoaded = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const authReducer = authSlice.reducer;
