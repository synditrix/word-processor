import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
	render() {
		const inputText = this.props.inputText;
		const inputId = this.props.id;
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
	inputId: PropTypes.string
};

Input.defaultProps = {
	inputId: '',
}

export default Input;