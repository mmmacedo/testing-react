describe("Knowledge Base Application", () => {
    /*
    beforeEach(() => {
        cy.fixture("users/admin").as("admin");
      });
    */
    it("Shows a placeholder", () => {
        const url = "http://localhost:3000/";
        cy.visit(url);

        cy.get(".btn").should('be.visible');
        cy.get("#login").should('be.visible');
        cy.get("#senha").should('be.visible');

        cy.get("#login").type('admin').should("have.value", 'admin');
        cy.get("#senha").type('admin').should("have.value", 'admin');

        cy.get("#form").submit();
        cy.get(".btn").click()
        
    });
});