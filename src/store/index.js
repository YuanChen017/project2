import { createStore, combineReducers } from "redux";
import { productreducer } from "../reducer/productreducer";
import { statereducer } from "../reducer/statereducer";

export const store = createStore(
  combineReducers({
    states: statereducer,
    product: productreducer,
  })
);
