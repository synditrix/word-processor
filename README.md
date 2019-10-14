## Description 

A MERN (Mongo Express React Node.js) application that processes text inputs. 

Upon entering your text input, it will be listed on the page along with all the other previously submitted inputs. If you click on a particular input, it will process the text by counting the tuples of words in the inputs, and display this count in the output. A pair of words will show up in the output if one of the words follows the other in the input and are separated only by whitespace. Order of words in the pair does not matter, nor does case and punctuation. The processor will standardize strings such that they are converted to lowercase as well as stripped of nonalphanumeric characters. 

Additionally, the app gives you the option to change the name that is displayed on the welcome blurb of the page. Click on the button below the welcome blurb that says "Change your name" and fill out your new name in the resulting prompt.

## Steps to run:

1. Clone the repo at https://github.com/synditrix/word-processor.git. 
2. Make sure docker-compose is installed. If not, install it here: https://docs.docker.com/compose/install/
3. Build the project by calling `sudo docker-compose build` in the root directory of the project. 
4. After building is complete, call `sudo docker-compose up` in order to run the project. 