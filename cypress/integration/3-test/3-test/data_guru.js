describe("Data Jadwal", function () {
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

    it("Tambah Data Guru", function () {
        cy.contains("Master Data").click();
        cy.contains("Data Guru").click();
        cy.get(".card-title > .btn-default").click();
        
        const filepath = 'images/l.PNG'
        cy.get('#nama_guru').type('Neon');
        cy.get('#tgl_lahir').type('1991-10-21');
        cy.get('#select2-jk-container').type('Laki{enter}');
        cy.get("#telp").type("085122228887");
        cy.get("#nip").type("629839123125");
        cy.get("#tmp_lahir").type('Malang');
        cy.get('#select2-mapel_id-container').type('IPS{enter}');
        cy.get("#kode").type("IP5");

        
        cy.get('input[type="file"]').attachFile(filepath)
        cy.get(".modal-dialog > .modal-content > .modal-footer > .btn-primary").click();
        cy.get(":nth-child(3) > :nth-child(3) > .btn").click();
        cy.get('.btn-info').click();

    });


    it("Edit Guru", function () {
        cy.contains("Master Data").click();
        cy.contains("Data Guru").click();
        
        cy.get(':nth-child(3) > :nth-child(3) > .btn').click();
        cy.get('.btn-success').click({force: true});

        cy.get("#nama_guru").clear();
        cy.get("#nama_guru").type("Joni");
        cy.get('#select2-mapel_id-container').type('Bahasa Indonesia{enter}');
        
        cy.get("#tgl_lahir").type("1998-07-11");
        cy.get('#telp').clear();
        cy.get('#telp').type('08525522312');
        cy.get(".btn-primary").click();
        
        cy.get("tbody > :nth-child(1) > :nth-child(3) > .btn").click();
        cy.get(".even > :nth-child(6) > form > .btn-info").click();
});

    it("Delete Guru", function () {
        cy.contains("Master Data").click();
        cy.contains("Data Guru").click();
        
        cy.get('tbody > :nth-child(1) > :nth-child(3) > .btn').click();
        cy.get('.even > :nth-child(6) > form > .btn-danger').click();
        

    })
})