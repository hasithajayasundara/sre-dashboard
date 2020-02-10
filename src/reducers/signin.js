import {
  SET_USER_INFORMATION,
  FETCH_GOOGLE_PROFILE_SUCCESS,
  FETCH_GOOGLE_PROFILE_FAILED
} from "../actions/types";

const initialState = {
  signedIn: false,
  user: {
    name: "",
    picture: "",
    team: "",
    position: "",
    id_token: ""
  }
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GOOGLE_PROFILE_SUCCESS:
      let { name, picture, id_token } = action.payload;
      return {
        signedIn: true,
        user: {
          name,
          picture,
          id_token
        }
      };
    case FETCH_GOOGLE_PROFILE_FAILED:
      return state;
    case SET_USER_INFORMATION:
      return state;
    default:
      return state;
  }
};

export default signInReducer;
