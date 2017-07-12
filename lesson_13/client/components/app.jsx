import React from 'react';
import PropTypes from 'prop-types';
import { getUsers } from './../requests/request.js';
import { searchUser } from './../actions/actions.js';

import {app} from '../actions/index.js';
import { connect } from 'react-redux';

import { User } from './user.jsx';
import { Form } from './form.jsx';

const mapStateToProps = ({App}) => ({
	users: app.users,
	userList: app.userList,
	user: app.user
})

const mapDispatchToProps = dispatch => ({
	changeUserData: (e) => dispatch(app.changeUserData(e.target))
})

class App extends React.Component {
	constructor(props) {
		super(props);

		this.searchUser = searchUser.bind(this);
	}

	componentDidMount() {
		// getUsers().then(users => {
		// 	this.setState({users});
		// 	this.searchUser();
		// });
	}

	render() {
		console.log(this.props);
		// const {userList} = this.state;
		return (
			<div>	
				<Form setUserData={this.props.changeUserData}/>
			</div>
		)
	}
}

App.PropTypes = {
	userList: PropTypes.array,
	users: PropTypes.array,
	user: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(App);




// <input onChange={(e) => this.searchUser(e)} placeholder="find user"/>
// 				{
// 					userList.map(item => {
// 						return <User name={item.name} key={item.id} age={item.age} />
// 					})
// 				}