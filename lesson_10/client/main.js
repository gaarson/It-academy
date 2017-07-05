import User, {Admin} from './classes/user.js';
import request from 'superagent';
import {addUser} from './requests/request.js';

const age = document.getElementById('age');
const name = document.getElementById('name');
const addButton = document.getElementById('add');
<<<<<<< HEAD
=======
const set = new Set();
>>>>>>> 619a0bb24e165e72199b9623eb2cbd6c7f8d84fc

addButton.addEventListener('click', () => {
	let data = {
		age: age.value,
		name: name.value
	};
<<<<<<< HEAD

	addUser(data)
		.then(succes => {
			console.log(succes);
		})
		.catch(error => {
			console.log(error);
		})
=======
  set.add(data);
  console.log(set);
  if(set.has(data)) {
    return alert("Уже существует");
  }

	//addUser(data)
		//.then(succes => {
			//console.log(succes);
		//})
		//.catch(error => {
			//console.log(error);
		//})
>>>>>>> 619a0bb24e165e72199b9623eb2cbd6c7f8d84fc
})

const render = () => {
	document.getElementById('list').innerHTML = "";
	request
	.get('/list')
	.end((err, res) => {
		const users = res.body;
<<<<<<< HEAD

		users.forEach(item => {
=======
		users.forEach((item, i) => {
      Object.keys(item).forEach((key) => {
        if(item[key] == "Rus") 
          item[key] = "rus" + i;
      })
      
      set.add({
        name: item.name,
        age: item.age
      });

>>>>>>> 619a0bb24e165e72199b9623eb2cbd6c7f8d84fc
			new User(item, item.id).renderUser(item.id);
		})
		
		new Admin().walkLikeAdmin();
		for(let i = 0; i < document.getElementsByClassName('Delete').length; i++)
			document.getElementsByClassName('Delete')[i].addEventListener('click', (e) => {
				deleteUser(e.target.dataset.userid);
			})
	})
}
render();

const deleteUser = (id) => {
	request
		.delete(`/delete/${id}`)
		.end((err, res) => {
			if(err) return console.log(err);
			console.log(res)
			if(res.text == 'success') render();
		})
}

<<<<<<< HEAD
=======
let arr = [2,5, 6,6 , 6];

let range = {
  from: 2,
  to: 10
}

range[Symbol.iterator] = function() {
  let current = this.from;
  let last = this.to;

  return {
    next() {
      if(current <= last) {
        return {
          done: false,
          value: current++
        }
      } else {
        return {
          done: true
        }
      }
    }
  }
}

//let map = new set();

//for(let key of range) {
  //map.set(key, "run" + key);
  //console.log(map.get(key));
//}

//console.log(map.get(5));
//console.log(map);

//for(let entry of map) {
  //console.log(entry);
//}
>>>>>>> 619a0bb24e165e72199b9623eb2cbd6c7f8d84fc


// var user1 = new User('Vasya', 14);
// display();
<<<<<<< HEAD
// user1.renderUsers();
=======
// user1.renderUsers();
>>>>>>> 619a0bb24e165e72199b9623eb2cbd6c7f8d84fc
