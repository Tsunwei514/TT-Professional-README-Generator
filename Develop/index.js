// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is the installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Which license would your project use?',
        name: 'license',
        choices: [
            'MIT License',
            'Apache License 2.0',
            'GNU General Public License v3.0 (GPL-3.0)',
            'BSD 3-Clause License',
            'GNU Lesser General Public License v3.0 (LGPL-3.0)',
            'Creative Commons Zero (CC0)',
            'Mozilla Public License 2.0 (MPL-2.0)',
            'Eclipse Public License 2.0 (EPL-2.0)',
            'Unlicense'
        ],
    },
    {
        type: 'input',
        message: 'What is the contribution guidelines?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are the tests for your application?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is your GitHub username? (For questions regarding your project)',
        name: 'githubUsername',
    },
    {
        type: 'input',
        message: 'What is your email address? (For questions regarding your project)',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
};

// TODO: Create a function to initialize app
function init() { 
    inquirer
      .prompt(questions)
      .then((response) =>
        writeToFile('README.md', generateMarkdown(response))
)};

// Function call to initialize app
init();
