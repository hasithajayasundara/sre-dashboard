import { GET_POSTS, GET_POSTS_SUCCESS } from "./types";

export const getPosts = () => {
  console.log("hello");
  return { type: GET_POSTS };
};

export const getPostsSuccess = payload => {
  return { type: GET_POSTS_SUCCESS, payload };
};
