const Employee = require("../lib/Employee");
const employeeTest = new Employee ("Austin", 5, "morrow.austin5@gmail.com");

describe("Employee", () => {
    describe("getName", () => {
        it("It should render name of the employee", () => {

           result = employeeTest.name;
           expect(result).toEqual("Austin");
            
        });
    });
    });

