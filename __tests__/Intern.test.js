const Employee = require("../lib/Intern");
const internTest = new Employee('Bernie', 1, 'bernie@intern.com', 'MSU');

describe("Intern", () => {
  describe("getName", () => {
    it("It should render name of the employee", () => {

      result = internTest.name;
      expect(result).toEqual("Bernie");

    });
  });
  describe("getID", () => {
    it("Should render the id number of the employee", () => {
      result = internTest.id;
      expect(result).toEqual(1);
    });
  });
  describe("getEmail", () => {
    it("Should render the email of the intern", () => {
      result = internTest.email;
      expect(result).toEqual('bernie@intern.com');
    });
  });
});