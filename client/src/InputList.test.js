import React from 'react';
import ReactDOM from 'react-dom';
import InputList from './InputList';

it('renders InputList without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InputList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
