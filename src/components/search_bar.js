// import React from 'react';

//in the case the component is functionnal
// const SearchBar = () =>{
// 	return <input />;
// };

//***********************************

//because there is an input in the component, we need to keep record.
//declare original state.
//we will create a class based component, using ES6 class, 
//it is object with property and methods
//we will get the methods and property from the Component class alreday existing, 
//including the necessary render method

import React, { Component } from 'react';
// const Component = React.Component;

class SearchBar extends Component{
// class SearchBar extends React.Component{
	constructor(props){
		super(props);
		this.state = {term:''};
	}

	render(){
		return (
			<div className="search-bar">
				<input 
					value={this.state.term}
					onChange={(event) => this.onImputChange(event.target.value)}
				/>
			</div>
		);
	}

	onImputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

//it could be instanciated by created let searchB = new SearchBar



export default SearchBar;
