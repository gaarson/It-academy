import {APP} from '../consts/index.js';

export const app = {
	changeUserData: (event) => ({type: APP.CHANGE_USER_DATA, event})
}
