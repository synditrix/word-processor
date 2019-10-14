const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const inputRoutes = express.Router();
const PORT = 4000;

const processor = require('./processor.js');
const Input = require('./inputModel');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/inputs', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
  console.log("MongoDB database connection established successfully");
});

inputRoutes.route('/').get((req, res) => {
  Input.find((err, inputs) => {
    if (err) {
      console.error(err);
    } else {
      res.json(inputs);
    }
  });
});

inputRoutes.route('/:id').get((req, res) => {
  const id = req.params.id;
  Input.findById(id, (err, input) => {
    res.json(input);
  });
});

inputRoutes.route('/add').post((req, res) => {
  req.body.input_output = processor.processText(req.body.input_text);
  const input = new Input(req.body);
  input.save()
    .then((input) => {
      res.status(200).json({'input': 'input added successfully'});
    })
    .catch((err) => {
      res.status(400).send('adding new input failed');
      res.json(err);
    });
});

app.use('/inputs', inputRoutes);

app.listen(PORT, () => {
    console.log("Server is running on Port: " + PORT);
});