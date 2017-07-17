import React from 'react';

export const Form = ({setUserData}) => 
	<div>
		<input type="text" id="name" onChange={setUserData} placeholder="Имя" />
		<input type="number" id="age" onChange={setUserData} placeholder="Возраст" />
		<input type="submit" id="add" onClick={setUserData} value="ОК" />
	</div>



