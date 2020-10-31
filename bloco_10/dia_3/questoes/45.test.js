let {
  returnUpperCaseString,
  returnStringFirstLetter,
  concatStrings,
} = require("./4");

jest.mock("./4");

describe("4.mock everything", () => {
  it("Low case", () => {
    returnUpperCaseString.mockImplementation((str) => str.toLowerCase());
    expect(returnUpperCaseString("aaA")).toBe("aaa");
  });

  it("Last letter", () => {
    returnStringFirstLetter.mockImplementation((str) => str.slice(-1));
    expect(returnStringFirstLetter("abcde")).toBe("e");
  });

  it("should recieve 3 string and concat", () => {
    concatStrings.mockImplementation((str, str2, str3) => str + str2 + str3);
    expect(concatStrings("mt", "chato", "isso")).toBe("mtchatoisso");
  });
});

describe("5.Repeat function 1", () => {
  //   it("Low case", () => {
  //     returnUpperCaseString.mockImplementation((str) => str.toLowerCase());
  //     expect(returnUpperCaseString("aaA")).toBe("aaa");
  //     returnUpperCaseString.mockRestore();
  //     expect(returnUpperCaseString("aaA")).toBe("Aaa");
  //   });
});
