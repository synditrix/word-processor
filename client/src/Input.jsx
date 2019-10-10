import React from 'react';
import PropTypes from 'prop-types';

const handler = () => {
	console.log("clicked");
}

class Input extends React.Component {
	render() {
		const inputText = this.props.inputText;
		return(
			<div className="past-inputs-list" onClick={handler}>
			{inputText}
			</div>
	  	);
	}
}

Input.propTypes = {
	inputText: PropTypes.string.isRequired
};

export default Input;