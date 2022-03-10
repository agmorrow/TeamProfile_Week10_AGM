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


function generateHTML() {
  console.log("You made a team!");
  return;
};

  function createManager() {
    inquirer.prompt([
      {
          type: "input",
          name: "managerName",
          message: "What is the team manager's name?",
          validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter the team manager's name.";
          }
        },
        {
          type: "input",
          name: "managerID",
          message: "What is the team manager's Employee ID?",
          validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter the team manager's ID.";
          }
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the team manager's email?",
          validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter the team manager's entire email address.";
          }
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the team manager's office number?",
          validate: answer => {
            if ( answer && answer.trim().length > 0 ) {
              return true;
            }
            else {
              console.log("Please enter the team manager's office number");
              return false;
            };
          }
        },
      ]) .then((data) => {
        const managerName = data.managerName;
        const managerId = data.managerId;
        const managerEmail = data.managerEmail;
        const managerOfficeNumber = data.managerOfficeNumber
        const teamMember = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);
          team.push( teamMember);
          buildTeam();
        });
      };

  function buildTeam() {
    inquirer.prompt([{
      type: "list",
      name: "teamBuild" ,
      message: "Would you like to add another member to your team?",
      choices: [
        "Engineer",
        "Intern",
        "I'm finished building my team",
      ]
    }])
    .then(function(data) {
      switch (data.teamBuild) {
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
        case "I'm finished building my team":
          generateHTML();
          break;
      };
    });
  };

  function createEngineer() {
    inquirer.prompt([{
        type: "input",
        message: "What is the team engineers's name?",
        name: "engineerName",
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
    ])
    .then(function(data) {
      const engineerName = data.engineerName;
      const engineerId = data.engineerId;
      const engineerEmail = data.engineerEmail;
      const engineerGithub = data.engineerGithub
      const teamMember = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);

      team.push(teamMember);

      buildTeam();
    });
  };

  function createIntern() {
    inquirer.prompt([{
        type: "input",
        message: "What is the name of your intern?",
        name: "internName",
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
    ])
    .then (function( data ) {
      const internName = data.internName;
      const internId = data.internId;
      const internEmail = data.internEmail;
      const internSchool = data.internSchool;
      const teamMember = new Intern( internName, internId, internEmail, internSchool);

      team.push(teamMember);

      buildTeam();
    });
  };



function init() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the name of your team?",
      name: "teamName",
      validate: answers => {
        if (answers && answers.trim().length > 0 ) {
          return true;
        }
        else {
          console.log("Input your team name");
        };
      }
    }
  ])
  .then( function(data){
    const teamName = data.teamName;
    team.push( teamName );
    createManager();
  });
};



init();