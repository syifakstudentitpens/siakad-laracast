describe("Data Mapel", function () {
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

    it("Tambah Data Mapel", function () {
        cy.contains("Master Data").click();
        cy.contains("Data Mapel").click();
        cy.get(".card-title > .btn").click({force:true});
        
        cy.get("#nama_mapel").type('Bahasa Inggris');
        cy.get("#select2-paket_id-container").type('Otomasi Industri{Enter}');
        cy.get("#select2-kelompok-container").type('Pelajaran Umum{Enter}');
        

        cy.get('.modal-footer > .btn-primary').click();

    });


    it("Edit Mapel", function () {
        cy.contains("Master Data").click();
        cy.contains("Data Mapel").click();
        
        cy.get(':nth-child(2) > :nth-child(5) > form > .btn-success').click({force: true});
        cy.get("#nama_mapel").clear()
        cy.get("#nama_mapel").type("Bahasa Arab");
        cy.get("#select2-paket_id-container").type('Teknik Pemesinan{Enter}');
        cy.get("#select2-kelompok-container").type('Pelajaran Khusus{Enter}');
        cy.get(".btn-primary").click({force: true});
        
        cy.contains("Master Data").click();
        cy.contains("Data Mapel").click();
});

    it("Delete Mapel", function () {
        cy.contains("Master Data").click();
        cy.contains("Data Mapel").click();
        
        cy.get(':nth-child(5) > :nth-child(5) > form > .btn-danger').click();
        
    })
})