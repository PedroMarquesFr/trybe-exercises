let {
  returnUpperCaseString,
  returnStringFirstLetter,
  concatStrings,
} = require("../4-5");

jest.mock("../4-5");

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
  it("Low case", () => {
    returnUpperCaseString.mockImplementation((str) => str.toLowerCase());
    expect(returnUpperCaseString("BbB")).toBe("bbb");
    returnUpperCaseString.mockReset();
    expect(returnUpperCaseString("aaA")).toBe(undefined); ///falso positivo
  });
});

// const service = require("./service");

// describe("testando implementações", () => {
//   test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
//     const first = jest
//       .spyOn(service, "firstFunction")
//       .mockImplementation((a) => a.toLowerCase());

//     expect(first("UPPERCASE")).toBe("uppercase");
//     expect(first).toHaveBeenCalled();
//     expect(first).toHaveBeenCalledTimes(1);
//     expect(first).toHaveBeenCalledWith("UPPERCASE");

//     service.firstFunction.mockRestore();

//     expect(service.firstFunction("lowercase")).toBe("LOWERCASE");
//   });
// });
