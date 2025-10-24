describe('Feature: Cross-Origin Behavior using cy.prompt', () => {

  it('Scenario: Verify localStorage is isolated between origins', { retries: 1 }, () => {

    // Step 1: Start on Wikipedia
    cy.prompt([
      'Given the user visits "https://www.wikipedia.org"',
      'Then the page should contain "Wikipedia"'
    ]);

    // Step 2: Manipulate localStorage (direct Cypress command)
    cy.window().then((win) => {
      win.localStorage.setItem('testKey', 'wikiValue');
      expect(win.localStorage.getItem('testKey')).to.equal('wikiValue');
    });

    // Step 3: Switch origin manually using cy.origin()
    cy.origin('https://developer.mozilla.org', () => {
      cy.visit('/');
      cy.window().then((win) => {
        expect(win.localStorage.getItem('testKey')).to.be.null;
      });
    });
  });
});
