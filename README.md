# Logo Generator

## Description

I created the Logo Generator to test my skills with object oriented programming and class consturction / inheritance. Much of this code was similar to my README generator application, though this took things up a notch with more complex topics. This project aims to assist with future instances where I'd want to include a simple logo to my project. I learned the proper way to instantiate a new class object and how to 'unpack' the properties of this object throughout my code. Additionally, I created three tests using the 'jest' node extension. Testing is a crucial component to development and I'm confident I'll be building on this knowledgebase in my future proejcts.

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Testing](#tests)

## Installation

My project can be forked from my GitHub repository:
https://github.com/ericlyn4s/logo-generator

## Usage

Within the Logo-Generator repository, run 'node index.js'. The terminal will populate with the following four questions for the user:

1) What's your logo name? (Maximum 3 characters) 
2) What color would you like your text to be? 
3) What shape do you want your logo to be? 
4) What color would you like your shape to be? 

Note that the first question will not allow the input if it exceeds four characters. Also note that the input can be less than three characters (including zero). Also, the user can only choose one of the three shape types: circle, triangle, or square. Finally, the user can input the color name or character code for questions 2 and 4. Once all questions have been answered, the application will generate a 'logo.svg' file that contains the new logo.

A walkthrough video on how to utilize this application can be found [here](./assets/walkthrough_video.webm)

<image src="assets/sample input.png" alt="Example of user input" width="450">

<image src="assets/example output.png" alt="Example of generated logo" width="450">

## License

MIT License

Copyright (c) 2024 Eric Peterson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Tests

I created three tests in [here](./lib/shapes.test.js) that ensure all shapes are being properly generated after specifying the shape properties.