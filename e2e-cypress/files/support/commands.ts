// ***********************************************
// This commands.js contains custom commands and
// overwrite existing commands.
//
// For more information about custom commands
// please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import { addGenericLoginCommands } from './generic-login';
import { addLoginToAADWithMFA, addLoginToAAD, addGetTOTP, addSessionLoginWithMFA } from './login-functions';

addGenericLoginCommands();
addGetTOTP();
addSessionLoginWithMFA();
addLoginToAAD();
addLoginToAADWithMFA();

declare global {
  namespace Cypress {
    interface Chainable<> {
      loginToAAD(username: string, password: string);
      loginToAADWithMFA(username: string, password: string);
      sessionLoginWithMFA(username: string, password: string);
      getTOTP();
      addContextPath(title: string, screenshot: string);
    }
  }
}
