/// <reference types="cypress" />

describe('Check Boxes Demo using cy.prompt', () => {
  it('should verify and select checkboxes on the page', () => {
    cy.prompt([
      'Open the website https://rahulshettyacademy.com/AutomationPractice/',
      'Make sure the checkboxes with IDs checkBoxOption1, checkBoxOption2, and checkBoxOption3 are visible on the page',
      'Select the checkbox with ID checkBoxOption1',
      'Verify that checkBoxOption1 is checked',
      'Verify that checkBoxOption2 is not checked',
      'Select the checkbox with ID checkBoxOption3',
      'Verify that checkBoxOption3 is checked'
    ]);
  });
});
