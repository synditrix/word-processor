import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const cardStyle = {
	marginTop: '10px',
	width: '500px'
}

class Input extends React.Component {
	render() {
		const inputText = this.props.inputText;
		const inputId = this.props.id;
		const color = this.props.color;
		const handleClick = () => {
			this.props.clickInput(inputId);
		}
		return(
			<Card style={cardStyle} border={color} className="past-inputs-list" onClick={handleClick}>
				<Card.Body>{inputText}</Card.Body>
			</Card>
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