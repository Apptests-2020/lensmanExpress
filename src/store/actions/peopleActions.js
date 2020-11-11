import { PEOPLE } from "../types";
import fetchHandler from "../../utils/fetchHandler";
import { serialize } from "../../utils/helper";
export function setPeopleFilter(filter, successHandler) {
	successHandler && successHandler();
	return {
		type: PEOPLE.SET_FILTER,
		payload: filter,
	};
}
export const getPeopleList = (values, successHandler, errorHandler) => {
	const fetchOptions = {
		url: `users?${serialize(values)}`,
		method: "GET",
		secure: true,
		actionType: PEOPLE.GET_PEOPLE_LIST,
	};

	return fetchHandler(fetchOptions, successHandler, errorHandler);
};
export const createPeople = (values, successHandler, errorHandler) => {
	const fetchOptions = {
		url: `user`,
		method: "POST",
		secure: true,
		actionType: PEOPLE.CREATE_PEOPLE,
		body: JSON.stringify(values),
	};
	return fetchHandler(fetchOptions, successHandler, errorHandler);
};
export const updatePeople = (values, successHandler, errorHandler) => {
	const fetchOptions = {
		url: `user/${values.id}`,
		method: "PUT",
		secure: true,
		actionType: PEOPLE.UPDATE_PEOPLE,
		body: JSON.stringify(values),
	};
	return fetchHandler(fetchOptions, successHandler, errorHandler);
};
export const deletePeople = (id, successHandler, errorHandler) => {
	const fetchOptions = {
		url: `user/${id}`,
		method: "DELETE",
		secure: true,
		actionType: PEOPLE.DELETE_PEOPLE,
	};
	return fetchHandler(fetchOptions, successHandler, errorHandler);
};
