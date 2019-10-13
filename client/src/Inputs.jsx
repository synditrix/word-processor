import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input.jsx';
import './Inputs.css';

class InputList extends React.Component {
	render() {
		const inputComponents = this.props.inputs.map(i =>
				 <Input key={i._id} id={i._id} inputText={i.input_text} clickInput={this.props.clickInput} />
				);
		return (
			<div className="past-inputs-list">
			{inputComponents}
			</div>
		);
	}
}

InputList.propTypes = {
	inputs: PropTypes.array.isRequired
};

export default InputList;
