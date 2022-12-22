// Import Employee class with require()
const Employee = require('../lib/Employee')

// Test instantiate Employee instance
test("it should create an Employee object", () => {

  const employee = new Employee("name", 123, 'peter@ggg.com');
  expect(employee instanceof Employee).toEqual(true);
});

// Test setting name of an employee
test("Employee name should be the same as the passing variable", () => {

  const name = "Peter Lim";
  const employee = new Employee(name, 123, 'peter@ggg.com');
  expect(employee.name).toEqual(name);

});

// Test setting id of an employee
test("Employee id should be the same as the passing variable", () => {

  const id = 123;
  const employee = new Employee("name", id, 'peter@ggg.com');
  expect(employee.id).toEqual(id);
});

// Test setting email of an employee
test("Employee email should be the same as the passing variable", () => {

  const email = "peter@gmail.com";
  const employee = new Employee("name", 123, email);
  expect(employee.email).toEqual(email);
});

// Test get name method
test("getName() should be the same as the passing variable", () => {

  const name = "Peter Lim";
  const employee = new Employee(name, 123, 'peter@ggg.com');
  expect(employee.getName()).toEqual(name);
});

// Test get id method
test("getId() should be the same as the passing variable", () => {
  
  const id = 123;
  const employee = new Employee("name", id, 'peter@ggg.com');
  expect(employee.getId()).toEqual(id);
});

// Test get email method
test("getEmail should be the same as the passing variable", () => {
  
  const email = "peter@gmail.com";
  const employee = new Employee("name", 123, email);
  expect(employee.getEmail()).toEqual(email);
});

// Test get role method
test("getRole() should be the same as the value of the role variable", () => {
 
  const employee = new Employee("name", 123, "peter@email.com");
  expect(employee.getRole()).toEqual("Employee");
});
