import * as locators from '../locators/index';

/**
 * 
 * @param {string} user username
 * @param {string} pass password
 */
export function loginThroughUI(user, pass) {
  cy.get(locators.login.username).type(user)
  cy.get(locators.login.password).type(pass)
  cy.get(locators.login.loginButton).click()
  cy.contains('Activity from Today')
}

/**
 * attempts to login through sending POST request to login endpoint
 * @param {string} user 
 * @param {string} pass 
 */
export function loginThroughPOST(user, pass) {
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
  }).then(() => {
    cy.visit('/')
  });
}
