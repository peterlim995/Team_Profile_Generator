// Import Intern class with require()
const Intern = require('../lib/Intern');

// Test setting school
test("Intern school should be the same as the passing variable", () => {

    const school = "Rutgers";
    const intern = new Intern('name', 123, 'peter@ggg.com', school);
    expect(intern.school).toEqual(school);
});

// Test get role method
test("getRole() should be the same as the value of the role variable", () => {

    const intern = new Intern('name', 123, 'peter@ggg.com', "Rutgers");
    expect(intern.getRole()).toEqual('Intern');
});

// Test getSchool method
test("getSchool() should be the same as the passing variable", () => {

    const school = "Rutgers";
    const intern = new Intern('name', 123, 'peter@ggg.com', school);
    expect(intern.getSchool()).toEqual(school);
});
