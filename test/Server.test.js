const server = require("../server.js");

test("Can server get response", () => {
  const e=$.ajax({
    url: "/api/notes",
    method: "GET",
  })
  
  expect(typeof(e)).toBe("object");
});
describe("server", () => {
  it("should write note", () => {
    const str = $.ajax({
      url: "/api/notes",
      data: {"title":"Title TEST","text":"TEST text"},
      method: "POST",
    });

    expect(str).toEqual(true);
  });

  it("should get notes Json", () => {
    const result = $.ajax({
      url: "/api/notes",
      method: "GET",
    });
    

    expect(typeof result).toEqual('object');
  });
});
// test("Can set name via constructor arguments", () => {
//   const name = "Alice";
//   const e = new Employee(name);
//   expect(e.name).toBe(name);
// });

// test("Can set id via constructor argument", () => {
//   const testValue = 100;
//   const e = new Employee("Foo", testValue);
//   expect(e.id).toBe(testValue);
// });

// test("Can set email via constructor argument", () => {
//   const testValue = "test@test.com";
//   const e = new Employee("Foo", 1, testValue);
//   expect(e.email).toBe(testValue);
// });

// test("Can get name via getName()", () => {
//   const testValue = "Alice";
//   const e = new Employee(testValue);
//   expect(e.getName()).toBe(testValue);
// });

// test("Can get id via getId()", () => {
//   const testValue = 100;
//   const e = new Employee("Foo", testValue);
//   expect(e.getId()).toBe(testValue);
// });

// test("Can get email via getEmail()", () => {
//   const testValue = "test@test.com";
//   const e = new Employee("Foo", 1, testValue);
//   expect(e.getEmail()).toBe(testValue);
// });

// test("getRole() should return \"Employee\"", () => {
//   const testValue = "Employee";
//   const e = new Employee("Alice", 1, "test@test.com");
//   expect(e.getRole()).toBe(testValue);
// });
