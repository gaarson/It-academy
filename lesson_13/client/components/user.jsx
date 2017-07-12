import React from 'react';

export const User = ({name, age, id}) =>
	<li key={id}>
		{name}, возраст {age} 
		<input type="submit" value="X" />
		<input type="submit" value="..." />
	</li>