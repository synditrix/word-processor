import React from 'react';
import axios from 'axios'; 

const instance = axios.create({
  timeout: 10000,
  maxContentLength: 2000,
});

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

	onSubmit(e) {
		e.preventDefault();
    	const newInput = {
    		input_text: this.state.value,
    	}
    	instance.post('http://localhost:4000/inputs/add/', newInput)
            .then(res => {
            	console.log(res.data);
              window.location.reload();
         	})
            .catch(error => {
            	if (error.response) {
            		console.log(error.response.data);
            		console.log(error.response.status);
            		console.log(error.response.headers);
            	}
            });
  	};

	render() {
		return(
	      <form onSubmit={this.onSubmit}>
	      <h1>Hello Ella</h1>
	      <p>Enter your text:</p>
	      <input
	        type='text'
	        value={this.state.value}
	        onChange={this.onChangeText}
	      />
	      <button type='submit'>
	      Submit
	      </button>
	      </form>
	  	);
	}
}

export default InputForm;