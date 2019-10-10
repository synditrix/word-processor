import React from 'react';
import PropTypes from 'prop-types';

const handler = () => {
	console.log("clicked");
}

class Input extends React.Component {
	render() {
		const inputText = this.props.inputText;
		const inputId = this.props.id;
		console.log(inputId);
		const handleClick = () => {
			this.props.clickInput(inputId);
		}
		return(
			<div className="past-inputs-list" onClick={handleClick}>
			{inputText}
			</div>
	  	);
	}
}

Input.propTypes = {
	inputText: PropTypes.string.isRequired,
	clickInput: PropTypes.func.isRequired,
	inputId: PropTypes.string.isRequired
};

export default Input;