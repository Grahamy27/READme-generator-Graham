// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "motivation",
        message: "What was your motivation for this project?",
    },
    {
        type: "input",
        name: "buildReason",
        message: "Why did you build this project?",
    },
    {
        type: "input",
        name: "problemSolved",
        message: "What problem does this project solve?",
    },
    {
        type: "input",
        name: "learned",
        message: "What did you learn?",
    },
    {
        type: "input",
        name: "installation",
        message: "What steps are required to install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions and examples of use",
    },
    {
        type: "input",
        name: "credits",
        message: "Please list any contributors. (include GitHub usernames)",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select a licence for this project.",
        choices: ["MIT", "Apache 2.0", "GNU v3.0", "BSD 2-Clause", "BSD 3-Clause", "Boost 1.0", "Creative Commons 1.0", "Eclipse 2.0", "none"],
    },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const outputDir = path.join(process.cwd(), 'Output');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }
    const filePath = path.join(outputDir, fileName);

  // Use fs.writeFile to write data to the specified file
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log(`${fileName} has been successfully generated in the Output directory!`);
    }
  });
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log("User Responses:", answers);
        console.log("Creating Professional README.md...");
        writeToFile("README.md", generateMarkdown(answers));
    });
}
// Function call to initialize app
init();