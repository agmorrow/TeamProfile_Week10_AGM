const Employee = require("../lib/Engineer");

const engineerTest = new Employee('Patrick', 33, 'patrick@email.com', 'pjroy');

describe("Engineer", () => {
  describe("getName", () => {
    it("It should render name of the engineer", () => {

      result = engineerTest.name;
      expect(result).toEqual("Patrick");

    });
  });
  describe("getID", () => {
    it("Should render the id number of the employee", () => {
      result = engineerTest.id;
      expect(result).toEqual(33);
    });
  });
  describe("getEmail", () => {
    it("Should render the email of the engineer", () => {
      result = engineerTest.email;
      expect(result).toEqual('patrick@email.com');
    });
  });
});