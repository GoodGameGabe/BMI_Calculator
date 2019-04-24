import React from "react";
import PropTypes from "prop-types";
//create your first component

export class Second extends React.Component {
	constructor() {
		super();
		this.state = {
			age: ""
		};
	}
	render() {
		return (
			<h1>{this.state.age + " years old"}</h1>
			);
	
}

Second.proptypes = {
	age: PropTypes.number,
};

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			name: ""
		};
	}

	nameChange = e => {
		this.setState({ name: e.target.value });
	};

	render() {
		return (
			<div>
				<p>{"Hi " + this.state.name}</p>
				<input placeholder="Insert Name" value="eeee" />
				<button onClick={this.nameChange}>Change</button>
			</div>
		);
	}
}
