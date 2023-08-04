import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../constant';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['Product'],

  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({ url: '/', method: 'GET' }),
      providesTags: ['Product']
    }),

    getProductById: builder.query({
      query: (id) => ({ url: `/api/product/${id}`, method: 'GET' }),
      providesTags: ['Product']
    }),

    addProduct: builder.mutation({
      query: (variables) => ({
        url: '/api/add/product',
        body: variables.body,
        method: 'POST',
        headers: {
          Authorization: variables.token
        }
      }),
      invalidatesTags: ['Product']
    }),

    updateProduct: builder.mutation({
      query: (variables) => ({
        url: `/api/update/product/${variables.id}`,
        body: variables.body,
        params: {
          oldImage: variables.imagePath
        },
        headers: {
          Authorization: variables.token
        },
        method: 'PATCH',
      }),
      invalidatesTags: ['Product']
    }),

    removeProduct: builder.mutation({
      query: (variables) => ({
        url: `/api/remove/product/${variables.id}`,
        method: 'DELETE',
        headers: {
          Authorization: variables.token
        }
      }),
      invalidatesTags: ['Product']
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useAddProductMutation,
  useGetProductByIdQuery,
  useUpdateProductMutation,
  useRemoveProductMutation,
} = productApi;
