export default class Page {
    /**
     * @param {string} page 
     */
    openUrl(page) {
        const url = Cypress.config('baseUrl').concat(page)
        cy.visit(url)
        this.assertUrl(page)
    }

    /**
     * @param {string} page 
     */
    assertUrl(page) {
        cy.url().should('include', page)
    }

}