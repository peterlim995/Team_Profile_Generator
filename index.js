// 1.
// import manager, engineer, intern files with require()
// import inquirer with require()
// import path with require()
// import fs with require()
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');



// 2.
// import page-template.js from subfoler src with require and assign it to a variable to be called later to render html
const template = require('./src/page-template');


// 3.
// create variable to hold the path to dist subfolder using path lib resolve method
// create variable to hold the path to team.html using path lib join method
const subfolder = path.resolve(__dirname,'dist');
const teamfile = path.join(subfolder,'team.html');





// 4.
// create an empty employee memeber array variable to store the employee members, manager, engineers, and interns
// create an empty employee id array to store the employee ids
const employee = [];
const employeeId = [];
// 5.
// print user of usage
console.log(`
Welcome to the team generator!
Use 'npm run reset' to reset the dist/ folder

Please bulid your team 👍👍`);

// 6.
// make call to create manager function to start the main process

managerInput();


// 7.
// create manager function
// - ask the questions for name, id, email, office number for manager using inquirer
// - in the .then callback function, create manager object by instantiating Manager class instance, passing in name, id, office number as arguments to constructor
// - push the manager object to the employee member array
// - push the manager id to the employee id array
// - make call to the create team function

function managerInput() {
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
            const manager = new Manager(name, id, email, office);

            employee.push(manager);
            employeeId.push(id);
            // console.log(employee);
            // console.log(employeeId);
            team();

        })
}



// 8.
// create team function
// - prompt user with the list of choices for Engineer, Intern, or End of adding employee for the team
// - in .then callback function check what the user choice is and make call to the corresponding functions respectively
// - make call to add-engineer-function if the choice is engineer
// - make call to add-intern-function if choice is intern
// - make call to build-team function if choice is end of adding employee

function team() {
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


// 8.
// add engineer function
// - prompt user with questions for engineer name, id, email, and github name
// - in .then callback create engineer object by instantiating Engineer class instance passing name, id, email, and github as arguments to class constructor
// - push engineer object to employee member array
// - push engineer id to employee id array
// - make call to create team function

function addEngineer() {
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
            // console.log(employee);
            // console.log(employeeId);
            team();

        })
}


// 9.
// add intern function
// - prompt user with questions for intern name, id, email, and school
// - in .then callback create intern object by instantiating Intern class instance passing name, id, email, and school as arguments to class constructor
// - push intern object to employee member array
// - push intern id to employee id array
// - make call to create team function

function addIntern() {
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
            // console.log(employee);
            // console.log(employeeId);
            team();

        })
}


// 10.
// build team function
// - check existing of dist subfolder
// - if not exist, create the dist subfolder
// - make call to imported render function passing employee member array as argument and assign returned html to a variable
// - make call to fs write file function passing the html file path, html variable





function buildTeam() {

    
    const html = template(employee);

    fs.writeFile(teamfile, html, (err) =>
        err ? console.log(err) : console.log('team.html is made!')
    );   

}

