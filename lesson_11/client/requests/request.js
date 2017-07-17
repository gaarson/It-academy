import request from 'superagent';

export const addUser = ({name, age}) => {
	return new Promise((resolve, reject) => {
		request
			.post('/add_user')
			.send({name, age})
			.end((err, res) => {
				if(res.text == 'success')
					resolve('success');
				else reject(res.text);
			})
	})
}

export const getUsers = () => {
	return new Promise((resolve, reject) => {
		request
			.get('/list')
			.end((err, res) => {
				if(err) reject(err);

				resolve(res.body);
			})
	})
}