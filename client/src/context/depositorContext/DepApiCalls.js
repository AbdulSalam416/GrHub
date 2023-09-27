import axios from "axios";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logout,
  getUserDataStart,
  getUserDataSuccess,
  getUserDataFailure,
} from "./DepActions";

// Function to fetch user data
export const getUserData = async (dispatch, username, accessToken) => {
  dispatch(getUserDataStart());

  try {
    const res = await axios.get(`/api/depositorRoute/profile/${username}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    dispatch(getUserDataSuccess(res.data));
  } catch (err) {
    dispatch(getUserDataFailure(err));
    console.log(err);
  }
};

export const loginUser = async (user, dispatch) => {
  dispatch(loginStart());
console.log(user)
  try {
    const res = await axios.post("/api/depositorRoute/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure(err));
    console.log(user);
  }
};

export const logoutUser = (dispatch) => {
  dispatch(logout());
};
