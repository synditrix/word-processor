import React from 'react';
import PropTypes from 'prop-types';

class Output extends React.Component {
	render() {
		const outputText = this.props.outputText;
		return(
			<div className="output">
			{outputText}
			</div>
	  	);
	}
}

Output.propTypes = {
	outputText: PropTypes.string.isRequired
};

export default Output;