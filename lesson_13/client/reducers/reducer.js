import {APP} from '../consts/index.js';

export const App = (state = {
	userList: [],
	users: [],
	user: {}
}, action) => {
	switch(action.type) {
		case APP.CHANGE_USER_DATA: 
			console.log(action);
			return state;
		default: return state;
	}
}