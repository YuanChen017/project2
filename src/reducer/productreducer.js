import { ADD_PRODUCT, DELETE_PRODUCT } from "../helper";

const productinital = {
  productname: "iWatch",
  productdesc: "apple new design watch",
  category: "phone",
  price: 123,
  quantity: 100,
  addtocart: 0,
  imagelink:
    "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
};

export const productreducer = (state = [productinital], { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      return [...state, { ...payload }];
    case DELETE_PRODUCT:
      return [...state.slice(0, payload), ...state.slice(payload + 1)];
    default:
      return state;
  }
};
