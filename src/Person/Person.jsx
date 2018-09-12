import React from 'react';

const Person = props => {
	return (
		<div className="person">
			<h2>Im Person with name {props.name} {props.age} and {props.children || '...'}</h2>
			<span>Change Name: </span>
			<input type="text" value={props.name} onChange={(event) => props.oncChangeName(event, props.id)}></input>
		</div>
	)
}

export default Person; 