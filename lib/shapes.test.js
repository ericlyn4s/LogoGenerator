const{Circle, Triangle, Square} = require('./lib/shapes');

describe('Shape', () => {
    describe('Circle', () => {
      it('', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
      });
    });
  });