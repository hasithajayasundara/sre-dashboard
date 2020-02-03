import { GET_POSTS_SUCCESS } from "../actions/types";

const initialState = {
  posts: []
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return { ...state, posts: [...action.payload] };
    default:
      return state;
  }
};

export default dashboardReducer;
