import * as locators from '../locators/index';


export const selectGroupLevelAndContinue = level => {
  cy.get(locators.modal.subjectsModal.subjectLevelSlider).should('be.visible')
  cy.get(locators.modal.subjectsModal.subjectLevelSlider).contains(level).click()
  cy.get(locators.modal.subjectsModal.continueButton).click()
}

export const selectSubjectAndContinue = subjectName => {
  cy.get(locators.modal.subjectsModal.subjectsDropdown).click()
  cy.get(locators.modal.subjectsModal.subjectsDropdownList).contains(subjectName).click()
  cy.get(locators.modal.subjectsModal.continueButton).click()
}

export const selectGroupForSubject = (group = 0) => {
  cy.get(locators.modal.subjectsModal.groupCard).eq(group).click()
}

export const enterNameForNewSubject = (name) => {
  cy.get(locators.modal.subjectsModal.subjectNameField).clear({force: true}).type(name)
}

export const selectStudentsForNewSubjectAndContinue = (students = "#Challenge1") => {
  cy.get(locators.modal.subjectsModal.studentSelectionDropdown).click()
  cy.get(locators.modal.subjectsModal.subjectsDropdownList).contains(students).click()
  cy.get(locators.modal.subjectsModal.activateSubjectButton).click()
}