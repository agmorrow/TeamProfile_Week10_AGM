const Employee = require("../lib/Manager");
const managerTest = new Employee('Joe', 19, 'joe@email.com', 1000);

describe("Manager", () => {
  describe("getName", () => {
    it("It should render name of the employee", () => {

      result = managerTest.name;
      expect(result).toEqual("Joe");

    });
  });
  describe("getID", () => {
    it("Should render the id number of the employee", () => {
      result = managerTest.id;
      expect(result).toEqual(19);
    });
  });
  describe("getEmail", () => {
    it("Should render the email of the manager", () => {
      result = managerTest.email;
      expect(result).toEqual('joe@email.com');
    });
  });
});