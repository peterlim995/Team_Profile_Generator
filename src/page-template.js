// create team function with team array passed in
const create_team_function = team => {

    // create the manager html function with manager object passed in as input parameter
    // - return template literal replacing name, role, id, email, office number with getXXX methods from manager object
    const create_manager_html_function = manager => {
        return `
        <div class="member">
        <div class="title">
          <h1>${manager.getName()}</h1>
          <h2>☕ ${manager.getRole()}</h2>
        </div>
        <div class="information">
          <p>ID: ${manager.getId()}</p>
          <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
          <p>Office Number: ${manager.getOfficeNumber()}</p>
        </div>
      </div>

        `;
    };

    // create the html function for engineers with engineer object passed in as input parameter
    // - return template literal replacing name, role, id, email, github name with getXXX methods from engineer object
    const create_engineer_html_function = engineer => {
        return `
        <div class="member">
        <div class="title">
          <h1>${engineer.getName()}</h1>
          <h2>👓 ${engineer.getRole()}</h2>
        </div>
        <div class="information">
          <p>ID: ${engineer.getId()}</p>
          <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
          <p>GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="Git Hub">${engineer.getGithub()}</a></p>
        </div>
      </div>
        `;
    };

    // create the html function for interns with intern object passed in as input parameter
    // - return template literal replacing name, role, id, email, school name with getXXX methods from intern object
    const create_intern_html_function = intern => {
        return `
        <div class="member">
        <div class="title">
          <h1>${intern.getName()}</h1>
          <h2>🎓 ${intern.getRole()}</h2>
        </div>
        <div class="information">
          <p>ID: ${intern.getId()}</p>
          <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
          <p>School: ${intern.getSchool()}</p>
        </div>
      </div>
        `;
    };

    // create an empty employee html array to store employee html for manager, engineers, interns
    const html = [];

    // make call to filter method on team array - for each employee in team array to check if the employee's role is "Manager" via the employee's get role method and assign the new manager array returned from filter method to a new variable
    // make call to map method on the new manager array to call create manager html function and assign the new manager html array returned from map method to a new variable
    // make call to join method on the new manager html array to convert it to html string and assign it to a new variable
    // push the new manager html string to the employee html array
    // option - you can use chained array methods to avoid create new variables
    team.filter(member => member.getRole() === 'Manager').forEach(manager => html.push(create_manager_html_function(manager)));

    
    // make call to filter method on team array - for each employee in team array to check if the employee's role is "Engineer" via the employee's get role method and assign the new engineer array returned from filter method to a new variable
    // make call to map method on the new engineer array to call create engineer html function and assign the new engineer html array returned from map method to a new variable
    // make call to join method on the new engineer html array to convert it to html string and assign it to a new variable
    // push the new engineer html string to the employee html array
    // option - you can use chained array methods to avoid create new variables
    team.filter(member => member.getRole() === 'Engineer').forEach(engineer => html.push(create_engineer_html_function(engineer)));

    // make call to filter method on team array - for each employee in team array to check if the employee's role is "Intern" via the employee's get role method and assign the new intern array returned from filter method to a new variable
    // make call to map method on the new intern array to call create intern html function and assign the new intern html array returned from map method to a new variable
    // make call to join method on the new intern html array to convert it to html string and assign it to a new variable
    // push the new intern html string to the employee html array
    // option - you can use chained array methods to avoid create new variables
    team.filter(member => member.getRole() === 'Intern').forEach(intern => html.push(create_intern_html_function(intern)));

    // call join method on employee html array to convert it to html string and return it to the caller
    return html.join("");

}

// export function to generate entire page with team array passed in as input parameter from index.js
// - return template literal for entire html replacing team member html with returned value from create-team-function via template literal varaible expression
module.exports = team => {
 

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <nav>
            <h1> My Team </h1>
        </nav>
        <main id="team">
        ${create_team_function(team)}   
         
        </main>
    </body>
    </html>

    `;
};