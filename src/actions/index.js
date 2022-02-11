import {
  CHECK_USER_IS_LOGIN,
  CHECK_IS_LOGIN,
  CHECK_IS_SIGNUP,
  CHECK_IS_RESET,
  CHECK_IS_EMAIL,
  CHECK_IS_PRODUCT,
} from "../helper";

export const checkUser = (dispatch) => (value) => {
  dispatch({
    type: CHECK_USER_IS_LOGIN,
    payload: { isuser: value },
  });
};
export const checklogin = (dispatch) => (value) => {
  dispatch({
    type: CHECK_IS_LOGIN,
    payload: { islogin: value },
  });
};
export const checksign = (dispatch) => (value) => {
  dispatch({
    type: CHECK_IS_SIGNUP,
    payload: { issignup: value },
  });
};
export const checkPwreset = (dispatch) => (value) => {
  dispatch({
    type: CHECK_IS_RESET,
    payload: { ispwreset: value },
  });
};
export const checkemail = (dispatch) => (value) => {
  dispatch({
    type: CHECK_IS_EMAIL,
    payload: { isemail: value },
  });
};
export const checkproduct = (dispatch) => (value) => {
  dispatch({
    type: CHECK_IS_PRODUCT,
    payload: { isproduct: value },
  });
};
