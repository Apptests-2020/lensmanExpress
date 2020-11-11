import { SCHOOL } from "../types";
import fetchHandler from "../../utils/fetchHandler";
import { serialize } from "../../utils/helper";
export function setSchoolFilter(filter, successHandler) {
	successHandler && successHandler();
	return {
		type: SCHOOL.SET_FILTER,
		payload: filter,
	};
}
export const getSchoolList = (values, successHandler, errorHandler) => {
	const fetchOptions = {
		url: `schools?${serialize(values)}`,
		method: "GET",
		secure: true,
		actionType: SCHOOL.GET_SCHOOL_LIST,
	};

	return fetchHandler(fetchOptions, successHandler, errorHandler);
};
export const getGradeList = (id, successHandler, errorHandler) => {
	const fetchOptions = {
		url: `school/${id}/grades`,
		method: "GET",
		secure: true,
		actionType: SCHOOL.GET_GRADE_LIST,
	};

	return fetchHandler(fetchOptions, successHandler, errorHandler);
};
export const getSectionList = (values, successHandler, errorHandler) => {
	const fetchOptions = {
		url: `school/${values.schoolId}/grade/${values.grade}/sections`,
		method: "GET",
		secure: true,
		actionType: SCHOOL.GET_SECTION_LIST,
	};

	return fetchHandler(fetchOptions, successHandler, errorHandler);
};
export const createSchool = (values, successHandler, errorHandler) => {
	const fetchOptions = {
		url: `school`,
		method: "POST",
		secure: true,
		actionType: SCHOOL.CREATE_SCHOOL,
		body: JSON.stringify(values),
	};
	return fetchHandler(fetchOptions, successHandler, errorHandler);
};
export const updateSchool = (values, successHandler, errorHandler) => {
	const fetchOptions = {
		url: `school/${values.id}`,
		method: "PUT",
		secure: true,
		actionType: SCHOOL.UPDATE_SCHOOL,
		body: JSON.stringify(values),
	};
	return fetchHandler(fetchOptions, successHandler, errorHandler);
};
export const deleteSchool = (id, successHandler, errorHandler) => {
	const fetchOptions = {
		url: `school/${id}`,
		method: "DELETE",
		secure: true,
		actionType: SCHOOL.DELETE_SCHOOL,
	};
	return fetchHandler(fetchOptions, successHandler, errorHandler);
};
