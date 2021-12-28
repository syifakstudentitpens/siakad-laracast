describe("Data Siswa", function () {
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
        cy.contains("Data Siswa").click();
        cy.get(".card-title > .btn-default").click({force:true});
        
        const filepath = 'images/siswa l.png'
        cy.get("#no_induk").type('82718378722');
        cy.get("#nama_siswa").type('Kevin');
        cy.get("#nis").type('1234123421');
        cy.get("#tmp_lahir").type('Surabaya');
        
        cy.get("#telp").type('0851234567');
        cy.get("#select2-jk-container").type('Perempuan{Enter}');
        cy.get("#select2-kelas_id-container").type('KELAS 01{Enter}');
        cy.get('#tgl_lahir').type('1987-10-21');
        cy.get('input[type="file"]').attachFile(filepath)
        cy.get('.modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

        cy.get(".odd > :nth-child(3) > .btn").click();
        cy.get(".even > :nth-child(5) > form > .btn-info").click();
    });


    it("Edit Siswa", function () {
        cy.contains("Master Data").click();
        cy.contains("Data Siswa").click();
        
        cy.get(".odd > :nth-child(3) > .btn").click();
        cy.get(".even > :nth-child(5) > form > .btn-success").click({force: true});
        // cy.get("#no_induk").type('82718378722');
        cy.get("#nama_siswa").clear();
        cy.get("#nama_siswa").type('Erlina');
        cy.get("#nis").clear();
        cy.get("#nis").type('43211234');
        cy.get("#tmp_lahir").clear();
        cy.get("#tmp_lahir").type('Bojonegoro');
        cy.get("#telp").clear();
        cy.get("#telp").type('0857654321');
        // cy.get("#select2-jk-container").type('Perempuan{Enter}');
        cy.get("#select2-kelas_id-container").type('KELAS 02{Enter}');
        cy.get('#tgl_lahir').type('2003-10-11');

        cy.get(".btn-primary").click();

        cy.get(".even > :nth-child(3) > .btn").click();
        cy.get(":nth-child(1) > :nth-child(5) > form > .btn-info").click();
});

    it("Delete Kelas", function () {
        cy.contains("Master Data").click();
        cy.contains("Data Siswa").click();
        
        cy.get(".even > :nth-child(3) > .btn").click();
        cy.get(':nth-child(1) > :nth-child(5) > form > .btn-danger').click();
        

    })
})