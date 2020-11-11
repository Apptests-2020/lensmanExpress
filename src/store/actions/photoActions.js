import { PHOTO } from "../types";
import fetchHandler from "../../utils/fetchHandler";
import { serialize } from "../../utils/helper";
export function setPhotoFilter(filter, successHandler) {
	successHandler && successHandler();
	return {
		type: PHOTO.SET_FILTER,
		payload: filter,
	};
}
export const getPhotoList = (values, successHandler, errorHandler) => {
	const fetchOptions = {
		url: `photos?${serialize(values)}`,
		method: "GET",
		secure: true,
		actionType: PHOTO.GET_PHOTO_LIST,
	};

	return fetchHandler(fetchOptions, successHandler, errorHandler);
};
