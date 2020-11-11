import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import Reducer from "./reducers";

const logger = createLogger({
	collapsed: true,
});

const middlewares = [thunk];
if (process.env.NODE_ENV === "development") {
	middlewares.push(logger);
}

export const store = createStore(Reducer, applyMiddleware(...middlewares));
