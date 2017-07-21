import {GET_USERS} from '../consts/index.js';
import {getUsers} from '../actions/index.js';
import {takeLatest} from 'redux-saga';
import {put, call, fork} from 'redux-saga/effects';
import request from 'superagent';

const getUsersReq = () => {
	return new Promise((resolve, reject) => {
		request
			.get('/list')
			.end((err, res) => {
				if(err) reject(err);

				console.log(res.body);
				resolve(res.body);
			});
	})
}

function* fetchUsers() {
	try {
		let users = yield call(getUsersReq);
		yield put(getUsers.success(users));
	} catch(err) {
		yield put(getUsers.error(err));
	}
}

function* watchFetchUser() {
	yield* takeLatest(GET_USERS.GET_USERS_PENDING, fetchUsers);
}

export default function* forks() {
	yield [
		fork(watchFetchUser)
	]
}




