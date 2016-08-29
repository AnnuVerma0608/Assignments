import React from 'react';
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			msg : 'we can manage the state'
		}
		this.update = this.update.bind(this);
	}
	update(event) {
		this.setState({msg: event.target.value})
	}
	render() {
		return (
			<div>
				<h1>Hello World!!</h1>
				<input onChange={this.update}/>
				<p>{this.state.msg}</p>
			</div>
		)
	}
}
App.propTypes = {
	txt : React.PropTypes.string,
	age : React.PropTypes.number.isRequired
}
App.defaultProps = {
	txt : 'this is default txt prop'
}
export default App;