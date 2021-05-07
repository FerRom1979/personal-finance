import { createStore, applyMiddleware } from "redux";
import reducers from "./root-reducer/index";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const compositeEnhancer = composeWithDevTools;

export const store = createStore(reducers, compositeEnhancer(applyMiddleware(thunk)));
