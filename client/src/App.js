import React from 'react';
import axios from 'axios';

import './App.css';
import InputForm from './Form.jsx';
import InputList from './InputList.jsx';
import Output from './Output.js';

const itemStyle = {
  marginLeft: '100px',
  display: 'flex',
};

const divStyle = {
  marginLeft: '50px',
};

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
                this.setState({inputs: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    };

    render() {
        const clickInput = id => {
            const output = this.state.inputs.find(x => x._id === id);
            const outputString = output.input_output ? JSON.stringify(output.input_output).replace(/,/g, " ").slice(1, -1) : "No tuples available!";
            this.setState({outputText: outputString});
        };
        return(
          <div style={itemStyle}>
            <div>
                <InputForm/>
                <InputList inputs={this.state.inputs} clickInput={clickInput}/>
            </div>
            <div style={divStyle}>
                <Output outputText={this.state.outputText}/>
            </div>
          </div>
        );
    }
}
