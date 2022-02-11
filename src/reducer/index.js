import {
  CHECK_USER_IS_LOGIN,
  CHECK_IS_LOGIN,
  CHECK_IS_SIGNUP,
  CHECK_IS_RESET,
  CHECK_IS_EMAIL,
  CHECK_IS_PRODUCT,
} from "../helper";

const initialstates = {
  isuser: false,
  islogin: false,
  issignup: false,
  ispwreset: false,
  isemail: false,
  isproduct: false,
};
export const reducer = (state = initialstates, { type, payload }) => {
  switch (type) {
    case CHECK_USER_IS_LOGIN:
      return payload;
    case CHECK_IS_LOGIN:
      return payload;
    case CHECK_IS_SIGNUP:
      return payload;
    case CHECK_IS_RESET:
      return payload;
    case CHECK_IS_EMAIL:
      return payload;
    case CHECK_IS_PRODUCT:
      return payload;
    default:
      return state;
  }
};
