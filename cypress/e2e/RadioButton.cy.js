/// <reference types="cypress" />

describe("🎯 Radio Button Selection using cy.prompt", () => {
  it("Selects and verifies radio buttons on the practice page", () => {
    cy.prompt([
      // Step 1: Open website
      'Visit the site https://rahulshettyacademy.com/AutomationPractice/',

      // Step 2: Visibility checks
      'Ensure all three radio buttons with values radio1, radio2, and radio3 are visible on the page',

      // Step 3: Select first radio button
      'Select the first radio button with value radio1 and verify it is selected',

      // Step 4: Verify others are not selected
      'Confirm that the second radio button with value radio2 is not selected yet',

      // Step 5: Select the second radio button
      'Select the second radio button with value radio2 and verify it becomes selected',

      // Step 6: Select the third radio button
      'Select the third radio button with value radio3 and verify it is selected',
    ]);
  });
});
