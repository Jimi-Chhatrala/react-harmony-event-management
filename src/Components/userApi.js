import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const token = Cookies.get("userAccessToken");

export const UserApi = createApi({
  reducerPath: "UserApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3046/api/v1/",
  }),
  endpoints: (builder) => ({
    userSignIn: builder.mutation({
      query: (data) => ({
        url: "users/login",
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useUserSignInMutation } = UserApi;
