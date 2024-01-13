// Import the shape classes from the shapes.js file
const{Circle, Triangle, Square} = require('./lib/shapes.js');

// The generateLogo function runs in it's own JS file, that renders a shape based off the data.shape property
function generateLogo(data) {

    // Write an if statement to generate the corresponding shape based off the user's shape selection
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

// Export this function to be used in the shapes.js file
module.exports = generateLogo;