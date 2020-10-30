const service = require("./service");

test("#randomRgbColor", () => {
  // testando quantas vezes a função foi chamada e qual seu retorno
  service.randomRgbColor = jest
    .fn()
    .mockReturnValue("default value")
    .mockReturnValueOnce("first call")
    .mockReturnValueOnce("second call");

  expect(service.randomRgbColor).toHaveBeenCalledTimes(0);

  expect(service.randomRgbColor()).toBe("first call");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(1);

  expect(service.randomRgbColor()).toBe("second call");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(2);

  expect(service.randomRgbColor()).toBe("default value");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(3);
});

// É possível implementar vários comportamentos em uma simulação. No exemplo acima, note que a implementação mockReturnValueOnce se sobrepõe em relação a mockReturnValue, que se torna um padrão apenas após os retornos de mockReturnValueOnce serem executados.
