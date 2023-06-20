describe("Verificador", () => {
  it("Debería mostrar Correcto", () => {
    cy.visit("index.html");
    cy.get("#primera-cadena").type("[]");
    cy.get("#verificar-button").click();
    cy.get("#resultado-div").should("contain", "Correcto");
  });
});
