import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("users/add", async (access_token) => {
  const response = await axios.post("/api-background/login", {
    googleAccessToken: access_token,
  });
  return response.data;
});
