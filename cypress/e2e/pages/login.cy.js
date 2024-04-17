import login from "../../pages/login"

describe('login page ', () => {
  it('admin login - 1', () => {
    cy.adminLogin()
  })

  it('admin login - 2', () => {
    cy.fixture('users.json').its("admin").then((data) => {
      cy.userLogin(data.email, data.password)
    });
  })
})