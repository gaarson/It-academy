import React from 'react';
import { combineReducers, createStore } from 'redux';
// import { Provider } from 'react-redux';
import { render } from 'react-dom';

// import * as reducers from './reducers/reducer.js';

// import App from './components/app.jsx';

// const store = createStore(combineReducers(reducers));
// <Provider store={store}>
// 		<App />
// 	</Provider>
const reducer = (state = {user: ""}, action) => {
	switch(action.type) {
		case "CHANGE": 
			console.log(action);
			return Object.assign({}, state, {user: action.event.value});
		default: return state;
	}
}

const store = createStore(combineReducers({reducer}));

store.subscribe(() => {
	console.log(store.getState());
})

const change = (e) => {
	const event = e.target;
	store.dispatch({type: "CHANGE", event});
}

render(
	<div>
		<input onChange={change} />
		<p></p>
	</div>, 
	document.getElementById('root')
);
