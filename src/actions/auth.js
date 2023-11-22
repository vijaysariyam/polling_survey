export const authSuccess = (data) => async (dispatch) => {
  dispatch({
    type: "LOGIN_SUCCESS",
    payload: data,
  });
};

export const authUpdated = (data) => async (dispatch) => {
  dispatch({
    type: "LOGIN_UPDATED",
    payload: data,
  });
};

export const authLogout = () => async (dispatch) => {
  dispatch({
    type: "LOGOUT",
  });
};
