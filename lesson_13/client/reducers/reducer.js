import {APP, GET_USERS} from '../consts/index.js';

export const App = (state = {
	userList: [],
	users: [],
	user: {}
}, action) => {
	switch(action.type) {
		case APP.CHANGE_USER_DATA: 
			console.log(action);
			return state;
		case GET_USERS.GET_USERS_SUCCESS:
			console.log('success', action);
			return state;
		case GET_USERS.GET_USERS_ERROR:
			console.log('error', action);
			return state;
		default: return state;
	}
}

{...state, }