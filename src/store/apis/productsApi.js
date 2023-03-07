import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:6969",
    fetchFn: async (...arg) => {
      return fetch(...arg);
    },
  }),
  endpoints(builder) {
    return {
      removeAlbum: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [{ type: "Album", id: album.id }];
        },
        query: (album) => {
          return {
            url: `/albums/${album.id}`,
            method: "DELETE",
          };
        },
      }),
      addAlbum: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [{ type: "UsersAlbums", id: user.id }];
        },
        query: (user) => {
          return {
            url: "/albums",
            method: "POST",
            body: { userId: user.id },
          };
        },
      }),
      fetchProducts: builder.query({
        // providesTags: (result, error, user) => {
        //   const tags = result.map((album) => {
        //     return { type: "Album", id: album.id };
        //   });
        //   tags.push({ type: "UsersAlbums", id: user.id });
        //   return tags;
        // },
        query: ({ count }) => {
          return {
            url: "/products",
            params: { count },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useFetchProductsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = productsApi;

export { productsApi };
