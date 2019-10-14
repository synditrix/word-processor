## Description 

A MERN (Mongo Express React Node.js) application that processes text inputs. 

Upon entering your text input, it will be listed on the page along with all the other previously submitted inputs. If you click on a particular input, it will process the text by counting the tuples of words in the inputs, and display this count in the output. A pair of words will show up in the output if one of the words follows the other in the input and are separated only by whitespace. Order of words in the pair does not matter, nor does case and punctuation. The processor will standardize strings such that they are converted to lowercase as well as stripped of nonalphanumeric characters. 

Additionally, the app gives you the option to change the name that is displayed on the welcome blurb of the page. Click on the button below the welcome blurb that says "Change your name" and fill out your new name in the resulting prompt.

## Steps to run:

1. Clone the repo at https://github.com/synditrix/word-processor.git. 
2. Make sure that Node.js and MongoDB are installed in your system. You can check if Node.js is installed on your system by running the command `node -v`. If MongoDB is not installed in your system, call `brew install mongodb`.
3. Set up the back-end server by calling `cd server`, `npm install` to download all dependencies, and calling `nodemon server`. 
4. Open up a separate Terminal window. Set up the MongoDB database by calling `mongod`. On a separate Terminal window, call `mongo`, then `use inputs` in order to create an inputs database.
5. In a separate terminal window, set-up the front-end client by calling `cd client`, `npm install` to download all dependencies, and then `npm start`. 
6. If you want to clear the database of inputs, call db.dropDatabase() within the Terminal window that was created in step 4. 

The server runs on http://localhost:4000 and the client runs on http://localhost:3000. 