const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const inputRoutes = express.Router();
const PORT = 4000;

let processor = require('./processor.js');
let Input = require('./inputModel');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/inputs', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

inputRoutes.route('/').get(function(req, res) {
    Input.find(function(err, inputs) {
        if (err) {
            console.log(err);
        } else {
            res.json(inputs);
        }
    });
});

inputRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Input.findById(id, function(err, input) {
        res.json(input);
    });
});

inputRoutes.route('/add').post(function(req, res) {
	console.log(req.body);
	req.body.input_output = processor.processText(req.body.input_text);
    let input = new Input(req.body);
    console.log(input);
    input.save()
        .then(todo => {
            res.status(200).json({'input': 'input added successfully'});
            console.log("this worked");
        })
        .catch(err => {
            res.status(400).send('adding new input failed');
            console.log("this didn't work");
            console.log(res);
            res.json(err);
        });
        console.log("finished");
});

app.use('/inputs', inputRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});