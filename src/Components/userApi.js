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
    getCurrentUser: builder.query({
      query: () => ({
        url: "users/getcurrentUser",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }),
    }),
    updateUserAvatar: builder.mutation({
      query: (data) => ({
        url: "users/avatar",
        method: "POST",
        body: data,
        headers: {
          // "Content-Type": "application/json",
          Authorization: token,
        },
      }),
    }),
  }),
});

export const {
  useUserSignInMutation,
  useGetCurrentUserQuery,
  useUpdateUserAvatarMutation,
} = UserApi;
