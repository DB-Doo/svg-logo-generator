// import the needed modules. inquirer for command line prompts
const inquirer = require("inquirer");
// fs (file system ) module is to enable file operations like writing to a file 
const fs = require("fs");
//import the shape classes from shapes.js
const { Triangle, Circle, Square } = require("./lib/shapes");

//main function to run the app
function main() {
  // questions for user input
  const questions = [
    {
      type: "input",
      name: "text",
      message: "Enter text for the logo (up to three characters):",
      validate: function (input) {
        // make sure the user input isnt more than 3 characters
        if (input.length <= 3) {
          return true;
        }
        return "The text can be up to three characters long.";
      },
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter color for the text (keyword or hexadecimal):",
      // if the color is invalid the SVG will render it as black
    },
    {
      type: "list",
      name: "shapeType",
      message: "Choose a shape for the logo:",
      choices: ["Triangle", "Circle", "Square"], //shapes to choose from
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter color for the shape (keyword or hexadecimal):",
      // if the color is invalid the SVG will render it as black
    },
  ];

  //  Prompt the user with questions?
  inquirer.prompt(questions).then((answers) => {
    // based on user input determine which shape to insantiate
    let shape;
    switch (answers.shapeType) {
      case "Triangle":
        shape = new Triangle(answers.shapeColor);
        break;
      case "Circle":
        shape = new Circle(answers.shapeColor);
        break;
      case "Square":
        shape = new Square(answers.shapeColor);
        break;
    }

    // generate the SVG logo based on what the user inputs
    const svgContent = `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                ${shape.render()}
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${
                  answers.textColor
                }">
                    ${answers.text}
                </text>
            </svg>`;

    // write the SVG content to a file named logo.svg
    fs.writeFileSync("logo.svg", svgContent);

    console.log("Generated logo.svg");
  });
}


main();