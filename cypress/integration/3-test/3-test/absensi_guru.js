describe("Absensi Guru", function () {
    beforeEach(function () {
    cy.fixture("admin").then(function (admin) {
        this.admin = admin;
        cy.visit("/login");
        cy.url().should('include','/login');
        cy.get("#email").type("admin@gmail.com");
        cy.get("#password").type("12345678");
        cy.get("#btn-login").click();
    });
  });

  it("Absensi Guru", function () {
    cy.contains("Absensi Guru").click();
    // cy.contains("Trash Jadwal").click();
    cy.get(".odd > :nth-child(3) > .btn").click({force: true});
    // cy.contains("Master Data").click();
    // cy.contains("Data Jadwal").click();
    // cy.get('.odd > :nth-child(3) > .btn').click();
    // cy.get(':nth-child(1) > :nth-child(6) > form > .btn-danger').click({force: true});

})
})