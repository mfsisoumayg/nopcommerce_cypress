import login from "../pages/login";
import dashboard from "../pages/dashboard";

Cypress.Commands.add('open', () => {
    login.openPageUrl()
})

Cypress.Commands.add('adminLogin', () => {
    cy.open()

    cy.fixture('users.json').its("admin").then(data => { 
        login.setEmail(data.email)
        login.setPwd(data.password)
    });
    login.login()

    dashboard.assertPageUrl()
    dashboard.validateDashboard()
})

Cypress.Commands.add('userLogin', (email, password) => {
    cy.open()

    login.setEmail(email)
    login.setPwd(password)
    login.login()

    dashboard.assertPageUrl()
    dashboard.validateDashboard()
})