import { SCHOOL } from "../types";

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
		case SCHOOL.SET_FILTER:
			return {
				...state,
				filters: action.payload ? action.payload : {},
			};
		case SCHOOL.GET_SCHOOL_LIST:
			return {
				...state,
				schoolList: action.payload ? action.payload.result : [],
			};
		case SCHOOL.GET_GRADE_LIST:
			return {
				...state,
				gradeList: action.payload ? action.payload.result : [],
			};
		case SCHOOL.GET_SECTION_LIST:
			return {
				...state,
				sectionList: action.payload ? action.payload.result : [],
			};

		default:
			return state;
	}
};
