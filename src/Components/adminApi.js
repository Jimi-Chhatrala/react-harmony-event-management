import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const token = Cookies.get("userAccessToken");

export const AdminApi = createApi({
  reducerPath: "AdminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3046/api/v1/",
  }),
  endpoints: (builder) => ({
    adminSignIn: builder.mutation({
      query: (data) => ({
        url: "admin/login",
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useAdminSignInMutation } = AdminApi;
