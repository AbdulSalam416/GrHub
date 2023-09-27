export const loginStart = () => ({
  type: "LOGIN_START",
});

export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const loginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

// Logout Actions
export const logout = () => ({
  type: "LOGOUT",
});

// Get All Users Actions
export const getUserDataStart = () => ({
  type: "GET_USER_DATA_START",
});

export const getUserDataSuccess = (allData) => ({
  type: "GET_USER_DATA_SUCCESS",
  payload: allData,
});

export const getUserDataFailure = (error) => ({
  type: "GET_USER_DATA_FAILURE",
  payload: error,
});
