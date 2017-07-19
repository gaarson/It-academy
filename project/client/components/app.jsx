import React from 'react';
import { connect } from 'react-redux';

import Sidebar from './Sidebar.jsx';

const mapStateToProps = (props, params) => {
	console.log(props, params)

	return {
		props
	}
}

const App = ({deckId, children}) => {
		return (
			<div>
				<Sidebar />
			</div>
		)
	
}

export default connect(mapStateToProps)(App);
