const { uppercase, getUserName, getRepos } = require("./scripts.js");

describe("test if uppercase it working", () => {
  it("verify if uppercase callback function is working", () => {
    function callbackTest(string) {
      return string;
    }

    expect(uppercase("t", callbackTest)).toBe("T");
  });
});

describe("Related to findUserById and getUserName", () => {
  it("should return a name for an existent user", () => {
    expect.assertions(1);
    return expect(getUserName(4)).resolves.toBe("Mark");
  });
  it("should return a Error mensage if the id given doesnt exist in the object ", () => {
    expect.assertions(1);
    return expect(getUserName(3)).rejects.toEqual({
      error: "User with 3 not found.",
    });
  });
});

describe("Related to findUserById and getUserName using async/await", () => {
  it("should return a name for an existent user", (done) => {
    expect(getUserName(4)).resolves.toBe("Mark");
    done();
  });
  it("should return a Error mensage if the id given doesnt exist in the object ", async () => {
    await expect(getUserName(3)).rejects.toEqual({
      error: "User with 3 not found.",
    });
  });
});

describe("fetch on GitHub", () => {
  it("should return a list of repos", async () => {
    const url = "https://api.github.com/users/tryber/repos";
    const resp = await getRepos(url);
    expect(resp).not.toContain("sd-01-week4-5-project-todo-list");
    expect(resp).not.toContain("sd-01-week4-5-project-meme-generator");
  });
});
