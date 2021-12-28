describe("Data Kelas", function () {
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

    it("Tambah Data Kelas", function () {
        cy.contains("Master Data").click();
        cy.contains("Data Kelas").click();
        cy.get(".card-title > .btn").click({force:true});
        
        cy.get("#nama_kelas").type('KELAS 03');
        cy.get("#select2-paket_id-container").type('Otomasi Industri{Enter}');
        cy.get("#select2-guru_id-container").type('Heri{Enter}');
        

        cy.get('.modal-content > .modal-footer > .btn-primary').click();

    });


    it("Edit Kelas", function () {
        cy.contains("Master Data").click();
        cy.contains("Data Kelas").click();
        
        cy.get(':nth-child(3) > :nth-child(4) > form > .btn-success').click({force: true});
        cy.get("#select2-guru_id-container").type("Pai{Enter}");
        cy.get(".modal-content > .modal-footer > .btn-primary").click({force: true});
        
});

    it("Delete Kelas", function () {
        cy.contains("Master Data").click();
        cy.contains("Data Kelas").click();
        
        cy.get(':nth-child(3) > :nth-child(4) > form > .btn-danger').click();
        
    })
})