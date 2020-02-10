import {
  SET_USER_INFORMATION,
  FETCH_GOOGLE_PROFILE,
  FETCH_GOOGLE_PROFILE_SUCCESS,
  FETCH_GOOGLE_PROFILE_FAILED
} from "./types";

export const fetchGoogleProfile = payload => {
  return { type: FETCH_GOOGLE_PROFILE, payload };
};

export const fetchGoogleProfileSuccess = payload => {
  return { type: FETCH_GOOGLE_PROFILE_SUCCESS, payload };
};

export const fetchGoogleProfileFailed = payload => {
  return { type: FETCH_GOOGLE_PROFILE_FAILED, payload };
};
