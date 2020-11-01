const fetchJoke = require("../bonus");
let fetch = require("node-fetch");

jest.mock("node-fetch");
it("", () => {
  const mockRequest = {
    id: "7h3oGtrOfxc",
    joke: "Whiteboards ... are remarkable.",
    status: 200,
  };
  fetch.mockResolvedValue({
    json: () => Promise.resolve(mockRequest),
  });
  expect(fetchJoke()).resolves.toBe("Whiteboards ... are remarkable.");
});
