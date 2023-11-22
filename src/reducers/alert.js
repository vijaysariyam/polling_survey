const initialState = {
  open: false,
  text: "",
  color: "error",
};

export default function alertReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "SHOWALERT":
      return { ...state, open: true, color: "error", ...payload };

    case "HIDEALERT":
      return { ...state, open: false, ...payload };

    default:
      return state;
  }
}
