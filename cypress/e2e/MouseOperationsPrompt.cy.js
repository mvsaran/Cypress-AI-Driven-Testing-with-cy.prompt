/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

describe('🖱️ Mouse Operations using cy.prompt', () => {

  it.skip('Performs mouse hover actions', () => {

    cy.prompt([
      'Visit https://demo.opencart.com.gr/ and hover over the first dropdown in the navigation menu',
      'Click on the second item in the dropdown under the first category',
      'Verify that the page heading displays Mac',

      
    ]);

  });
});
