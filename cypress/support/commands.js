import login from "../pages/login";

Cypress.Commands.add('open', () => {
    login.open()
})

Cypress.Commands.add('adminLogin', () => {
    cy.open()

    cy.fixture('users.json').its("admin").then(data => { 
        login.setEmail(data.email)
        login.setPwd(data.password)
    });
    login.login()

    // Dashboard.assertUrl()
    // cy.get('.content-header').should('be.visible');
})

Cypress.Commands.add('userLogin', (email, password) => {
    cy.open()

    login.setEmail(email)
    login.setPwd(password)
    login.login()

    // Dashboard.assertUrl()
    // cy.get('.content-header').should('be.visible');
})