const{Circle, Triangle, Square} = require('./lib/shapes.js');

function generateLogo(data) {

{
    let shape = data.shape;
    if (data.shape === "Circle") {
        shape = new Circle().render(data);
    } else if (data.shape === "Triangle") {
        shape = new Triangle().render(data);
    } else {
        shape = new Square().render(data);
    } 
    console.log('Generated logo.svg');
    return shape;
};

};

module.exports = generateLogo;