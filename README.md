
# SVG Logo Generator

## Link to video of usage

## Description
SVG Logo Generator is a Node.js command-line application that allows users to generate simple logos with custom text, shape, and colors, and save them as SVG files. This tool is especially useful for freelancers or small project teams who want to quickly create logos without the need for complex graphic design software.

## Features
- Generate logos with up to three characters.
- Customize logo text color and shape color with color keywords or hexadecimal values.
- Choose from a list of shapes (circle, triangle, and square) for the logo.
- Save the generated logo as an SVG file (`logo.svg`).

## Installation
To get started with SVG Logo Generator, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/svg-logo-generator.git
   cd svg-logo-generator
   ```

2. **Install the necessary dependencies:**
   ```bash
   npm install
   ```

## Usage
To generate a logo, run the application using the command:

```bash
node index.js
```

Follow the prompts to enter your logo text, select text color, shape type, and shape color. After completing the prompts, `logo.svg` will be generated in the project directory.

## Example
Here's an example of how to use the application:

```bash
$ node index.js
? Enter text for the logo (up to three characters): ABC
? Enter color for the text (keyword or hexadecimal): #FF5733
? Choose a shape for the logo: Circle
? Enter color for the shape (keyword or hexadecimal): #33C4FF
Generated logo.svg
```

## Contributing
Contributions to SVG Logo Generator are welcome! If you have suggestions for improvements or encounter any issues, please feel free to open an issue or submit a pull request.

## License
[MIT License](LICENSE.md)

## Acknowledgments
- Node.js team for the powerful JavaScript runtime.
- Inquirer.js team for the interactive command-line user interfaces.

