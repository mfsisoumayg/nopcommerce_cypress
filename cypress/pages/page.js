export default class Page {
    /**
     * @param {string} page 
     */
    openUrl(page) {
        const url = Cypress.config('baseUrl').concat(page)
        cy.visit(url)
        this.assertPageUrl(page)
    }

    /**
     * @param {string} page 
     */
    assertPageUrl(page) {
        cy.url().should('include', page)
    }

}