import React from 'react';
import PropTypes from 'prop-types';

import { getUsers } from './../requests/request.js';
import { setUserData, searchUser } from './../actions/actions.js';

import { User } from './user.jsx';
import { Form } from './form.jsx';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userList: [],
			users: [],
			user: {}
		}

		this.searchUser = searchUser.bind(this);
		this.setUserData = setUserData.bind(this);
	}

	componentDidMount() {
		getUsers().then(users => {
			this.setState({users});
			this.searchUser();
		});
	}

	render() {
		console.log(this.state.user);
		const {userList} = this.state;
		return (
			<div>
				<input onChange={(e) => this.searchUser(e)} placeholder="find user"/>
				{
					userList.map(item => {
						return <User name={item.name} key={item.id} age={item.age} />
					})
				}
				<Form setUserData={(e) => this.setUserData(e)}/>
			</div>
		)
	}
}

App.PropTypes = {
	userList: PropTypes.array,
	users: PropTypes.array,
	user: PropTypes.object
}
