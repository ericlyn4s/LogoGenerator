// Create a general shape object and use the user input to define four properties
class Shape {
    constructor(text, textColor, shape, shapeColor) {
        // Each property corresponds with user input from the inquirer function
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
}

// Create a circle class that's an extension of the shape class, with the shape property already being defined
class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    };

    // Add the render function within the shape class, this renders the shape to an SVG file
    render(data) {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${data.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
        </svg>`;
    };
};

// Create a triangle class that's an extension of the shape class, with the shape property already being defined
class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    };

    // Add the render function within the shape class, this renders the shape to an SVG file
    render(data) {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}" />
        <text x="150" y="140" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
        </svg>`;
    };

};

// Create a square class that's an extension of the shape class, with the shape property already being defined
class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    };

    // Add the render function within the shape class, this renders the shape to an SVG file
    render(data) {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="60" y="20" width="180" height="180" fill="${data.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
        </svg>`
    };

};

// Export all three shapes to be used in the util.js and testing files
module.exports = {Circle, Triangle, Square};