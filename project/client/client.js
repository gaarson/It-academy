import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import { fetchData } from './actions/index.js';

import * as reducers from './reducers/index.js';

import App from './components/app.jsx';

const store = createStore(combineReducers(reducers), applyMiddleware(thunkMiddleware));

function run() {
	let state = store.getState();
  console.log(state);
	render(
    <Provider store={store}>
			<Router>
				<div>
					<Route exact path='/' component={App} />
				</div>
			</Router>
		</Provider>,
		document.getElementById('root')
	);
}

function save() {
	let state = store.getState();

	fetch('/api/data', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			decks: state.decks,
			cards: state.cards
		})
	});
}

function init() {
	run();
	store.subscribe(run);
	store.subscribe(save);
	store.dispatch(fetchData());
}

init();
