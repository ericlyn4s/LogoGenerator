const{Circle, Triangle, Square} = require('./shapes.js');

describe('Shape', () => {
    describe('Circle', () => {
        it('', () => {
            const shape = new Circle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill=blue" />');
        });
    });

    describe('Triangle', () => {
        it('', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill=blue" />');
        });
    });

    describe('Square', () => {
        it('', () => {
            const shape = new Square();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<rect x="60" y="20" width="180" height="180" fill=blue" />');
        });
    });
});

    


  