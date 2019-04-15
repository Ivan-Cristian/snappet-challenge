import * as user from '../fixtures/user';
import * as commands from '../support/commands/index';

function randomNumber() {
  return (Math.floor(Math.random() * 10)).toString()
}

const subjectTitle = `Assignment Cristian ${randomNumber()}`
const editedTitle = `Edited ${subjectTitle}`

describe('Teacher Dashboard for Snappet', () => {
  before(() => {
    cy.clearCookies()
    cy.visit('/')
    commands.loginThroughUI(user.testUser.username, user.testUser.password)
  })
  it('should allow adding a new subject', () => {
    commands.activateSubjectWithName('Spelling', 5, subjectTitle)
    commands.assertActivatedSubjectPresent(subjectTitle)
  })
  it('should allow editiong of newly added subject', () => {
    commands.editTitleForSubject(subjectTitle, editedTitle)
    commands.assertSubjectNotPresentOnDashboard(subjectTitle)
    commands.assertActivatedSubjectPresent(editedTitle)
  })
  it('should allow deletion of edited subject', () => {
    commands.removeSubjectByTitle(editedTitle)
    commands.assertSubjectNotPresentOnDashboard(subjectTitle)
    commands.assertSubjectNotPresentOnDashboard(editedTitle)
  })
})