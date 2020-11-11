import { COMMON } from "../types";

export default (state = { cites: [] }, action) => {
	switch (action.type) {
		case COMMON.GET_COUNTIES_LIST:
			return {
				...state,
				counties: action.payload ? action.payload.result.slice(0, 50) : [],
			};
		case COMMON.GET_STATE_LIST:
			return {
				...state,
				states: action.payload ? action.payload.result : [],
			};
		case COMMON.GET_CITY_LIST:
			return {
				...state,
				cites: action.payload ? action.payload.result.slice(0, 50) : [],
			};

		default:
			return state;
	}
};
