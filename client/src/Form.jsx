import React from 'react';
import axios from 'axios';

class InputForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
  			value: '',
  		};
  		this.onChangeText = this.onChangeText.bind(this);
  		this.onSubmit = this.onSubmit.bind(this);
	}

	onChangeText(e) {
		this.setState({value: e.target.value});
	}

	onSubmit() {
    	const newInput = {
    		input_text: this.state.value,
    	}
    	console.log(newInput);
    	debugger;
    	axios.post('http://localhost:4000/inputs/add/', newInput)
            .then(res => console.log(res.data));
        debugger;
  	};

	render() {
		console.log(this.state);

		return(
	      <form onSubmit={this.onSubmit}>
	      <h1>Hello Ella</h1>
	      <p>Enter your text:</p>
	      <input
	        type='text'
	        value={this.state.value}
	        onChange={this.onChangeText}
	      />
	      <button type="submit">
	      Submit
	      </button>
	      </form>
	  	);
	}
}

export default InputForm;