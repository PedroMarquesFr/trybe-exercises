let randomNumber = require("./1");

// afterEach(randomNumber.mockReset);

describe("1. function randomNumber", () => {
  it("should return", () => {
    randomNumber = jest.fn().mockReturnValue(10);
    randomNumber();
    expect(randomNumber).toBeCalled();
    expect(randomNumber()).toBe(10);
    expect(randomNumber).toBeCalledTimes(2);
  });
});

describe("2.function randomNumber new implementation", () => {
  it("should receive two parameters and return their division", () => {
    randomNumber = jest.fn().mockImplementation((a, b) => a / b);
    expect(randomNumber(4, 2)).toBe(2);
    expect(randomNumber).toBeCalledTimes(1);
  });
});

describe("3.function randomNumber new implementation multi", () => {
  it("should recieve three parameters", () => {
    randomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
    expect(randomNumber(1, 2, 3)).toBe(6);
    expect(randomNumber).toBeCalledTimes(1);

    randomNumber = jest.fn().mockImplementation((a) => a * 2);
    expect(randomNumber(10)).toBe(20);
    expect(randomNumber).toBeCalledTimes(1);
  });
});
