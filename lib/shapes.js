
// base class for all shapes for inheritence 
class Shape {
    //the constructor is a special method for creating and initializing objects created with a class
    constructor(color) {
        this.color = color; // setting the color property
    }

    setColor(color) {
        this.color = color; // updating the color property
    }

    getColor() {
        return this.color; // getting the color property
    }
}


// Triangle class extending the Shape base class
class Triangle extends Shape {
    // Method to render the a Triangle svg. Each type of shape has as slighty different rendering method as shown below with the other renders
    render() {
        // Returns the SVG string for a triangle with the color the user selects
        // These points are what is defining the shape. These are x y coordinates for the polygon
        return `<polygon points="150, 50 100, 150 200, 150" fill="${this.getColor()}" />`;
    }
}

// Circle class extending the Shape base class
class Circle extends Shape {
    render() {
        // Returns the SVG string for a Circle with the color the user selects
        // The 'cx' and 'cy' attributes define the center of the circle and 'r' defines its radius
        return `<circle cx="150" cy="100" r="80" fill="${this.getColor()}" />`;
    }
}

// Square class extending the Shape base class
class Square extends Shape {
    render() {
        // Returns the SVG string for a Square with the color the user selects
        // the width and height define the dimensions. The 'x' and 'y' define its position
        return `<rect width="150" height="150" x="75" y="25" fill="${this.getColor()}" />`;
    }
}
//Export the classes for other files to use
module.exports = { Triangle, Circle, Square };
