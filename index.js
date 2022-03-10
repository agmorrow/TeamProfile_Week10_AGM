const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

const template = require('./src/templateHelper');
const DIST_DR = path.resolve(__dirname, 'dist');
const output = path.join(DIST_DR, 'index.html');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let team = [];

function createTeam() {

  function createManager() {
    inquirer.prompt([{
          type: "input",
          message: "What is the team manager's name?",
          name: "manager",
          validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter the team manager's name.";
          }
        },
        {
          type: "input",
          message: "What is the team manager's Employee ID?",
          name: "managerID",
          validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter the team manager's ID.";
          }
        },
        {
          type: "input",
          message: "What is the team manager's email?",
          name: "managerEmail",
          validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter the team manager's entire email address.";
          }
        },
        {
          type: "input",
          message: "What is the team manager's office number?",
          name: "managerOfficeNumber",
          validate: answer => {
            let pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              return true;
            }
            return "Please enter the team manager's work phone number. (No spaces or dashes)";
          }
        }
      ])
      .then(answers => {
        const manager = new Manager(
          answers.manager,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber,
        );
        team.push(manager);
        addMember();
      });
  }

  function buildTeam() {
    inquirer.prompt([{
      input: "list",
      message: "Would you like to add another member to your team?",
      choices: [
        "Engineer",
        "Intern",
        "I'm finished building my team",
      ]
    }]).then(userChoice => {
      switch (userChoice.memberChoice) {
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
        default:
          generateHTML();
      }
    });
  }

  function createEngineer() {
    inquirer.prompt([{
        type: "input",
        message: "What is the team engineers's name?",
        name: "engineer",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter the engineer's name.";
        }
      },
      {
        type: "input",
        message: "What is the engineers email",
        name: "engineerEmail",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter the engineer's entire email address.";
        }
      },
      {
        type: "input",
        message: "What is your engineers github username?",
        name: "engineerGithub",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter the engineer's github username.";
        }
      },
    ]).then(answers => {
      const engineer = new Engineer(
        answers.engineer,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      team.push(engineer);
      addMember();
    });
  }

  function createIntern() {
    inquirer.prompt([{
        type: "input",
        message: "What is the name of your intern?",
        name: "intern",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter the intern's name.";
        }
      },
      {
        type: "input",
        message: "What is your interns ID number?",
        name: "interId",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter the intern's ID.";
        }
      },
      {
        type: "input",
        message: "What is your interns email?",
        name: "internEmail",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter the intern's entire email address.";
        }
      },
      {
        type: "input",
        message: "What is the school your intern attends?",
        name: "internSchool",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter the intern's school.";
        }
      }
    ]).then(answers => {
      const intern = new Intern(
        answers.intern,
        answers.internId,
        answers.internEmail,
        answers.internSchool,
      );
      team.push(intern);
      buildTeam();
    });
  }

  function generateHTML() {
    console.log("Building Team Profile!");
    fs.writeFileSync(output, template(team), "utf-8");
  }
  createManager();
}
createTeam();