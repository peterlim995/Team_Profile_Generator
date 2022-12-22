// Import Manager class with require()
const Manager = require('../lib/Manager');

// Test setting office number
test("Manager office number should be the same as the passing variable", () => {
  
  const officeNumber = 123;
  const manager = new Manager('name', 123,'peter@ggg.com',officeNumber);
  expect(manager.officeNumber).toEqual(officeNumber);
});

// Test get role method
test("getRole() should be the same as the value of the role variable", () => {
  
    const manager = new Manager('name', 123,'peter@ggg.com',123);
  expect(manager.getRole()).toEqual('Manager');
});

// Test getofficeNumber method
test("getGithub() should be the same as the passing variable", () => {
  
    const officeNumber = 123;
    const manager = new Manager('name', 123,'peter@ggg.com',officeNumber);
    expect(manager.getOfficeNumber()).toEqual(officeNumber);
});
