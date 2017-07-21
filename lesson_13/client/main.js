import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import * as reducers from './reducers/reducer.js';
import sagas from './side-effects/sagas.js';

import App from './components/app.jsx';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(combineReducers(reducers), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// <Provider store={store}>
// 		<App />
// 	</Provider>
// const reducer = (state = {user: ""}, action) => {
// 	switch(action.type) {
// 		case "CHANGE": 
// 			console.log(action);
// 			return Object.assign({}, state, {user: action.event.value});
// 		default: return state;
// 	}
// }

// const store = createStore(combineReducers({reducer}));

// store.subscribe(() => {
// 	console.log(store.getState());
// })

// const change = (e) => {
// 	const event = e.target;
// 	store.dispatch({type: "CHANGE", event});
// }


