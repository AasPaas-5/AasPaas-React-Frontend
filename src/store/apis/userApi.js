import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const server = process.env.REACT_APP_SERVER_URL;


const userApi = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({ baseUrl: `${server}/api/users` }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (token) => ({
        url: "/login",
        method: "POST",
        body: { googleAccessToken: token },
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: { data },
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = userApi;
export { userApi };
