const Employee = require("../lib/Employee");
const employeeTest = new Employee("Austin", 5, "morrow.austin5@gmail.com");

describe("Employee", () => {
  describe("getName", () => {
    it("Should render name of the employee", () => {

      result = employeeTest.name;
      expect(result).toEqual("Austin");

    });
  });
  describe("getID", () => {
    it("Should render the id number of the employee", () => {
      result = employeeTest.id;
      expect(result).toEqual(5);
    });
  });
  describe("getEmail", () => {
    it("Should render the email number of the employee", () => {
      result = employeeTest.email;
      expect(result).toEqual('morrow.austin5@gmail.com');
    });
  });
});