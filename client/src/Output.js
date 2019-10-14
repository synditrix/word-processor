import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const cardStyle = {
    width: '500px'
}

class Output extends React.Component {
    render() {
        const outputText = this.props.outputText;
        return(
            <Card className="output" style={cardStyle}>
                <Card.Header>Output</Card.Header>
                <Card.Body>{outputText}</Card.Body>
            </Card>
        );
    }
}

Output.propTypes = {
    outputText: PropTypes.string,
};

Output.defaultProps = {
    outputText: '',
}

export default Output;