describe("Sur ma page de test je dois voir...", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it('... Un titre contenant "Bienvenue !"', () => {
    cy.contains("h1", "Bienvenue !").should("be.visible");
  });
  it('... Un lien contenant "Automation Tester Academy" pointant vers un nouvel onglet', () => {
    cy.contains("a", "Automation Tester Academy")
      .should("be.visible")
      .and("have.attr", "target", "_blank");
  });
  it('... Un Bouton actif contenant "Bouton de test"', () => {
    cy.get("button#main_button")
      .should("contain", "Bouton de test")
      .and("be.visible")
      .and("be.enabled");
  });
});
