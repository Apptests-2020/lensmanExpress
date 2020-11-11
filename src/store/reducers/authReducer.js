import { SESSION } from "../types";

export default (state = {}, action) => {
	switch (action.type) {
		case SESSION.SEND_LOGIN_CREDENTIALS:
			return {
				...state,
				userDetails: action.payload,
				accessToken: action.payload.accessToken,
			};
		case SESSION.UPDATE_LOGIN_CREDENTIALS:
			return {
				...state,
				userDetails: action.payload,
			};
		case SESSION.GET_USER_DETAILS:
			return {
				...state,
				userDetails: action.payload,
			};
		default:
			return state;
	}
};
