
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const template = require('./src/page-template');
const cssTemplate = require('./src/css-template');

// hold the path to dist subfolder 
// create variable to hold the path to team.html using path lib join method
const subfolder = path.resolve(__dirname, 'dist');
const teamfile = path.join(subfolder, 'team.html');
const cssfile = path.join(subfolder, 'style.css');



// store the employee members, manager, engineers, and interns
const employee = [];

// create an empty employee id array to store the employee ids
const employeeId = [];

// print user of usage
console.log(`
Welcome to the team generator!
Use 'npm run reset' to reset the dist/ folder

Please bulid your team 👍👍`);

// start the main process

managerInput();



// create manager object and push the object to the employee member array
// push the manager id to the employee id array
// make call to the create team function

function managerInput() {

    // ask the questions for name, id, email, office number for manager using inquirer
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is team manager\'s name?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is team manager\'s id?',
                name: 'id',
                validate(value) {
                    if (typeof parseInt(value) === 'number' && value > 0)
                        return true;
                    return 'Please enter a positive number greater than zero';
                }
            },
            {
                type: 'input',
                message: 'What is team manager\'s email?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is team manager\'s office number?',
                name: 'office',
                validate(value) {
                    if (typeof parseInt(value) === 'number' && value > 0)
                        return true;
                    return 'Please enter a positive number greater than zero';
                }
            },
        ])
        .then(answer => {
            const { name, id, email, office } = answer;
            //create manager object
            const manager = new Manager(name, id, email, office);

            employee.push(manager);
            employeeId.push(id);
            team();
        })
}



// check what the user choice is and make call to the corresponding functions respectively
// addEngineer function or addIntern function or buildTeam function 

function team() {

    // prompt user with the list of choices for Engineer, Intern, or End of adding employee for the team
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'team',
                message: 'Which type of team member would you like to add?',
                choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
            },
        ])
        .then(answer => {
            const { team } = answer;
            if (team === 'Engineer') {
                addEngineer();
            } else if (team === 'Intern') {
                addIntern();
            } else {
                buildTeam();
            }

        })
}


// create Engineer object and push the object to the employee member array
// push the Engineer id to the employee id array
// make call to the create team function

function addEngineer() {

    // - prompt user with questions for engineer name, id, email, and github name
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your engineer\'s name?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is your engineer\'s id?',
                name: 'id',
                validate(value) {
                    if (typeof parseInt(value) === 'number' && value > 0) {
                        if (employeeId.length <= 0)
                            return true;
                        else if (employeeId.some(id => id === value))
                            return `Please enter different number than ${value}`;
                        else
                            return true
                    }
                    return 'Please enter a positive number greater than zero';
                }
            },
            {
                type: 'input',
                message: 'What is your engineer\'s email?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is your engineer\'s Github username?',
                name: 'github',

            },
        ])
        .then(answer => {
            const { name, id, email, github } = answer;
            const engineer = new Engineer(name, id, email, github);

            employee.push(engineer);
            employeeId.push(id);
            team();

        })
}



// create Intern object and push the object to the employee member array
// push the Intern id to the employee id array
// make call to the create team function

function addIntern() {

    // - prompt user with questions for intern name, id, email, and school
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your intern\'s name?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is your intern\'s id?',
                name: 'id',
                validate(value) {
                    if (typeof parseInt(value) === 'number' && value > 0) {
                        if (employeeId.length <= 0)
                            return true;
                        else if (employeeId.some(id => id === value))
                            return `Please enter different number than ${value}`;
                        else
                            return true
                    }
                    return 'Please enter a positive number greater than zero';
                }
            },
            {
                type: 'input',
                message: 'What is your intern\'s email?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is your intern\'s school?',
                name: 'school',

            },
        ])
        .then(answer => {
            const { name, id, email, school } = answer;
            const intern = new Intern(name, id, email, school);

            employee.push(intern);
            employeeId.push(id);
            team();

        })
}


// 10.
// build team function



// - make call to imported render function passing employee member array as argument and assign returned html to a variable
// - make call to fs write file function passing the html file path, html variable
function buildTeam() {

    const html = template(employee);
    const css = cssTemplate();

    // check existing of dist subfolder
    // if not exist, create the dist subfolder
    // making team.html and style.css files
    fs.access(subfolder, err => {
        if (err) {
            const fsPromises = fs.promises;

            fsPromises.mkdir(subfolder)
                .then(() => {
                    fs.writeFile(teamfile, html, (err) =>
                        err ? console.log(err) : console.log('team.html is made!')
                    );
                    fs.writeFile(cssfile, css, (err) =>
                        err ? console.log(err) : console.log('style.css is made!')
                    );

                })
        }
        //
        else {
            fs.writeFile(teamfile, html, (err) =>
                err ? console.log(err) : console.log('team.html is made!')
            );
            fs.writeFile(cssfile, css, (err) =>
                err ? console.log(err) : console.log('style.css is made!')
            );
        }
    })
}

