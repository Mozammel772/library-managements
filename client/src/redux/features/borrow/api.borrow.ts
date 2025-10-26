import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { GetBorrowResponse } from "../../../types";
export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: (builder) => ({
    getBorrow: builder.query<GetBorrowResponse, void>({
      query: () => "borrow",
    }),
    // Mutation to add a new book
    addBorrow: builder.mutation({
      query: (borrow) => ({
        url: "borrow",
        method: "POST",
        body: borrow,
      }),
    }),
  }),
});

export const { useGetBorrowQuery, useAddBorrowMutation } = borrowApi;
