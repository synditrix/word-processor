import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input.jsx';

const cardTypes = ["primary", "secondary", "success", "danger", "warning", "info", "dark"];

class InputList extends React.Component {
    render() {
        const inputComponents = this.props.inputs && this.props.inputs.map(i =>
                 <Input key={i._id} id={i._id} inputText={i.input_text} color={cardTypes[Math.floor(Math.random() * cardTypes.length)]} clickInput={this.props.clickInput} />
        );
        return (
            <div className="past-inputs-list">
            {inputComponents}
            </div>
        );
    }
}

InputList.propTypes = {
    inputs: PropTypes.array,
};

Input.defaultProps = {
    inputs: [],
}

export default InputList;
