import { GET_USERS, DELETE_USER, ADD_USER, EDIT_USER } from './../consts/consts.js'



export const Reducer_1 = (state={
	UsersList: [],
    NewUser:{
        name:'',
        age:''
    },
    videoName: ''
},action) => {
	console.log(action);
	switch(action.type){
        case GET_USERS.GET_USERS_SUCCESS:
            return Object.assign({},state,{UsersList: action.UsersList});
		case GET_USERS.GET_USERS_ERROR:
            return state;
        case DELETE_USER.DELETE_USER_SUCCESS:
            return Object.assign({},state,{UsersList: action.UsersList});
        case DELETE_USER.DELETE_USER_ERROR:
            return state;
        case ADD_USER.ADD_USER_SUCCESS:
            return Object.assign({},state,{UsersList: action.UsersList});
        case ADD_USER.ADD_USER_ERROR:
            return state;
        case EDIT_USER.EDIT_USER_SUCCESS:
            return Object.assign({},state,{UsersList: action.UsersList});
        case EDIT_USER.EDIT_USER_ERROR:
            return state;

        case "SET_VIDEO_NAME": 
            console.log(action);
            return Object.assign({},state,{videoName: action.name});

        case "VIDEO_SUCCESS": 
            console.log(action);
            return state;

		default: return state;
	}
};