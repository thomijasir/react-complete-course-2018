import React, { Component } from 'react';
import Person from './Person/Person'

class App extends Component {


	state = {
		persons: [
			{
				id:'1',
				name: 'max', 
				age: 28
			},
			{
				id:'2',
				name: 'Thomi', 
				age: 12
			},
		],
		isPerson: false,
	}
	componentDidMount() {
		console.log('Excuting Component')
	}

	switchNamehandler = (newName, whatEvent) => {
		console.log('here is new name: '+newName)
		console.log('What Event Pass this: '+whatEvent)
		const { persons } = this.state
		let personChange = [...persons]
		personChange[0].name = 'Joy'
		this.setState({
			persons: personChange
		})
	}

	nameChangeHandler = (event, id) => {
		console.log('Event is targetting!', event.target.value)
		console.log('Get Who is targetted!: ', id)
		const persons = [...this.state.persons]
		const personID = persons.map(el => el.id)
		const playerIndex = personID.indexOf(id)
		persons[playerIndex].name = event.target.value
		this.setState({
			persons
		})
	}

	togglePerson = () => {
		const isPerson = !this.state.isPerson
		console.log('State is: '+isPerson)
		this.setState({
			isPerson
		})
	}

	get personRender(){
		if(!this.state.isPerson) {
			return this.state.persons.map((el , index) => 
			<Person 
				key={index} 
				id={el.id}
				name={el.name} 
				age={el.age}
				oncChangeName={this.nameChangeHandler}/>
			)
		}
		return null
	}

	render() {
		// <button onClick={this.switchNamehandler.bind(this, 'Tono')}>Swith Name</button> <== Efficient way
		return (
			<React.Fragment>
				<div className="mainmenu">
					<p>this is really working!</p>
					<button onClick={this.togglePerson}>Toggle Show</button>
				</div>
				{ this.personRender }
			</React.Fragment>
		);
	}
}

export default App;
