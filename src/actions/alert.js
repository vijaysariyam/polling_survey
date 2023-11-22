export const showAlert = (data) => async (dispatch) => {
  dispatch({
    type: "SHOWALERT",
    payload: data,
  });
};

export const hideAlert = (data) => async (dispatch) => {
  dispatch({
    type: "HIDEALERT",
    payload: data,
  });
};
