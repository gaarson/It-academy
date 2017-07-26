import { GET_USERS,DELETE_USER, ADD_USER, EDIT_USER } from '../consts/consts.js';
import { getUsers,deleteUser, addUser, editUser, Videos } from '../action/actions.js';
import { takeLatest } from 'redux-saga';
import { put, call, fork } from 'redux-saga/effects';
import { getUsersRequest, deleteUserRequest, addUserRequest, editUserRequest, getVideosRequest } from "../requests/request";

//запрос на юзеров
function* fetchUsers() {
    try {
        let users = yield call(getUsersRequest);
        yield put(getUsers.success(users));
    } catch(err) {
        yield put(getUsers.error(err));
    }
}

function* fetchVideos({name}) {
    try {
        console.log(name);
        let videos = yield call(getVideosRequest, name);
        yield put(Videos.success(videos));
    } catch(err) {
        yield put(Videos.error(err));
    }
}

function* watchFetchVideos() {
    yield* takeLatest("VIDEOS_PENDING", fetchVideos);
}

function* watchFetchUser() {
    yield* takeLatest(GET_USERS.GET_USERS_PENDING, fetchUsers);
}

//запрос на удаление юзера
function* deleteUserMiddleware({Id}) {
    try {
        let users = yield call(deleteUserRequest, Id);
        yield put(deleteUser.success(users));
    } catch(err) {
        yield put(deleteUser.error(err));
    }
}

function* watchDeleteUserMiddleware() {
    yield* takeLatest(DELETE_USER.DELETE_USER_PENDING,  deleteUserMiddleware);
}

//запрос на добавление юзера
function* addUserMiddleware({NewUser}) {
    try {
        let users = yield call(addUserRequest, NewUser);
        console.log(NewUser);
        yield put(addUser.success(users));
    } catch(err) {
        yield put(addUser.error(err));
    }
}

function* watchAddUserMiddleware() {
    yield* takeLatest(ADD_USER.ADD_USER_PENDING,addUserMiddleware);
}

//запрос на изменеие юзера
function* editUserMiddleware({Id}) {
    try {
        let users = yield call(editUserRequest, Id);
        yield put(editUser.success(users));
    } catch(err) {
        yield put(editUser.error(err));
    }
}

function* watchEditUserMiddleware() {
    yield* takeLatest(EDIT_USER.EDIT_USER_PENDING,  editUserMiddleware);
}

export default function* forks() {
    yield [
        fork(watchFetchUser),
        fork(watchFetchVideos),
        fork(watchDeleteUserMiddleware),
        fork(watchAddUserMiddleware),
        fork(watchEditUserMiddleware)
    ]
}