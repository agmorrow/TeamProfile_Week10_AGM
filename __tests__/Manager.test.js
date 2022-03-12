const Employee = require("../lib/Manager");
const managerTest = new Employee ('Austin', 5, 'austin@email.com', 1);

describe("Manager", () => {
    describe("getName", () => {
        it("It should render name of the employee", () => {

           result = managerTest.name;
           expect(result).toEqual("Austin");
            
        });
    });
    });

 