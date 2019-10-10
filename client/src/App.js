import React from 'react';
import './App.css';
import InputForm from './Form.jsx';
import InputList from './Inputs.jsx';
import Output from './Output.js';

const inputs = [
{id: 1, text: "a"},
{id: 2, text: "b"},
{id: 3, text: "c"},
];

const outputText = "Fizz buzz";

export default class App extends React.Component {
  render() {
    return(
      <div>
        <InputForm/>
        <InputList inputs={inputs}/>
        <Output outputText={outputText}/>
      </div>
    );
  }
}
