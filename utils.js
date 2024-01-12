const{Circle, Triangle, Square} = require('./lib/shapes');

function generateLogo(input) {
    let shape;
    if (input === 'Circle') {
        shape = Circle.render();
    } else if (input === 'Triangle') {
        shape = Triangle.render();
    } /* else {
        shape = Square.render();
    } */
};

module.exports = generateLogo;