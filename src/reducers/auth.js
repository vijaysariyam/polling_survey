import LsService from "../services/localstorage";

let user = LsService.getCurrentUser();

const initialState = {
  user: user && user.admin_fullname ? user : null,
  isAuthenticated: user && user.admin_fullname ? true : false,
  isLoading: false,
  errorMessage: null,
  data: {},
};

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN_SUCCESS":
      LsService.setCurrentUser(payload);
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
      };

    case "LOGIN_UPDATED":
      var changedProfile = LsService.updateCurrentUser(payload);
      return { ...state, user: changedProfile };

    case "LOGOUT":
      LsService.removeCurrentUser();
      return { ...state, isAuthenticated: false, user: null, usertype: null };

    default:
      return state;
  }
}
