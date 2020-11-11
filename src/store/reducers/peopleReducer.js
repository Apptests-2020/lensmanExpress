import { PEOPLE } from "../types";

export default (
	state = {
		filters: {
			sortColumn: "",
			sortDirection: "asc",
			searchKey: "",
		},
	},
	action
) => {
	switch (action.type) {
		case PEOPLE.SET_FILTER:
			return {
				...state,
				filters: action.payload ? action.payload : {},
			};
		case PEOPLE.GET_PEOPLE_LIST:
			return {
				...state,
				peopleList: action.payload ? action.payload.result : [],
			};

		default:
			return state;
	}
};
