import React from 'react';
import axios from 'axios';

import './App.css';
import InputForm from './Form.jsx';
import InputList from './Inputs.jsx';
import Output from './Output.js';

const outputText = "Fizz buzz";

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
  			inputs: [],
  			outputText: '',
  		};
	};

	componentDidMount() {
        axios.get('http://localhost:4000/inputs/')
            .then(response => {
                this.setState({ inputs: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
  	};

	render() {
		const clickInput = id => {
			console.log("here id: " + id);
			const output = this.state.inputs.find(x => x._id === id);
			console.log(output);
			this.setState({outputText: JSON.stringify(output.input_output)});
		};
	    return(
	      <div>
	        <InputForm/>
	        <InputList inputs={this.state.inputs} clickInput={clickInput}/>
	        <Output outputText={this.state.outputText}/>
	      </div>
	    );
	}
}
