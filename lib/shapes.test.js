
// import the shape classes and require shapes.js file 
const { Triangle, Circle, Sqaure } = require('./shapes');

describe('Triangle', () => {
    test('render method returns correct svg string', () => {
        //create a Triangle instance and set its color to user selected color
        const shape = new Triangle("blue");

        //check if rendering method returns the expected SVG string
        expect(shape.render()).toEqual('<polygon points="150, 50 100, 150 200, 150" fill="green: />');
    });
});

describe('Circle', () => {
    test('render method returns correct svg string', () => {
        //create a Circle instance and set its color to user selected color
        const shape = new Circle("blue");

        //check if rendering method returns the expected SVG string
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red: />');
    });
});

describe('Square', () => {
    test('render method returns correct svg string', () => {
        //create a Ssquare instance and set its color to user selected color
        const shape = new Square("blue");

        //check if rendering method returns the expected SVG string
        expect(shape.render()).toEqual('<rect width="150" height="150" x="75" y="25" fill="blue: />');
    });
});