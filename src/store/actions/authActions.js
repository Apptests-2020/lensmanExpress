import fetchHandler from "../../utils/fetchHandler";
import { SESSION } from "../types";

export const getLoggedUser = (userid, successHandler, errorHandler) => {
	const fetchOptions = {
		url: `user/${userid}`,
		method: "GET",
		secure: true,
		actionType: SESSION.GET_USER_DETAILS,
	};
	return fetchHandler(fetchOptions, successHandler, errorHandler);
};

export const sendLoginCredentials = (values, successHandler, errorHandler) => {
	const fetchOptions = {
		url: `login`,
		method: "POST",
		secure: false,
		body: JSON.stringify(values),
		actionType: SESSION.SEND_LOGIN_CREDENTIALS,
	};
	return fetchHandler(fetchOptions, successHandler, errorHandler);
};

export const sendForgotPasswordCredentials = (values, successHandler, errorHandler) => {
	const fetchOptions = {
		url: `account/forgotpassword`,
		method: "POST",
		secure: false,
		body: JSON.stringify(values),
		actionType: SESSION.SEND_FORGOT_PASSWORD_CREDENTIALS,
	};
	return fetchHandler(fetchOptions, successHandler, errorHandler);
};

export const sendResetPasswordCredentials = (values, successHandler, errorHandler) => {
	const fetchOptions = {
		url: `account/passwordreset/${values.userId}`,
		method: "PUT",
		secure: false,
		body: JSON.stringify(values),
		actionType: SESSION.SEND_RESET_PASSWORD_CREDENTIALS,
	};
	return fetchHandler(fetchOptions, successHandler, errorHandler);
};
export const changePassword = (values, successHandler, errorHandler) => {
	const fetchOptions = {
		url: `changepassword`,
		method: "PUT",
		secure: true,
		body: JSON.stringify(values),
		actionType: SESSION.CHANGE_PASSWORD,
	};
	return fetchHandler(fetchOptions, successHandler, errorHandler);
};
export function updateLoginCredentials(credentials, successHandler) {
	successHandler && successHandler();
	return {
		type: SESSION.UPDATE_LOGIN_CREDENTIALS,
		payload: credentials,
	};
}
