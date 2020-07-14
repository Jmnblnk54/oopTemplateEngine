const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamArray = [];

// Array of questions
inquirer
    prompt([
        {
        type: "input",
        message: "What is the manager's name?",
        name: "name",
        },
        {
        type: "input",
        message: "What is the manager's id?",
        name: "id",
        },
        {
        type: "input",
        message: "What is the manager's email?",
        name: "email",
        },
        {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber",
        },
    ])
  // Create and store instance of Manager to teamArray
    .then((response) => {
        const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
        );
        teamArray.push(manager);
        createEmployee();
    });

function createEmployee() {
    return inquirer
        .prompt([
        {
        type: "list",
        message: "Please select the type of team member would you like to add.",
        name: "team",
        choices: ["Engineer", "Intern", "No more"],
        },
        ])
    .then((result) => {
        console.log(result);
        switch (result.team) {
        case "Engineer":
            return (
                inquirer
                .prompt([
                {
                type: "input",
                message: "What is your Engineer's name?",
                name: "name",
                },
                {
                type: "input",
                message: "What is your Engineer's id?",
                name: "id",
                },
                {
                type: "input",
                message: "What is your Engineer's email?",
                name: "email",
                },
                {
                type: "input",
                message: "What is your Engineer's GitHub?",
                name: "github",
                },
                ])
              // Create and store instance of Engineer to teamArray
                .then((response) => {
                    const engineer = new Engineer(
                    response.name,
                    response.id,
                    response.email,
                    response.github
                    );
                teamArray.push(engineer);
                createEmployee();
                })
            );
            break;
            case "Intern":
            return (
            inquirer
                .prompt([
                {
                type: "input",
                message: "What is your Intern's name?",
                name: "name",
                },
                {
                type: "input",
                message: "What is your Intern's id?",
                name: "id",
                },
                {
                type: "input",
                message: "What is your Intern's email?",
                name: "email",
                },
                {
                type: "input",
                message: "What is your Intern's School?",
                name: "school",
                },
                ])
              // Create and store instance of Intern to teamArray
                .then((response) => {
                const intern = new Intern(
                    response.name,
                    response.id,
                    response.email,
                    response.school
                );
                teamArray.push(intern);
                createEmployee();
                })
            );
            break;
        case "No more":
          // Upon selection of "No more", create html with content of teamArray 
            writeTeamHtml();
            break;
        }
    });
}

function writeTeamHtml() {
  // Write html file based on the teamArray contents
    fs.writeFile(outputPath, render(teamArray), (err) => {
    if (err) throw err;
    });
}
