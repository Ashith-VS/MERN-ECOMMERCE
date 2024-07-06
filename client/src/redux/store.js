import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import reducer from "./reducer";

const middleware = applyMiddleware(thunk);

const configureStore = (state) => {
  return createStore(reducer,state,composeWithDevTools( middleware) );
};

export default configureStore;