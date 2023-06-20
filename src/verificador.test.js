import verificar from "./verificador";

describe("Verificar", () => {
  it("Debería devolver correcto", () => {
    expect(verificar("[]")).toEqual("Correcto");
  });
  it("Debería devolver incorrecto", () => {
    expect(verificar("[[")).toEqual("Incorrecto");
  });
  it("Debería devolver correcto", () => {
    expect(verificar("[[]]")).toEqual("Correcto");
  });
  it("Debería devolver correcto", () => {
    expect(verificar("[Hola]")).toEqual("Correcto");
  });
  it("Debería devolver incorrecto", () => {
    expect(verificar("[[][")).toEqual("Incorrecto");
  });
  it("Debería devolver correcto", () => {
    expect(verificar("[[Hola]]")).toEqual("Correcto");
  });
});
