describe("Data Guru", function () {
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

    it("Tambah Data Jadwal", function () {
        cy.contains("Master Data").click();
        cy.contains("Data Jadwal").click();
        cy.get("body > div.wrapper > div.content-wrapper > section > div > div > div.col-md-12 > div > div.card-header > h3 > button.btn.btn-default.btn-sm").click();
        
        // const filepath = 'images/2.jpeg'
        cy.get('#select2-hari_id-container').type('Senin{enter}');
        cy.get('#select2-kelas_id-container').type('KELAS 02{enter}');
        cy.get('#select2-guru_id-container').type('MTK{enter}');
        cy.get("#jam_mulai").type("07:00");
        cy.get("#jam_selesai").type("09:00");
        cy.get('#select2-ruang_id-container').type('Ruang 10{enter}');
        
        // // cy.get("").select('');
        
        
        // // cy.get("#select2-hari_id-result-wlya-2").select("Senin");
        // // cy.get("body > div.wrapper > div.content-wrapper > section > div > div > div.modal.fade.bd-example-modal-lg.tambah-jadwal.show > div > div > div.modal-body > form > div > div:nth-child(1) > div:nth-child(2) > span").select("KELAS 01");
        // // cy.get("body > div.wrapper > div.content-wrapper > section > div > div > div.modal.fade.bd-example-modal-lg.tambah-jadwal.show > div > div > div.modal-body > form > div > div:nth-child(1) > div:nth-child(3) > span").select("MTK");
        
        // // cy.get("body > div.wrapper > div.content-wrapper > section > div > div > div.modal.fade.bd-example-modal-lg.tambah-jadwal.show > div > div > div.modal-body > form > div > div:nth-child(2) > div:nth-child(3) > span").select("Ruang 10");
        // // // cy.get("#deskripsi").type("villa mantap bos!");
        // // // cy.get("body > div > div > div > div > form > div > div > div > div > div > div > div:nth-child(9) > div > select").select("Seri 1");
        // // // cy.get('input[type="file"]').attachFile(filepath)

        cy.get("body > div.wrapper > div.content-wrapper > section > div > div > div.modal.fade.bd-example-modal-lg.tambah-jadwal.show > div > div > div.modal-footer.justify-content-between > button.btn.btn-primary").click();
    
        

    });


    it("Edit Jadwal", function () {
        cy.contains("Master Data").click();
        cy.contains("Data Jadwal").click();
        cy.get('.even > :nth-child(3) > .btn').click();
        cy.get(':nth-child(1) > :nth-child(6) > form > .btn-success').click({force: true});

        // cy.get("#select2-hari_id-container").clear();
        cy.get("#select2-hari_id-container").type("Selasa{enter}");
        // cy.get("#select2-kelas_id-container").clear();
        cy.get('#select2-kelas_id-container').type('KELAS 01{enter}');
        // cy.get("#select2-guru_id-container").clear();
        cy.get('#select2-guru_id-container').type('BI{enter}');
        // cy.get("#jam_mulai").clear();
        cy.get("#jam_mulai").type("10:01");
        // cy.get("#jam_selesai").clear();
        cy.get("body > div > div.content-wrapper > section > div > div > div > div > form > div.card-body > div > div:nth-child(3) > div:nth-child(2) > input").type("11:01");
        // cy.get("#select2-ruang_id-container").clear();
        cy.get('#select2-ruang_id-container').type('Ruang 07{enter}');
        
        cy.get(".btn-primary").click();
        
        
        // cy.get("#table > tbody > tr:nth-child(3) > td:nth-child(7) > div > div > form > button").click({force: true});
});

    it("Delete Jadwal", function () {
        cy.contains("Master Data").click();
        cy.contains("Data Jadwal").click();
        cy.get('.odd > :nth-child(3) > .btn').click();
        cy.get(':nth-child(1) > :nth-child(6) > form > .btn-danger').click({force: true});
        

    })
})