describe('Cadastro Cy', () => {

    it('Cadastro com sucesso', () => {
        cy.visit('http://127.0.0.1:5500/cadastro.html');

        cy.get('#usuario').type('teste'); 
        cy.get('#email').type('teste@gmail.com');
        cy.get('#senha').type('admin');
        cy.get('#confirSenha').type('admin');
        cy.get('#entrar').click();

        cy.on('window:alert', (txt) => {
            expect(txt).to.contains("Cadastro realizado com sucesso");
        });
    });

    it('Cadastro senhas não são iguais', () => {
        cy.visit('http://127.0.0.1:5500/cadastro.html');

        cy.get('#usuario').type('teste');
        cy.get('#email').type('teste@gmail.com');
        cy.get('#senha').type('admin');
        cy.get('#confirSenha').type('aa');
        cy.get('#entrar').click();

        cy.on('window:alert', (txt) => {
            expect(txt).to.contains("Senhas não correspondem");
        });
    });

    it('Faltam campos', () => {
        cy.visit('http://127.0.0.1:5500/cadastro.html');

        cy.get('#usuario').type('teste'); 
        cy.get('#senha').type('admin');
        cy.get('#confirSenha').type('aa'); 
        cy.get('#entrar').click();

        cy.on('window:alert', (txt) => {
            expect(txt).to.contains("Campos faltando");
        });
    });

});
