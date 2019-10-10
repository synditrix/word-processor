import React from 'react';
import './App.css';
import InputForm from './Form.js'
import InputList from './Inputs.jsx'

const inputs = [
{id: 1, text: "a"},
{id: 2, text: "b"},
{id: 3, text: "c"},
];

export default class App extends React.Component {
  render() {
    return(
      <div>
        <InputForm/>
        <InputList inputs={inputs}/>
      </div>
    );
  }
}
