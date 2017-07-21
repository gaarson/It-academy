import {APP, GET_USERS} from '../consts/index.js';

export const app = {
	changeUserData: (event) => ({type: APP.CHANGE_USER_DATA, event})
}

export const getUsers = {
	pending: () => ({type: GET_USERS.GET_USERS_PENDING}),
	success: (users) => ({type: GET_USERS.GET_USERS_SUCCESS, users}),
	error: (error) => ({type: GET_USERS.GET_USERS_ERROR, error})
}