// Including the necessary packages for this repository
const inquirer = require('inquirer');
const fs = require('fs');

// Including JS file that runs the SVG file generation method
const generateLogo = require('./utils.js');
// Creating an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: "What's your logo name? (Maximum 3 characters)",
    },
    {
        text: 'input',
        name: 'textColor',
        message: "What color would you like your text to be?",
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape do you want your logo to be?',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like your shape to be?',
    },
];

// Creating a function to initialize application
function init() {
    inquirer
    .prompt(questions)
    // The user input data is passed into the generative function
    .then((data) => {
        fs.writeFileSync('Generated_logo.svg', generateLogo({
            ...data
        }))
    });
}

// Function call to initialize app
init();