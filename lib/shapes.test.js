// Importing the three shape classes
const{Circle, Triangle, Square} = require('./shapes.js');

// Creating one testing suite to test that all three shapes generate correctly
describe('Shape', () => {
    describe('Circle', () => {
        it('Should output a blue circle with green text saying "EMP"', () => {
            let data = new Circle();
            data.shapeColor = "blue";
            data.textColor = "green";
            data.text = "EMP";
            expect(data.render(data)).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">EMP</text>
        </svg>`);
        });
    });

    // Repeating the above test for the triangle shape
    describe('Triangle', () => {
        it('Should output an orange triangle with yellow text saying "EMP"', () => {
            let data = new Triangle();
            data.shapeColor = "orange";
            data.textColor = "yellow";
            data.text = "EMP";
            expect(data.render(data)).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="orange" />
        <text x="150" y="140" font-size="60" text-anchor="middle" fill="yellow">EMP</text>
        </svg>`);
        });
    });

    // Repeating the above test for the square shape
    describe('Square', () => {
        it('Should output a purple square with white text saying "EMP"', () => {
            let data = new Square();
            data.shapeColor = "purple";
            data.textColor = "white";
            data.text = "EMP";
            expect(data.render(data)).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="60" y="20" width="180" height="180" fill="purple" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">EMP</text>
        </svg>`);
        });
    });
});

    


  