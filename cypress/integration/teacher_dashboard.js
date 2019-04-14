import * as user from '../fixtures/user';
import * as commands from '../support/commands/index';

function randomNumber() {
  return (Math.floor(Math.random() * 10)).toString()
}

let subjectTitle = `Assignment Cristian ${randomNumber()}`
let editedTitle = `Edited ${subjectTitle}`

describe('Teacher Dashboard for Snappet', function () {
    before(function () {
      cy.clearCookies()
      cy.visit('/')
      commands.loginThroughUI(user.testUser.username, user.testUser.password)
    })
    it('should allow adding, editing and deleting of a new subject', () => {
      commands.activateSubjectWithName('Spelling', 5, subjectTitle)
      commands.assertActivatedSubjectPresent(subjectTitle)
      commands.editTitleForSubject(subjectTitle, editedTitle)
      commands.removeSubjectByTitle(editedTitle)
    })
})