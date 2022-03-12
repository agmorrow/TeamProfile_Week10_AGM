const Employee = require("../lib/Engineer");

const engineerTest = new Employee ('Austin', 5, 'austin@email.com', 'agmorrow');

describe("Engineer", () => {
  describe("getName", () => {
      it("It should render name of the engineer", () => {

         result = engineerTest.name;
         expect(result).toEqual("Austin");
          
      });
  });
  });


