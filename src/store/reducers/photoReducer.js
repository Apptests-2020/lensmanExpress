import { PHOTO } from "../types";

export default (
	state = {
		filters: {
			pageIndex: 1,
			pageSize: 10,
		},
	},
	action
) => {
	switch (action.type) {
		case PHOTO.SET_FILTER:
			return {
				...state,
				filters: action.payload ? action.payload : {},
			};
		case PHOTO.GET_PHOTO_LIST:
			return {
				...state,
				photoList: action.payload ? action.payload.result : [],
			};
		case PHOTO.SELECT_PHOTO: {
			const photoList = { ...state.photoList };
			const photo = photoList.data.find((row) => action.payload.row.id === row.id);
			photo.selected = action.payload.checked;
			return {
				...state,
				photoList,
			};
		}

		default:
			return state;
	}
};
