import dashboard from "../../pages/dashboard";

describe('dashboard page', () => {
    beforeEach('adming login', () => {
        cy.adminLogin()
    })

    it('dashboard page', () => {
        cy.fixture('dashboard.json').its("cards").then((cards) => {
            const values = Object.values(cards)
            dashboard.validateCardsLen(values.length)

            values.reduce((acc, crr) => {
                dashboard.validateCardsText(crr, acc)
                return ++acc
            }, 0)

            dashboard.maxCard(cards.startAcceptOrders)
            dashboard.minCard(cards.nopCommNews)
        })
    })
})