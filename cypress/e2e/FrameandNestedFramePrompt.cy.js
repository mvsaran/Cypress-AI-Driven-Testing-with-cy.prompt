/// <reference types="cypress" />

// Helper to access iframe body
Cypress.Commands.add('getIframeBody', (iframeSelector) => {
  return cy
    .get(iframeSelector)
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap);
});

describe("Frames Test using cy.prompt", () => {
  it.skip("Types into inputs inside multiple iframes", () => {

    cy.prompt([
      // Visit site and set viewport
      'Given I visit "https://ui.vision/demo/webtest/frames/" and set viewport to 1280x800',

      // Type into first iframe
      'When I type "Hello Selenium" into the input field named mytext1 inside iframe[src="frame_1.html"]',

      // Type into second iframe
      'When I type "Hello Cypress" into the input field named mytext2 inside iframe[src="frame_2.html"]'
    ], {
      handler: (step) => {

        // Visit + viewport
        if (step.startsWith('Given I visit')) {
          const url = step.match(/"(.+?)"/)[1];
          cy.visit(url);
          const viewportMatch = step.match(/set viewport to (\d+)x(\d+)/);
          if (viewportMatch) {
            cy.viewport(Number(viewportMatch[1]), Number(viewportMatch[2]));
          }

        // Typing inside iframe
        } else if (step.includes('inside iframe')) {
          const match = step.match(/type "(.+?)" into the input field named (.+?) inside iframe\[src="(.+?)"\]/);
          const value = match[1];
          const inputName = match[2];
          const iframeSrc = match[3];

          cy.getIframeBody(`iframe[src="${iframeSrc}"]`)
            .find(`input[name="${inputName}"]`)
            .type(value);
        }

      }
    });

  });
});
