import * as locators from '../locators/index';

Cypress.Commands.add('loginThroughUI', (user, pass) => {
  cy.get(locators.login.username).type(user)
  cy.get(locators.login.password).type(pass)
  cy.get(locators.login.loginButton).click()
  cy.contains('Activity from Today')
});

Cypress.Commands.add('loginThroughPOST', (user, pass) => {
  cy.request({
    url: '/Account/LogOn',
    method: 'POST',
    body: {
      PassWord: pass,
      UserName: user,
      ReturnUrl: "/"
    },
    headers: {
      "Accept": "*/*",
      "Content-Type": "application/json; charset=utf-8"
    }
  }).then(()=>{
    cy.visit('/')
  })
});