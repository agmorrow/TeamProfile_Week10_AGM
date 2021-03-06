// Generate the HTML texts for the HTML output file.
// Returns an array holding strings of HTML texts.
module.exports = {
  generateHtml(teamRoster) {
    // Array to hold HTML text strings.
    const rosterHTML = [];

    const titleContainer = `
 <!DOCTYPE html>
 <html lang = "en">
 <head>
    <meta charset = "UTF-8">
    <meta name = "viewport" content = "width = device-width, initial scale = 1.0">
    <meta http-equiv = "X-UA-Compatible" content = "ie = edge">
    <title>${teamRoster[0]}</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel = "stylesheet" href = "../dist/assets/css/style.css">
 </head>
 <body>
 <div class="container-fluid p-3 mb-4 text-white">
 <p class="text-center">${teamRoster[0]}</p>
</div>
 
    `;
    rosterHTML.push(titleContainer);
    const containerHtml = `
      <div class="container">
        <div class="row justify-content-evenly">
`;
    rosterHTML.push(containerHtml);

    // Loop through the teamRoster array to display the profile for each team member
    for (let i = 1; i < teamRoster.length; i++) {
      let teamInfo = `
        
            <div class="card m-2" style="width: 16rem;">
              <div class="card-body text-black">
                <h5 class="card-title">${teamRoster[i].name}</h5>
                `;

      // Verify the team member's role to display the appropriate icon
      if (teamRoster[i].role === "Manager") {
        teamInfo += `<p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-incognito" viewBox="0 0 16 16">
                   <path fill-rule="evenodd" d="m4.736 1.968-.892 3.269-.014.058C2.113 5.568 1 6.006 1 6.5 1 7.328 4.134 8 8 8s7-.672 7-1.5c0-.494-1.113-.932-2.83-1.205a1.032 1.032 0 0 0-.014-.058l-.892-3.27c-.146-.533-.698-.849-1.239-.734C9.411 1.363 8.62 1.5 8 1.5c-.62 0-1.411-.136-2.025-.267-.541-.115-1.093.2-1.239.735Zm.015 3.867a.25.25 0 0 1 .274-.224c.9.092 1.91.143 2.975.143a29.58 29.58 0 0 0 2.975-.143.25.25 0 0 1 .05.498c-.918.093-1.944.145-3.025.145s-2.107-.052-3.025-.145a.25.25 0 0 1-.224-.274ZM3.5 10h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5Zm-1.5.5c0-.175.03-.344.085-.5H2a.5.5 0 0 1 0-1h3.5a1.5 1.5 0 0 1 1.488 1.312 3.5 3.5 0 0 1 2.024 0A1.5 1.5 0 0 1 10.5 9H14a.5.5 0 0 1 0 1h-.085c.055.156.085.325.085.5v1a2.5 2.5 0 0 1-5 0v-.14l-.21-.07a2.5 2.5 0 0 0-1.58 0l-.21.07v.14a2.5 2.5 0 0 1-5 0v-1Zm8.5-.5h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5Z"/>
                 </svg> ${teamRoster[i].role}</p>`;
      } else if (teamRoster[i].role === "Engineer") {
        teamInfo += `<p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bicycle" viewBox="0 0 16 16">
                   <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z"/>
                 </svg> ${teamRoster[i].role}</p>`;
      } else if (teamRoster[i].role === "Intern") {
        teamInfo += `<p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                   <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
                   <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
                 </svg> ${teamRoster[i].role}</p>`;
      };

      teamInfo += `
                
                </div>
             <div class="card2 p-2 bg-light card-2 px-2 text-white py-4">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${teamRoster[i].id}</li>
                  <li class="list-group-item">Email: <a href = "mailto:${teamRoster[i].email}">${teamRoster[i].email}</a></li>
          `;

      // If the teamRoster member is the manager, display the office number.
      if (teamRoster[i].officeNumber) {
        teamInfo += `<li class="list-group-item">Office Number: ${teamRoster[ i ].officeNumber}</li>`;
      }
      // If the team member is an engineer, display the Github username.
      else if (teamRoster[i].github) {
        teamInfo += `<li class="list-group-item">GitHub: <a href="https://github.com/${teamRoster[ i ].github}" target="_blank">${teamRoster[ i ].github}</a></li>`;
      }
      // If the team member is an intern, display the intern's school name.
      else if (teamRoster[i].school) {
        teamInfo += `<li class="list-group-item">School: ${teamRoster[ i ].school}</li>`;
      };

      teamInfo += `
            </ul>
          </div>
        </div>
       
          `;
      rosterHTML.push(teamInfo);
    };
    const endContainer = `
    </div>
    </div>
`;
    rosterHTML.push(endContainer);
    const endHTML = `
        
 </body>
 </html>
 `;
    rosterHTML.push(endHTML);

    // Return the HTML text strings in the array object.
    return rosterHTML;
  }
};