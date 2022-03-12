const Employee = require("../lib/Intern");
const internTest = new Employee ('Austin', 5, 'austin@email.com', 'CCU');

describe("Intern", () => {
    describe("getName", () => {
        it("It should render name of the employee", () => {

           result = internTest.name;
           expect(result).toEqual("Austin");
            
        });
    });
    });

