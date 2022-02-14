import {
  CHECK_USER_IS_LOGIN,
  CHECK_IS_LOGIN,
  CHECK_IS_SIGNUP,
  CHECK_IS_RESET,
  CHECK_IS_EMAIL,
  CHECK_IS_PRODUCT,
  CHECK_IS_ADDPRODUCT,
  CHECK_IS_DETAIL,
  CHECK_CART,
  CHECK_ADDQTY,
} from "../helper";

const initialstates = {
  isuser: false,
  islogin: false,
  issignup: false,
  ispwreset: false,
  isemail: false,
  isproduct: false,
  isadd: false,
  isdetail: false,
  iscart: false,
  isaddqty: false,
};
export const statereducer = (state = initialstates, { type, payload }) => {
  switch (type) {
    case CHECK_USER_IS_LOGIN:
      const checkisuser = [state];
      checkisuser.isuser = payload;
      return checkisuser;
    case CHECK_IS_LOGIN:
      const checkuserislogin = [state];
      checkuserislogin.islogin = payload;
      return checkuserislogin;
    case CHECK_IS_SIGNUP:
      const checkissign = [state];
      checkissign.issignup = payload;
      return checkissign;
    case CHECK_IS_RESET:
      const checkisreset = [state];
      checkisreset.ispwreset = payload;
      return checkisreset;
    case CHECK_IS_EMAIL:
      const checkisemail = [state];
      checkisemail.isemail = payload;
      return checkisemail;
    case CHECK_IS_PRODUCT:
      const checkproduct = [state];
      checkproduct.isuser = true;
      checkproduct.isproduct = payload;
      return checkproduct;
    case CHECK_IS_ADDPRODUCT:
      const checkisadd = [state];
      checkisadd.isuser = true;
      checkisadd.isadd = payload;
      return checkisadd;
    case CHECK_IS_DETAIL:
      const checkisdetail = [state];
      checkisdetail.isuser = true;
      checkisdetail.isdetail = payload;
      return checkisdetail;
    case CHECK_CART:
      const checkiscart = [state];
      checkiscart.isuser = true;
      checkiscart.isproduct = true;
      checkiscart.iscart = payload;
      return checkiscart;
    case CHECK_ADDQTY:
      const checkaddqty = [state];
      checkaddqty.isuser = true;
      checkaddqty.isproduct = true;
      checkaddqty.isaddqty = payload;
      return checkaddqty;
    default:
      return state;
  }
};
