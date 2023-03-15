import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const server = process.env.REACT_APP_SERVER_URL;

const productsApi = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: `${server}/api/products` }),
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: (count) => ({
        url: "/",
        params: { count },
        method: "GET",
      }),
    }),
    fetchEachProduct: builder.query({
      query: (id) => ({
        url: "/eachProduct",
        params: { id },
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchProductsQuery, useFetchEachProductQuery } = productsApi;

export { productsApi };
