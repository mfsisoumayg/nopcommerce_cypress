import Page from "./page";

class Login extends Page {

    #elements() {
        return {
            email : cy.get('#Email'),
            pwd : cy.get('#Password'),
            remMe : cy.get('#RememberMe'),
            submitBtn : cy.get('button[type=submit]')
        }
    }

    open() {
        super.openUrl(Cypress.env('login'))
    }

    setEmail(email) {
        this.#elements().email.clear().type(email)
    }

    setPwd(pwd) {
        this.#elements().pwd.clear().type(pwd)
    }

    /**
     * @param {boolean} state 
     */
    rememberMe(state) {
        if (state) {
            this.#elements().remMe.check()
        } else {
            this.#elements().remMe.uncheck()
        }
    }

    login() {
        this.#elements().submitBtn.click()
    }

}

export default new Login();