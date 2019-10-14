import React from 'react';
import axios from 'axios'; 
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const instance = axios.create({
  timeout: 10000,
  maxContentLength: 2000,
});

const divStyle = {
  display: 'flex',
  alignItems: 'center',
};

const itemStyle = {
  marginLeft: '10px',
};

const formStyle = {
  marginTop: '10px',
};

class InputForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
  			value: '',
  			showModal: false,
  			nameValue: '',
  			name: 'person'
  		};
  		this.onChangeText = this.onChangeText.bind(this);
  		this.onSubmit = this.onSubmit.bind(this);
  		this.handleClick = this.handleClick.bind(this);
  		this.closeModal = this.closeModal.bind(this);
  		this.onChangeNameText = this.onChangeNameText.bind(this);
  		this.onSubmitName = this.onSubmitName.bind(this);
	}

	componentDidMount() {
		const name = localStorage.getItem('name');
		name && this.setState({name: name});
	}

	onChangeText(e) {
		this.setState({value: e.target.value});
	}

	onSubmit(e) {
    	const newInput = {
    		input_text: this.state.value,
    	}
    	instance.post('http://localhost:4000/inputs/add/', newInput)
            .then(res => {
            	console.log(res.data);
              window.location.reload();
         	})
            .catch(error => {
            	if (error.response) {
            		console.log(error.response.data);
            		console.log(error.response.status);
            		console.log(error.response.headers);
            	}
            });
       e.preventDefault();
  	};

  	handleClick(e) {
  		this.setState({showModal: true});
  		e.preventDefault();
  	}

  	closeModal() {
  		this.setState({showModal: false});
  		this.setState({nameValue: ''});
  	}

  	onChangeNameText(e) {
		this.setState({nameValue: e.target.value});
	}

	onSubmitName(e) {
		this.setState({name: this.state.nameValue})
		localStorage.setItem('name', this.state.nameValue);
		this.setState({nameValue: ''});
		this.closeModal();
	    e.preventDefault();
  	};

	render() {
		return(
		<div>
		<div>
		  <h1>Hello {this.state.name}</h1>
	      <Button type="button" variant='outline-secondary' onClick={e => this.handleClick(e)}>
		      Change your name!
		  </Button>
		</div>
		<div style={formStyle}>
	      <form onSubmit={this.onSubmit}>
	      <p>Enter your text:</p>
	      <div style={divStyle}>
	      	<div>
		      <input
		        type='text'
		        value={this.state.value}
		        onChange={this.onChangeText}
		      />
		    </div>
		    <div>
		      <Button type='submit' variant='outline-dark' style={itemStyle}>
		      Submit
		      </Button>
		    </div>
	      </div>
	      </form>
	      <Modal show={this.state.showModal} onHide={this.closeModal}>
	      	 <Modal.Header closeButton>
          		<Modal.Title>Change your name!</Modal.Title>
        	</Modal.Header>
        	<Modal.Body>
        	Input new name here:
        	<form onSubmit={this.onSubmitName}>
        		<div style={divStyle}>
	        		<input
			        type='text'
			        value={this.state.nameValue}
			        onChange={this.onChangeNameText}
			      	/>
			      	<Button type="submit" variant='outline-secondary' style={itemStyle}>
			      	Submit new name
			  		</Button>
		  		</div>
        	</form>
        	</Modal.Body>
	      </Modal>
	     </div>
	     </div>
	  	);
	}
}

export default InputForm;