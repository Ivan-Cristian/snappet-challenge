import * as locators from '../support/locators/index';
import * as user from '../fixtures/user';

function randomNumber() {
  return (Math.floor(Math.random() * 10)).toString()
}

let subjectTitle = `Assignment Cristian ${randomNumber()}`
let editedTitle = `Edited ${subjectTitle}`

describe('Teacher Dashboard for Snappet', function () {
    before(function () {
      cy.clearCookies()
      cy.visit('/')
      cy.loginThroughUI(user.testUser.username, user.testUser.password)
    })
    it('should allow adding, editing and deleting of a new subject', () => {
      cy.activateSubjectWithName('Spelling', 5, subjectTitle)
      cy.assertActivatedSubject(subjectTitle)
      cy.editTitleForSubject(subjectTitle, editedTitle)
      cy.removeSubjectByTitle(editedTitle)
    })
})