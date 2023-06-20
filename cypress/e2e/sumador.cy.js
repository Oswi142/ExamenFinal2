describe("Publicador", () => {
  it("Debería mostrar Correcto", () => {
    cy.visit("index.html");
    cy.get("#primera-cadena").type("Hola");
    cy.get("#publicar-button").click();
    cy.get("#resultado-div").should("contain", "Hola");
  });
});
