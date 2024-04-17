import Page from "./page";

class Dashboard extends Page {
    assertPageUrl() {
        super.assertPageUrl(Cypress.env("admin"))
    }

    #elements = {
            dashboard : () => cy.get('.content-header'),
            cards : () => cy.get('div.with-border'),
            maxCard : (cardText) => cy.get('.card-title').contains(cardText)
                .parent().find('.fa-plus').parent(),
            minCard : (cardText) => cy.get('.card-title').contains(cardText)
                .parent().find('.fa-minus').parent(),
    }

    validateDashboard() {
        this.#elements.dashboard().should("be.visible")
    }

    /**
     * @param {number} cardLen
     */
    validateCardsLen(cardLen) {
        this.#elements.cards().should("have.length", cardLen)
    }

    /**
     * @param {string} cardText
     * @param {number} idx
     */
    validateCardsText(cardText, idx) {
        this.#elements.cards().eq(idx).should("contain.text", cardText)
    }

    /**
     * @param {string} cardText
     */
    maxCard(cardText) {
        this.#elements.maxCard(cardText).click()
    }

    /**
     * @param {string} cardText
     */
    minCard(cardText) {
        this.#elements.minCard(cardText).click()
    }

}

export default new Dashboard();