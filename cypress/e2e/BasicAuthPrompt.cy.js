describe('Feature: Basic Authentication with cy.prompt', () => {

  it('Scenario: Successful authentication with valid credentials', () => {
    cy.prompt(
      [
        'Given the user visits "https://the-internet.herokuapp.com/basic_auth" with username "{{username}}" and password "{{password}}"',
        'Then the page should contain the text "Congratulations! You must have the proper credentials."'
      ],
      {
        placeholders: {
          username: Cypress.env('BASIC_AUTH_USER') || 'admin',
          password: Cypress.env('BASIC_AUTH_PASS') || 'admin',
        },
      }
    );
  });

});
