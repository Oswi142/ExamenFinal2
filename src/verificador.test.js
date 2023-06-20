import verificar from "./verificador";

describe("Verificar", () => {
  it("Debería devolver correcto", () => {
    expect(verificar("[]")).toEqual("Correcto");
  });
});
