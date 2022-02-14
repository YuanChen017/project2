import { ADD_PRODUCT, DELETE_PRODUCT, ITEM_DETAIL } from "../helper";

export const addproduct = (dispatch) => (product) => {
  dispatch({
    type: ADD_PRODUCT,
    payload: product,
  });
};
export const deleteproduct = (dispatch) => (index) => {
  dispatch({
    type: DELETE_PRODUCT,
    payload: index,
  });
};
export const itemdetail = (dispatch) => (index) => {
  dispatch({
    type: ITEM_DETAIL,
    payload: index,
  });
};
