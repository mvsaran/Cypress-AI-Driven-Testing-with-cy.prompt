/// <reference types="cypress" />

describe("Auto Suggestions Demo using cy.prompt", () => {
  it.skip("Should select a suggestion from autocomplete", () => {

    cy.prompt([
      // Visit page
      'Given I visit "https://rahulshettyacademy.com/AutomationPractice/"',

      // Type into input field
      'When I type "ind" into the element with selector #autocomplete',

      // Wait for suggestions to appear and assert
      'Then I should see elements in the suggestion list with selector ".ui-menu-item div"',

      // Click the first suggestion
      'When I click the first element in the suggestion list with selector ".ui-menu-item div"',

      // Verify input value updated
      'Then the element with selector #autocomplete should contain text "India"'
    ], {
      handler: (step) => {

        if (step.startsWith('Given I visit')) {
          const url = step.match(/"(.+?)"/)[1];
          cy.visit(url);

        } else if (step.includes('type')) {
          const match = step.match(/type "(.+?)" into the element with selector (.+)/);
          cy.get(match[2]).type(match[1]);

        } else if (step.includes('should see elements in the suggestion list')) {
          const selector = step.match(/selector "(.+?)"/)[1];
          cy.get(selector).should('be.visible');

        } else if (step.includes('click the first element in the suggestion list')) {
          const selector = step.match(/selector "(.+?)"/)[1];
          cy.get(selector).first().click();

        } else if (step.includes('should contain text')) {
          const match = step.match(/selector (.+) should contain text "(.+?)"/);
          cy.get(match[1]).should('have.value', match[2]);
        }

      }
    });

  });
});
