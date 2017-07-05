import React from 'react';
import {getUsers} from './../requests/request.js';

import { User } from './user.jsx'

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userList: [],
			users: [],
			userName: ''
		}
	}

	componentDidMount() {
		getUsers().then(users => this.setState({users}));
	}

	setUserName(e) {
		let name = e.target.value;
		let users = this.state.users;
		let userList = [];

		userList = users.filter(item => {
			if(!name) return false;

			let lowName = item.name.toLowerCase();
			let lowValue = name.toLowerCase();

			return lowName.indexOf(lowValue) != -1;
		})

		if(!userList.length) userList = users;

		console.log(userList);
		this.setState({userList});
	}

	render() {
		const {userList} = this.state;
		return (
			<div>
				<input onChange={(e) => this.setUserName(e)} placeholder="find user"/>
				{
					userList.map(item => {
						return <User name={item.name} key={item.id} age={item.age} />
					})
				}
			</div>
		)
	}
}