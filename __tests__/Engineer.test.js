// Import Engineer class with require()
const Engineer = require('../lib/Engineer');

// Test setting github account
test("Engineer github should be the same as the passing variable", () => {
  
  const github = "peterlim";
  const engineer = new Engineer('name', 123,'peter@ggg.com',github);
  expect(engineer.github).toEqual(github);
});

// Test get role method
test("getRole() should be the same as the value of the role variable", () => {
  
  const engineer = new Engineer('name', 123,'peter@ggg.com',"github");
  expect(engineer.getRole()).toEqual('Engineer');
});

// Test get github method
test("getGithub() should be the same as the passing variable", () => {
  
  const github = "peterlim";
  const engineer = new Engineer('name', 123,'peter@ggg.com',github);
  expect(engineer.getGithub()).toEqual(github);
});
