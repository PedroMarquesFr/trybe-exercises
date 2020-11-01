let fetchDog = require("./6");
const fetch = require("node-fetch");

jest.mock("node-fetch");

it("test id request is working", async (done) => {
  const mockedResponse = {
    status: "success",
  };
  fetch.mockResolvedValue({
    json: () => Promise.resolve(mockedResponse),
  });
  const response = await fetchDog();
  expect(response.status).toBe("success");
  done();
});

// const {fetchDog} = require("./service");
// describe("testando a requisição", () => {
//   fetchDog = jest.fn();
//   afterEach(fetchDog.mockReset);

//   test("testando requisição caso a promisse resolva", async () => {
//     fetchDog.mockResolvedValue("request sucess");

//     fetchDog();
//     expect(fetchDog).toHaveBeenCalled();
//     expect(fetchDog).toHaveBeenCalledTimes(1);
//     expect(fetchDog()).resolves.toBe("request sucess");
//     expect(fetchDog).toHaveBeenCalledTimes(2);
//   });

//   test("testando requisição caso a promisse seja rejeitada", async () => {
//     fetchDog.mockRejectedValue("request failed");

//     expect(fetchDog).toHaveBeenCalledTimes(0);
//     expect(fetchDog()).rejects.toMatch("request failed");
//     expect(fetchDog).toHaveBeenCalledTimes(1);
//   });
// });
