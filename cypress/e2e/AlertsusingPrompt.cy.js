/// <reference types="cypress" />

describe("Simple JS Alert using cy.prompt", () => {
  it.skip("Handles a single JS Alert", () => {

    cy.prompt([
      // Visit the page
      'Given I visit "https://the-internet.herokuapp.com/javascript_alerts"',

      // Stub JS Alert
      'When I stub window.alert and alias it as "alertStub"',

      // Click the alert button
      'And I click the element with selector button[onclick="jsAlert()"]',

      // Assert the alert was called with correct text
      'Then the alias "alertStub" should have been called with text "I am a JS Alert"'
    ], {
      handler: (step) => {

        // Visit the page
        if (step.startsWith('Given I visit')) {
          const url = step.match(/"(.+?)"/)[1];
          cy.visit(url);

        // Stub window.alert
        } else if (step.startsWith('When I stub window.alert')) {
          cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub');
          });

        // Click the element
        } else if (step.startsWith('And I click the element with selector')) {
          const selector = step.match(/selector (.+)/)[1];
          cy.get(selector).click();

        // Assert alert was called
        } else if (step.startsWith('Then the alias')) {
          const alias = step.match(/alias "(.+?)"/)[1];
          const text = step.match(/with text "(.+?)"/)[1];
          cy.get(`@${alias}`).should('have.been.calledWith', text);
        }

      }
    });

  });
});
