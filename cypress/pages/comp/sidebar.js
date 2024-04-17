class Sidebar {

    #elements = {
        search: () => cy.get('div#search-box'),
        cards: () => cy.get('ul.nav-sidebar > li.nav-item')
    }

    /**
     * @param {string} searchText 
     */
    search(searchText) {
        this.#elements.search().clear().type(searchText)
    }

    /**
     * @param {number} cardLen
     */
    validateCardsLen(cardLen) {
        this.#elements.cards().should("have.length", cardLen)
    }

    /**
     * @param {string} cardText
     */
    clickMainCardText(cardText) {
        this.#elements.cards().contains(cardText).click()
    }
}

export default new Sidebar()