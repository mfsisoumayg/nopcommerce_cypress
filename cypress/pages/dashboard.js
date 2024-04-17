import Page from "./page";

class Dashboard extends Page {
    assertPageUrl() {
        super.assertPageUrl(Cypress.env("admin"))
    }

    #elements() {
        return {
            dashboard : cy.get('.content-header')
        }
    }

    validateDashboard() {
        this.#elements().dashboard.should("be.visible")
    }

}

export default new Dashboard();