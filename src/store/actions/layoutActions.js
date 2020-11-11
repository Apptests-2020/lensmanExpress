import { LAYOUT } from "../types";
import fetchHandler from "../../utils/fetchHandler";
// import { serialize } from "../../utils/helper";

export const getLayoutList = (successHandler, errorHandler) => {
	const fetchOptions = {
		url: `layouts`,
		method: "GET",
		secure: true,
		actionType: LAYOUT.GET_LAYOUT_LIST,
	};

	return fetchHandler(fetchOptions, successHandler, errorHandler);
};
export const createLayout = (values, successHandler, errorHandler) => {
	const fetchOptions = {
		url: `layout`,
		method: "POST",
		secure: true,
		actionType: LAYOUT.CREATE_LAYOUT,
		body: JSON.stringify(values),
	};
	return fetchHandler(fetchOptions, successHandler, errorHandler);
};
export const deleteLayout = (id, successHandler, errorHandler) => {
	const fetchOptions = {
		url: `layout/${id}`,
		method: "DELETE",
		secure: true,
		actionType: LAYOUT.DELETE_LAYOUT,
	};
	return fetchHandler(fetchOptions, successHandler, errorHandler);
};
