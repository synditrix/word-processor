import React from 'react';
import axios from 'axios'; 

const instance = axios.create({
  timeout: 10000,
  maxContentLength: 2000,
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("request was sent");
    console.log(config);
   	debugger;
    return config;
  }, function (error) {
    // Do something with request error
    console.log(error);
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("response was received");
    console.log(response);
    debugger;
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log(error);
    return Promise.reject(error);
  });

class InputForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
  			value: '',
  		};
  		this.onChangeText = this.onChangeText.bind(this);
  		this.onSubmit = this.onSubmit.bind(this);
	}

	onChangeText(e) {
		this.setState({value: e.target.value});
	}

	onSubmit(e) {
		e.preventDefault();
    	const newInput = {
    		input_text: this.state.value,
    	}
    	console.log(newInput);
    	debugger;
    	instance.post('http://localhost:4000/inputs/add/', newInput)
            .then(res => {
            	console.log(res.data);
            	debugger;
            	console.log("testing");
         	})
            .catch(error => {
            	if (error.response) {
            		console.log(error.response.data);
            		console.log(error.response.status);
            		console.log(error.response.headers);
            		console.log("testing sad");
            		debugger;
            	}
            });
            console.log("seeing where this log statement goes");

   //  fetch('http://localhost:4000/inputs/add/', {
	  //   method: 'POST',
	  //   body: JSON.stringify(newInput),
	  //   headers: {
   //    'Content-Type': 'application/json'
   //  	}
	  // }).then(function(response) {
	  // 	console.log(response.json());
	  //   return response.json();
	  // }).then(function(data) {
	  //   console.log("hi");
	  // });

	// const url = 'http://localhost:4000/inputs/add/';
	// const data = newInput;
	// try {
	//   	const response = await fetch(url, {
	//     method: 'POST', // or 'PUT'
	//     body: JSON.stringify(data), // data can be `string` or {object}!
	//     headers: {
	// 	      'Content-Type': 'application/json'
	// 	    }
	// 	});
 //  		const json = await response.json();
 //  		console.log('Success:', JSON.stringify(json));

	// } catch (error) {
	// 	//debugger;
	//   	console.error('Error:', error);
	//   	//debugger;
	// 	}
  	};

	render() {
		console.log(this.state);

		return(
	      <form onSubmit={this.onSubmit}>
	      <h1>Hello Ella</h1>
	      <p>Enter your text:</p>
	      <input
	        type='text'
	        value={this.state.value}
	        onChange={this.onChangeText}
	      />
	      <button type='submit'>
	      Submit
	      </button>
	      </form>
	  	);
	}
}

export default InputForm;