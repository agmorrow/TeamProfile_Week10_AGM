const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const templateHelper = require('./src/templateHelper');

let teamRoster = [];

const writeToFile = ( rosterHTML ) => {
  return new Promise(( resolve, reject ) => {
    outputFileName = teamRoster[ 0 ].toLowerCase();
    outputFileName = outputFileName.replace( / /g, "-");

    fs.writeFile( `./dist/${outputFileName}.html`, rosterHTML.join( "" ), function( err ) {
      if ( err ) {
        reject( err );
        return;
      };
      resolve({
        ok: true,
        message: 'File created successfully, found in the dist folder'
      });
    });
  });
};

function generateHtmlFile() {
  const rosterHTML = templateHelper.generateHtml( teamRoster );
  writeToFile( rosterHTML );
};

function createIntern() {
  inquirer.prompt([{
      type: "input",
      message: "What is the name of the intern you would like to enter?",
      name: "internName",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        console.log( "Please enter the intern's name:" );
         return false;
      }
    },
    {
      type: "input",
      message: "What is this interns employee ID number?",
      name: "internId",
      validate: answer => {
        if (answer && answer.trim().length > 0 ) {
          return true;
        }
        console.log( "Please enter the intern's ID:" );
         return false;
      }
    },
    {
      type: "input",
      message: "What is this interns email address?",
      name: "internEmail",
      validate: function(email) {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
            return true;
        } else {
            console.log(" " + "Please enter a valid email")
            return false;
        }
      }
    },
    {
      type: "input",
      message: "Which school is this intern attending?",
      name: "internSchool",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        console.log( "Please enter the intern's school:" );
         return false;
      }
    }
  ])
  .then (function( data ) {
    const internName = data.internName;
    const internId = data.internId;
    const internEmail = data.internEmail;
    const internSchool = data.internSchool;
    const teamMember = new Intern( internName, internId, internEmail, internSchool);

    teamRoster.push(teamMember);

    buildTeam();
  });
};

function createEngineer() {
  inquirer.prompt([{
      type: "input",
      message: "What is the name of the engineer you would like to enter?",
      name: "engineerName",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        console.log("Please enter the engineers's name.");
        return false;
      }
    },
    {
      type: "input",
      message: "What is this engineers employee ID number?",
      name: "engineerId",
      validate: answer => {
        if (answer && answer.trim().length > 0 ) {
          return true;
        }
        console.log("Please enter the engineers's ID.");
        return false;
      }
    },
    {
      type: "input",
      message: "What is this engineers email address?",
      name: "engineerEmail",
      validate: function(email) {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
            return true;
        } else {
            console.log(" " + "Please enter a valid email")
            return false;
        }
      }
    },
    {
      type: "input",
      message: "What is this engineers github username?",
      name: "engineerGithub",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        console.log("Please enter the engineers's GitHub username.");
        return false;
      }
    },
  ])
  .then(function(data) {
    const engineerName = data.engineerName;
    const engineerId = data.engineerId;
    const engineerEmail = data.engineerEmail;
    const engineerGithub = data.engineerGithub
    const teamMember = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);

    teamRoster.push(teamMember);

    buildTeam();
  });
};

function buildTeam() {
  inquirer.prompt([{
    type: "list",
    name: "teamBuild" ,
    message: "Would you like to add another member to your team?",
    choices: [
      "Add an engineer",
      "Add an intern",
      "I'm finished building my team",
    ]
  }])
  .then(function(data) {
    switch (data.teamBuild) {
      case "Add an engineer":
        createEngineer();
        break;
      case "Add an intern":
        createIntern();
        break;
      case "I'm finished building my team":
        generateHtmlFile();
        break;
    };
  });
};

  function createManager() {
    inquirer.prompt([
      {
          type: "input",
          name: "managerName",
          message: "What is the name of the manager you would like to enter?",
          validate: answer => {
            if (answer !== "") {
              return true;
            }
            console.log( "Please enter the manager's employee name." );
         return false;
          }
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the managers employee ID number?",
          validate: answer => {
            if ( answer && answer.trim().length > 0 ) {
              return true;
            }
            console.log( "Please enter the manager's employee ID." );
         return false;
          }
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the managers email address?",
          validate: function(email) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            } else {
                console.log(" " + "Please enter a valid email")
                return false;
            }
          }
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "In which office is the manager located?",
          validate: answer => {
            if ( answer && answer.trim().length > 0 ) {
              return true;
            }
            else {
              console.log("Please enter the team manager's office number.");
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
          teamRoster.push( teamMember);
          buildTeam();
        });
      };

function init() {
  inquirer.prompt([
    {
      type: "input",
      name: "teamName",
      message: "What is the name of your team?",
      validate: answer => {
        if (answer !== "") {
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
    teamRoster.push( teamName );
    createManager();
  });
};

init();