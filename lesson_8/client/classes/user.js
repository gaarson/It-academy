export function User(_name, _age) {
	this.name = _name;
	this.age = _age;

	this.renderUser = function(id) {
		document.getElementById('list').innerHTML += (`
			${this.name} and ${this.age} 
			<input type="submit" value="X" class="Delete" data-userId=${id}>
			</br>
		`)
	}
}
