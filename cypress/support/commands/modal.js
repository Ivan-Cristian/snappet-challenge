import * as locators from '../locators/index';

/**
 * 
 * @param {int} level the level to set the group level slider at
 */
export const selectGroupLevelAndContinue = level => {
  cy.get(locators.modal.subjectsModal.subjectLevelSlider).should('be.visible')
  cy.get(locators.modal.subjectsModal.subjectLevelSlider).contains(level).click()
  cy.get(locators.modal.subjectsModal.continueButton).click()
}

/**
 * 
 * @param {strng} subjectName the name of the subject to click on
 */
export const selectSubjectAndContinue = subjectName => {
  cy.get(locators.modal.subjectsModal.subjectsDropdown).click()
  cy.get(locators.modal.subjectsModal.subjectsDropdownList).contains(subjectName).click()
  cy.get(locators.modal.subjectsModal.continueButton).click()
}

/**
 * 
 * @param {int} group pick which group card to click on 
 */
export const selectGroupForSubject = (group = 0) => {
  cy.get(locators.modal.subjectsModal.groupCard).eq(group).click()
}

/**
 * 
 * @param {string} name title of the subject to be added
 */
export const enterNameForNewSubject = (name) => {
  cy.get(locators.modal.subjectsModal.subjectNameField).clear({force: true}).type(name)
}

/**
 * defaults to '#Challenge1' student group
 * @param {string} students the value of the option in the studentSelection drop down to click on
 */
export const selectStudentsForNewSubjectAndContinue = (students = "#Challenge1") => {
  cy.get(locators.modal.subjectsModal.studentSelectionDropdown).click()
  cy.get(locators.modal.subjectsModal.subjectsDropdownList).contains(students).click()
  cy.get(locators.modal.subjectsModal.activateSubjectButton).click()
}