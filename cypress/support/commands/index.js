import {assertSubjectNotPresentOnDashboard, activateSubjectWithName, editTitleForSubject, removeSubjectByTitle, assertActivatedSubjectPresent} from './dashboard';
import {loginThroughUI, loginThroughPOST} from './login';
import modal from './modal';

export {
  activateSubjectWithName, 
  assertActivatedSubjectPresent,
  assertSubjectNotPresentOnDashboard,
  editTitleForSubject, 
  loginThroughUI,
  loginThroughPOST, 
  modal,
  removeSubjectByTitle
}