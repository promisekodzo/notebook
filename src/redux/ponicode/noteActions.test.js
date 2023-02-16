const rewire = require("rewire");
const noteActions = rewire("../noteActions");
const searchNote = noteActions.__get__("searchNote");
// @ponicode
describe("searchNote", () => {
  test("0", () => {
    let result = searchNote("DELETE FROM Projects WHERE pid = %s");
    expect(result).toMatchSnapshot();
  });

  test("1", () => {
    let result = searchNote("UNLOCK TABLES;");
    expect(result).toMatchSnapshot();
  });

  test("2", () => {
    let result = searchNote(
      "SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';"
    );
    expect(result).toMatchSnapshot();
  });

  test("3", () => {
    let result = searchNote("UPDATE Projects SET pname = %s WHERE pid = %s");
    expect(result).toMatchSnapshot();
  });

  test("4", () => {
    let result = searchNote("DROP TABLE tmp;");
    expect(result).toMatchSnapshot();
  });

  test("5", () => {
    let result = searchNote("");
    expect(result).toMatchSnapshot();
  });
});
