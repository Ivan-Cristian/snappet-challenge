import * as locators from '../locators/index';
import * as modalOperations from './modal'

export const openSubjectModal = () => {
  cy.get(locators.dashboard.activateSubjectButton).should('be.visible')
  cy.get(locators.dashboard.activateSubjectButton).click()
  cy.get(locators.modal.subjectsModal.body).should('be.visible')
}
/**
 * all have default values, so function can be called with no params
* @param {string} subjectName the class module for which the subject is activated
* @param {number, string} level group level slider option
* @param {string} name name of new subject to be activated
*/
export function activateSubjectWithName(subjectName ='', level = 5, name = "Assignment Cristian") {
  openSubjectModal()
  modalOperations.selectSubjectAndContinue(subjectName)
  modalOperations.selectGroupLevelAndContinue(level)
  modalOperations.selectGroupForSubject()
  modalOperations.enterNameForNewSubject(name)
  modalOperations.selectStudentsForNewSubjectAndContinue()
}

/**
 * 
 * @param {string} name the name of the just-added subjected
 */
export function assertActivatedSubjectPresent(name) {
  cy.get(locators.dashboard.subjectCard.body).should('contain', name)
  cy.get(locators.dashboard.subjectCard.body).find('svg').should('have.class', 'icon-spellingcolored')
}

/**
 * 
 * @param {string} prevTitle the title of which subject you'd like to change
 * @param {string} newTitle the new title you'd like to set on the subject
 */
export function editTitleForSubject(prevTitle, newTitle) {
  cy.get(locators.dashboard.subjectCard.body).contains(prevTitle).eq(0)
    .parents(locators.dashboard.subjectCard.body)
    .find(locators.dashboard.subjectCard.editSubjectButton, {timeout: 10000}).click()
  cy.get(locators.dashboard.subjectCard.editSubjectTitleField).click()
  cy.get(locators.dashboard.subjectCard.editSubjectTitleField).clear({force: true}).type(newTitle)
  cy.get(locators.dashboard.subjectCard.editSubjectLessonPlanField).should('contain', 'My Lesson Plan')
  cy.get(locators.dashboard.subjectCard.editSubjectSaveButton).click()
  cy.get(locators.toast.successToast).should('be.visible')
  .and('have.text', 'Subject changes have been saved')
  cy.get(locators.toast.successToast).should('not.be.visible')
}
/**
 * 
 * @param {string} title the title of the subject you'd like removed
 */
export function removeSubjectByTitle(title) {
  cy.get(locators.dashboard.subjectCard.body).contains(title).eq(0)
    .parents(locators.dashboard.subjectCard.body)  
    .find(locators.dashboard.subjectCard.editSubjectButton, {timeout: 10000}).click()
  cy.get(locators.dashboard.subjectCard.editSubjectDeleteButton).click()
  cy.get(locators.modal.removeSubjectModal.removeButton).should('be.visible')
  cy.get(locators.modal.removeSubjectModal.removeButton).click()
  cy.get(locators.toast.successToast).should('be.visible')
    .and('have.text', 'The subject has been deactivated.')
  cy.get(locators.toast.successToast).should('not.be.visible')
}