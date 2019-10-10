import React from 'react';
import axios from 'axios';

class InputForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
  			input_text: '',
  		};
	}

	onSubmit = () => {
    	console.log("hi");
  	};

	render() {
		return(
	      <form onSubmit={this.onSubmit}>
	      <h1>Hello Ella</h1>
	      <p>Enter your text:</p>
	      <input
	        type='text'
	        onChange={this.myChangeHandler}
	      />
	      <button type="submit">
	      Submit
	      </button>
	      </form>
	  	);
	}
}

export default InputForm;